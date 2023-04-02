import { Selector } from "testcafe";
import example from "../model/example";

fixture`Test example page`.page(
  "https://devexpress.github.io/testcafe/example"
);

// test("Test submit button", async (t) => {
//   await t
//     .typeText(example.nameInput, "Hai")
//     .click(example.submitButton)
//     .expect(Selector("#article-header").textContent)
//     .eql("Thank you, Hai!");
// });

//Case 15: Xac nhan slider
// test("Moving slider", async (t) => {
//   await t
//     .click(examplemode.usedCheckBox)
//     .click(examplemode.sliderBar)
//     .pressKey("right")
//     .expect(examplemode.sliderBar.value)
//     .eql("2");
// });

test("Example | Verify | Moving slider", async (t) => {
  const totalSize = 813.5; // Kích thước tổng của slide
  const totalCount = 10; // Số lượng value
  const dragToIndex = 9; // index muốn focus
  const slideThumbSize = 18.8; // Kích thước thumb slide
  const space =
    (totalSize / (totalCount - 1)) * (dragToIndex - 1) - slideThumbSize / 2; // Tính toán ra khoảng cách tính từ bên trái

  await t
    .click(example.usedCheckBox)
    .dragToElement(
      example.sliderBarValue,
      example.sliderBar.withText(`${dragToIndex}`)
    )
    .expect(example.sliderBarValue.offsetLeft)
    .eql(Math.round(space));
});
