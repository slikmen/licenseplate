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
          @paste="checkLicense"
        />
      </div>
    </div>
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
        }
      },
      computed: {
        license() {
          return this.checkLicense(this.value, false);
        }
      },
      methods: {
        checkLicense(e, doEmit = true) {
          if (e) {
            const license = transformStringIntoLicense(e);
            const value = typeof e.target !== "undefined" ? e.target.value : e;
            if (license === 'no-template-found') {
              this.$emit('on-error');
              return value;
            } else {
              if (doEmit) {
                this.$emit('input', license);
                this.$emit('change', license);
              }
              if (license.length === 8) {
                return license;
              } else {
                return value;
              }
            }
          }
        }
      }
    }
</script>