<template>
  <div>
    <div class="license">
      <div class="license__country"></div>
      <div class="license__input">
        <input
          type="text"
          v-model="license"
          @input="checkLicense"
          :maxlength="licenseMaxLength"
          name="license"
          id="license"
          v-validate="'required|license'"
          data-vv-validate-on="none"
          @paste="onPasteAction"
        />
      </div>
    </div>
    <slot name="required-error" v-if="errors.has('license:required')"></slot>
    <slot name="license-error" v-if="errors.has('license:license')"></slot>
  </div>
</template>

<script>
    import { transformStringIntoLicense } from '../lib/licensePlateHandler';
    import { removeDashes } from '../lib/stringHandler';

    export default {
      name: 'license',
      props: ['value'],
      data() {
        return {
          license: '',
          licenseMaxLength: 8
        }
      },
      inject: ['$validator'], 
      methods: {
        checkLicense(e) {
          this.$validator.errors.remove('license');

          try {
            const license = transformStringIntoLicense(e);
            this.license = license;
            this.$emit('input', this.license)
            this.$emit('change', this.license)
          } catch (error) {
            this.$validator.validate('license');
          }
        },
        onPasteAction(e) {
          try {
            const license = transformStringIntoLicense(e);
            this.license = license;
            this.$emit('input', this.license)
            this.$emit('change', this.license)
          } catch (error) {
            this.$validator.validate('license');
          }
        }
      },
      mounted() {
        const license = (value) => {
          return value.includes('-');
        }
        this.$validator.extend('license', license, { });
        if (this.value) {
          this.checkLicense(this.value);
        }
      }
    }
</script>