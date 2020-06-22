# Dutch Licenses vue plugin

This plugin in made for Vue to input a license input
that formats the inputted data to a correct license form

Note: This plugins needs vee-validate ^2.* to run.

## Installation

npm install license-plugin

## Setup

```javascript
import Vue from 'vue';
import LicensePlugin from 'license-plugin';

Vue.use(LicensePlugin);
```

## Usage 

```html
<template>
    <div>
        <license v-model="license" @change="onChangeEvent">
            <template slot="required-error">
                // Add custom error messages here
            </template>
        </license>
    </div>
</template>
```

