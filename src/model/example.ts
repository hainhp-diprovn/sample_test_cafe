import { Selector } from "testcafe";

// class ExampleModel {
//   nameInput: Selector;
//   submitButton: Selector;
//   usedCheckBox: Selector;
//   sliderBar: Selector;
//   sliderBarValue: Selector;

//   constructor() {
//     this.nameInput = Selector("#developer-name");
//     this.submitButton = Selector("#submit-button");
//     this.usedCheckBox = Selector("input").withAttribute(
//       "name",
//       "tried-test-cafe"
//     );
//     this.sliderBar = Selector(".slider-value");
//     this.sliderBarValue = Selector(".ui-slider-handle");
//   }
// }

// export default new ExampleModel();

export default {
  nameInput: Selector("#developer-name"),
  submitButton: Selector("#submit-button"),
  usedCheckBox: Selector("input").withAttribute("name", "tried-test-cafe"),
  sliderBar: Selector(".slider-value"),
  sliderBarValue: Selector(".ui-slider-handle"),
};
