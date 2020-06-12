import {
    removeDashes,
    findIndices,
    checkIfNumber
  } from './stringHandler';
  
  import { licenseTemplates } from '../models/license.model';
  
  export function transformStringIntoLicense(e: any) {
    const value = removeDashes(e.target.value);
    if (value.length >= 6) {
      // Bind all letters from array and replacing
      // Numbers with 9 and letters with X
      const letters = transformStringToArr(value).join('');
      let license: any = [];
  
      for (let index = 0; index < licenseTemplates.length; index++) {
        const template = licenseTemplates[index];
  
        // Remove dashes from Template and present as string
        const removedDashes = template.split('-').join('');
  
        if (removedDashes === letters) {
          // Create Array from String
          license = removedDashes.split('');
          // Replace String with values from inputfield
          // license = replaceValuesFromInput(license, value)
          // Add dashes to the correct location, See LicenseTemplates
          license = handleTransformation(template, license, value);
          break;
        }
  
        // If For Loop has gone through all iterations 
        // then throw error, No template found.
        if (licenseTemplates.length === (index + 1)) {
          throw 'NoTemplateFound';
        }
      }
      if (license.length === 8) {
        return license.join('');
      }
    }
  
    return value;
  }
  
  function handleTransformation(template: string, license: any, input: string) {
    license.map((y: any, index: number) => license[index] = input[index]);
    findIndices(template, '-').forEach((dash: any) => license.splice(dash, 0, '-'));
    return license;
  }
  
  function transformStringToArr(string: string) {
    let tempArr: Array<string> = [];
    for (let index = 0; index < string.length; index++) {
      const letter = string[index];
      if (letter) {
        if (checkIfNumber(letter)) {
          tempArr = [...tempArr, '9'];
        } else {
          tempArr = [...tempArr, 'X'];
        }
      }
    }
  
    return tempArr;
  }