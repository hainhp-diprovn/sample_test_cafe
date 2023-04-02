import { Selector } from "testcafe";
import loginModel from "../model/login";

fixture`The signin page`.page("./signin");

// Case 1
// test("Login failed with password: 123456789102 - password over 11 characters", async (t) => {
//   await t
//     .typeText(
//       xpathSelector('//*[@id="main-form"]/div/div[1]/div[2]/fieldset[2]/legend'), // Selector by CSS
//       "hainhp@dipro.vn"
//     )
//     .typeText(
//       Selector("input").withAttribute("name", "password"),
//       "123456789102"
//     )
//     .click(Selector("div").child("button")) // Selector by DOM - submit button
//     .expect(Selector(".text-red-700").textContent)
//     .eql("password must be at most 11 characters");
// });

// test("Test submit button", async (t) => {
// console.log(await loginModel.emailInput.offsetHeight);
// console.log(await loginModel.emailInput.offsetLeft);
// console.log(await loginModel.emailInput.offsetTop);
// console.log(await loginModel.emailInput.offsetWidth);
// console.log(await loginModel.submitButton.visible);

// console.log(await loginModel.submitButton);
// await t.click(loginModel.submitButton)
//     .expect(loginModel.emailWarningText.textContent)
//     .eql("Must be a valid email");
// });

test("Login failed with invalid password: 12345 & invalid email: hainhp", async (t) => {
  await t
    .typeText(loginModel.emailInput, "hainhp")
    .typeText(loginModel.passwordInput, "12345")
    .click(loginModel.submitButton) // Selector by DOM - submit button
    .expect(loginModel.redText.count)
    .eql(2)
    .expect(loginModel.redText.nth(0).textContent)
    .eql("Must be a valid email")
    .expect(loginModel.redText.nth(1).textContent)
    .eql("password must be at least 6 characters");
});

test("Login failed with invalid password: 12345 & invalid email: hainhp", async (t) => {
  await t
    .typeText(loginModel.emailInput, "hainhp")
    .typeText(loginModel.passwordInput, "12345")
    .click(loginModel.submitButton) // Selector by DOM - submit button
    .expect(loginModel.emailWarningText.textContent)
    .eql("Must be a valid email")
    .expect(loginModel.passwordWarningText.textContent)
    .eql("password must be at least 6 characters");
});
