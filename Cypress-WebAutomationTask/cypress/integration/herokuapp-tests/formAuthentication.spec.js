describe("Form Authentication page test cases", function () {
  beforeEach(function () {
    // "this" points at the test context object
    cy.fixture("formAuthentication").then((testdata) => {
      this.testdata = testdata;
    });
    cy.visit("/");
  });
  it("Verify Form Authentication link is available on the home page", function () {
    cy.get("li>a").contains(this.testdata.pageLinkText).should("be.visible");
  });
  it("Verify user is able to click Form Authentication link", function () {
    cy.clickOnPageLink(this.testdata.pageLinkText, this.testdata.pageURL);
    cy.get("h2").should("have.text", this.testdata.LoginpageHeading);
  });
  it("Verify user is able to login with valid credentials.", function () {
    cy.login(
      this.testdata.username,
      this.testdata.password,
      this.testdata.hrefLinkText
    );
    cy.successfulLoginValidation(this.testdata.landingPageHeading);
  });
  it("Verify user is not able to login with invalid credentials.", function () {
    cy.login(
      this.testdata.invalidUsername,
      this.testdata.invalidPassword,
      this.testdata.hrefLinkText
    );
    cy.invalidErrorMessage(this.testdata.errorMessage);
  });
  it("Verify user is not able to login with null credentials.", function () {
    cy.login(" ", " ", this.testdata.hrefLinkText);
    cy.invalidErrorMessage(this.testdata.errorMessage);
  });
  it("Verify user is able to logout.", function () {
    cy.login(
      this.testdata.username,
      this.testdata.password,
      this.testdata.hrefLinkText
    );
    cy.successfulLoginValidation(this.testdata.landingPageHeading);
    cy.clickLogoutButton(this.testdata.logoutButton);
  });
});
