describe("herokuapp.com Landing Page Verification Cases", function () {
  beforeEach(function () {
    // "this" points at the test context object
    cy.fixture("homePage").then((testdata) => {
      this.testdata = testdata;
    });
    cy.visit("/");
  });
  it("Verify the page title", function () {
    cy.title().should("eq", this.testdata.landingPageTitle);
  });
  it("Verify the page heading is rendering correctly", function () {
    cy.get("h1").should("have.text", this.testdata.h1Text);
  });
  it("Verify sub heading on the page is rendering correctly", function () {
    cy.get("h2").should("have.text", this.testdata.h2Text);
  });
});
