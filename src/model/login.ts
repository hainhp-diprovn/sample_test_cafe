import { Selector } from "testcafe";
import XPathSelector from "../../xpath-selector";

// class LoginModel {
//   emailInput: Selector;
//   passwordInput: Selector;
//   submitButton: Selector;
//   emailWarningText: Selector;
//   passwordWarningText: Selector;
//   redText: Selector;

//   errorText: Selector;

//   constructor() {
//     this.emailInput = Selector("input").withAttribute("name", "email");
//     this.passwordInput = Selector("input").withAttribute("name", "password");
//     this.submitButton = Selector("button").withAttribute("type", "submit");
//     this.emailWarningText = XPathSelector(
//       '//*[@id="__next"]/div/section[1]/div/div/form/div[1]/div[2]'
//     );
//     this.passwordWarningText = XPathSelector(
//       '//*[@id="__next"]/div/section[1]/div/div/form/div[2]/div[2]'
//     );
//     this.errorText = Selector("/div/div/div[2]");
//     this.redText = Selector(".text-red-700");
//   }
// }

// export default new LoginModel();

export default {
  emailInput: Selector("input").withAttribute("name", "email"),
  passwordInput: Selector("input").withAttribute("name", "password"),
  submitButton: Selector("button").withAttribute("type", "submit"),
  emailWarningText: XPathSelector(
    '//*[@id="__next"]/div/section[1]/div/div/form/div[1]/div[2]'
  ),
  passwordWarningText: XPathSelector(
    '//*[@id="__next"]/div/section[1]/div/div/form/div[2]/div[2]'
  ),
  errorText: Selector("/div/div/div[2]"),
  redText: Selector(".text-red-700"),
};
