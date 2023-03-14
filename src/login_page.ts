import loginModel from "./model/login";

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

// Case 1
test("Login failed with password: 123456789102 - password over 11 characters", async (t) => {
  await t
    .typeText(loginModel.emailInput, "hainhp@dipro.vn")
    .typeText(loginModel.passwordInput, "123456789102")
    .click(loginModel.submitButton) // Selector by DOM - submit button
    .expect(loginModel.passwordWarningText.textContent)
    .eql("password must be at most 11 characters");
});
