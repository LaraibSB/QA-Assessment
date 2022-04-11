describe("Add remove element page test cases", function () {
  beforeEach(function () {
    cy.fixture("addRemoveElement").then((testdata) => {
      this.testdata = testdata;
    });
    cy.visit("/");
  });
  it("Verify Add Remove Element link is available on the home page", function () {
    cy.get("li>a").contains(this.testdata.pageLinkText).should("be.visible");
  });
  it("Verify user is able to click Add Remove Element link", function () {
    cy.findByText(this.testdata.pageLinkText).click();
    cy.url().should("include", this.testdata.pageURL);
    cy.get("h3").should("have.text", this.testdata.pageHeading);
  });
  it("Click on Add element button", function () {
    cy.findByText(this.testdata.pageLinkText).click();
    cy.findByText(this.testdata.buttonText).click();
    cy.findByText(this.testdata.deleteButtonText).should("be.visible");
  });
  it("Click on Delete button", function () {
    cy.findByText(this.testdata.pageLinkText).click();
    cy.findByText(this.testdata.buttonText).click();
    cy.findByText(this.testdata.deleteButtonText).click();
    cy.findByText(this.testdata.deleteButtonText).should("not.exist");
  });
});
