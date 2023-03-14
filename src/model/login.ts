import { Selector } from "testcafe";
import XPathSelector from "../../xpath-selector";

class LoginModel {
  emailInput: Selector;
  passwordInput: Selector;
  submitButton: Selector;
  emailWarningText: Selector;
  passwordWarningText: Selector;
  errorText: Selector;

  constructor() {
    this.emailInput = Selector("input").withAttribute("name", "email");
    this.passwordInput = Selector("input").withAttribute("name", "password");
    this.submitButton = Selector("div").child("button");
    this.emailWarningText = Selector(
      '//*[@id="__next"]/div/section[1]/div/div/form/div[1]/div[2]'
    );
    this.passwordWarningText = XPathSelector(
      '//*[@id="__next"]/div/section[1]/div/div/form/div[2]/div[2]'
    );
    this.errorText = Selector("/div/div/div[2]");
  }
}

export default new LoginModel();
