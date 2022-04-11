describe("Add Checkboxes page test cases", function () {
  beforeEach(function () {
    // "this" points at the test context object
    cy.fixture("checkboxes").then((testdata) => {
      this.testdata = testdata;
    });
    cy.visit("/");
  });
  it("Verify checkboxes link is available on the home page", function () {
    cy.get("li>a").contains(this.testdata.pageLinkText).should("be.visible");
  });
  it("Verify user is able to click Checkboxes link", function () {
    cy.clickOnPageLink(this.testdata.pageLinkText, this.testdata.pageURL);
    cy.get("h3").should("have.text", this.testdata.pageHeading);
  });
  it("Verify user is able to Click on checkbox 1 to check the checkbox", function () {
    cy.clickOnPageLink(this.testdata.pageLinkText, this.testdata.pageURL);
    cy.ClickChecbox(this.testdata.checkbox1);
  });
  it("Verify user is able to Click on checkbox 2 to check the checkbox", function () {
    cy.clickOnPageLink(this.testdata.pageLinkText, this.testdata.pageURL);
    cy.ClickChecbox(this.testdata.checkbox2);
  });
});
