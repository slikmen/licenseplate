import { transformStringIntoLicense } from "../lib/licensePlateHandler";

test("LicenseTest", () => {
  expect(transformStringIntoLicense("80mjrs")).toBe("80-mj-rs");
});
