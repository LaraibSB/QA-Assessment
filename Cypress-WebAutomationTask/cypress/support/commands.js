import "@testing-library/cypress/add-commands";
Cypress.Commands.add(
  "clickOnPageLink",
  (abTestingLinkText, abTestingPageURL) => {
    cy.findByText(abTestingLinkText).click();
    cy.url().should("include", abTestingPageURL);
  }
);
Cypress.Commands.add("login", (username, password, url) => {
  cy.visit(url);
  cy.get("#username").clear().type(username);
  cy.get("#password").clear().type(password);
  cy.findByText("Login").click();
});
Cypress.Commands.add("invalidErrorMessage", (errorMessageText) => {
  cy.get("#flash").contains(errorMessageText);
});
Cypress.Commands.add("successfulLoginValidation", (landingPageHeading) => {
  cy.get("h2").contains(landingPageHeading);
});
Cypress.Commands.add("clickLogoutButton", (logoutButton) => {
  cy.findByText(logoutButton).click();
});
Cypress.Commands.add("ClickChecbox", (checkbox) => {
  cy.get("form").contains(checkbox).children().should("be.exist");

  cy.get("form")
    .contains(checkbox)
    .children("input")
    .check({
      multiple: true,
    })
    .should("be.checked");
});
