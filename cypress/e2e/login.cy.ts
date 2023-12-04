
describe('Login Flow', () => {
  beforeEach(() => {
    cy.visit('/auth/login');
  });

  it('should display the login form', () => {
    cy.get('form').should('be.visible');

    cy.get('input[name="email"]').should('exist');
    cy.get('input[name="password"]').should('exist');
    cy.get('button[type="submit"]').should('exist');
  });

  it('should successfully log in with valid credentials', () => {

    cy.get('input[name="email"]').type('adityatarar8@gmail.com');
    cy.get('input[name="password"]').type('Pass@123');
    cy.get('button[type="submit"]').click();
  });

  it('should navigate to the signup page', () => {
    cy.contains('Dont\'t have account?').click();
    cy.get('form').should('be.visible');
  });

});
