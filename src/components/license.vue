<template>
  <div>
    <div class="license">
      <div class="license__country"></div>
      <div class="license__input">
        <input
          type="text"
          :value="license"
          @input="checkLicense"
          :maxlength="licenseMaxLength"
          name="license"
          id="license"
          v-validate="'required|license'"
          data-vv-validate-on="none"
          @paste="checkLicense"
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
          licenseMaxLength: 8,
          licenseError: false
        }
      },
      computed: {
        license() {
          return this.value;
        }
      },
      methods: {
        checkLicense(e) {
          this.$validator.errors.remove('license');
          try {
            const license = transformStringIntoLicense(e);
            this.$emit('input', license);
            this.$emit('change', license);
          } catch (error) {
            this.$emit('input', e.target.value.split('-').join(''));
            this.$emit('change', e.target.value.split('-').join(''));
            this.$validator.validate('license');
          }
        },
      },
      inject: ['$validator'], 

      mounted() {
        const license = (value) => {
          try {
            const newValue = transformStringIntoLicense(value)
            if (newValue) {
              return newValue.includes('-');
            }
          } catch (error) {
            return false;
          }
          return 
        }
        this.$validator.extend('license', license, { });
      }
    }
</script>