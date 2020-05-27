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
          v-validate="'required|license'"
          data-vv-validate-on="none"
        />
      </div>
    </div>
    <slot name="required-error" v-if="errors.has('license:required')"></slot>
    <slot name="license-error" v-if="errors.has('license:license')"></slot>
  </div>
</template>

<script>
    import { transformStringIntoLicense } from '../lib/licensePlateHandler';

    export default {
      name: 'license',
      data() {
        return {
          license: '',
          licenseMaxLength: 6
        }
      },
      inject: ['$validator'], 
      methods: {
        checkLicense(e) {
          this.$validator.errors.remove('license');
          this.licenseMaxLength = 6

          // Try to format license else catch error if
          // not template is not found.
          try {
            const license = transformStringIntoLicense(e);
            if (license.length === 8) {
                this.licenseMaxLength = 8;
            }
            this.license = license;
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
      }
    }
</script>

<style lang="scss" scoped>
@import url("../font/RobotoCondensed-Bold.ttf");

.license {
  display: flex;
  align-items: center;
  height: 40px;
  border: 2px solid #294394;
  border-radius: 2px;
  overflow: hidden;

  &__country {
    background-image: url(../images/nl-license.png);
    height: 40px;
    width: 35px;
    background-size: cover;
    background-position: center;
  }

  &__input {
    background: rgb(248, 197, 44);
    width: 100%;

    input {
      height: 40px;
      padding: 5px;
      box-sizing: border-box;
      font-size: 20px;
      width: 100%;
      padding-left: 15px;
      border: transparent;
      color: black;
      background: transparent;
      text-transform: uppercase;
      font-weight: bolder;
      font-family: "Roboto Condensed", sans-serif;
    }
  }
}
</style>