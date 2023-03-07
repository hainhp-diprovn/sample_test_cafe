import { ClientFunction, Selector } from "testcafe";
import XPathSelector from "./xpath-selector";

fixture`The signin page`.page("http://internal-dev.dipro-tech.com/signin");

// Case 1
test("Case 1 - Login failed with password: 123456789102 - password over 11 characters", async (t) => {
  await t
    .typeText(
      Selector("input").withAttribute("name", "email"), // Selector by CSS
      "hainhp@dipro.vn"
    )
    .typeText(
      Selector("input").withAttribute("name", "password"),
      "123456789102"
    )
    .click(Selector("div").child("button")) // Selector by DOM - submit button
    .expect(Selector(".text-red-700").textContent)
    .eql("password must be at most 11 characters");
});


test("Case 1 - Login failed with password: 123123123123 - password over 11 characters", async (t) => {
  await t
    .typeText(
      Selector("input").withAttribute("name", "email"), // Selector by CSS
      "hainhp@dipro.vn"
    )
    .typeText(
      Selector("input").withAttribute("name", "password"),
      "123456789102"
    )
    .click(Selector("div").child("button")) // Selector by DOM - submit button
    .expect(Selector(".text-red-700").textContent)
    .eql("password must be at most 11 characters");
});

// test("Login failed - wrong email", async (t) => {
//   await t
//     .typeText(
//       Selector(".MuiInputBase-input"), // Selector by CSS
//       "linhhta2@dipro.vn"
//     )
//     .typeText(Selector("input").withAttribute("name", "password"), "Dipro555#")
//     .click(Selector("div").child("button")) // Selector by DOM
//     .expect(Selector(".MuiAlert-message").textContent)
//     .eql("Username or password is not correct");
// });

// test("Login failed - wrong password", async (t) => {
//   await t
//     .typeText(
//       Selector("input").withAttribute("name", "email"),
//       "linhhta@dipro.vn"
//     )
//     .typeText(Selector("input").withAttribute("name", "password"), "Dipro555")
//     .click(Selector("div").child("button"))
//     .expect(Selector(".MuiAlert-message").textContent)
//     .eql("Username or password is not correct");
// });

// test("Login success", async (t) => {
//   await t
//     .typeText(
//       Selector("input").withAttribute("name", "email"),
//       "linhhta@dipro.vn"
//     )
//     .typeText(Selector("input").withAttribute("name", "password"), "Dipro555#")
//     .click(Selector("div").child("button"))
//     .expect(
//       // *[@id="main-form"]/div/header/h1
//       XPathSelector('//*[@id="__next"]/div/div/div[3]/div/div/header/div[1]/p')
//         .textContent
//     )
//     .eql("My Attendance");
// });

// fixture`Test api login`
//     .beforeEach(async t => {
//         console.log("before");
//         t.ctx.someProp = 123;

//     })
//     .afterEach(async t => {
//         console.log("after");

//         console.log(t.ctx.newProp); // > abc
//     });

// test('Test1', async t => {
//     console.log("====Test1");
//     console.log(t.fixtureCtx.someProp); // > 123
// });

// test('Test2', async t => {
//     console.log("====Test2");
//     t.fixtureCtx.newProp = 'abc';
// });
