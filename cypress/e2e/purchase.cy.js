describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:8080/swagger/doc/");
    cy.get("#operations-Purchase-post_api_purchase > div").click();
    cy.get(".btn").click();
    cy.get(".parameters-col_description > input").type(
      `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9`
    );
  });
});
