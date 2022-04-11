describe("A/B Testing Verification cases", function () {
  beforeEach(function () {
    // "this" points at the test context object
    cy.fixture("abTesting").then((testdata) => {
      this.testdata = testdata;
    });
    cy.visit("/");
  });
  it("Verify AB Testing link is available on the home page", function () {
    cy.get("li")
      .find("a")
      .should("have.attr", "href", this.testdata.abTestingPageURL);
  });

  it("Verify user is able to click A/B testing link", function () {
    cy.clickOnPageLink(
      this.testdata.abTestingLinkText,
      this.testdata.abTestingPageURL
    );
    cy.get("h3").should("have.text", this.testdata.abTestingPageHeading);
  });

  it("verify paragraph appaers on the page.", function () {
    cy.clickOnPageLink(
      this.testdata.abTestingLinkText,
      this.testdata.abTestingPageURL
    );
    cy.get("p").contains(this.testdata.abTestingPageText).should("be.visible");
  });
});
