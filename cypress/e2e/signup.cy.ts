describe('Signup Flow', () => {
  beforeEach(() => {
    cy.visit('/auth/signup');
  });

  it('should display the signup form', () => {
    cy.get('form').should('be.visible');

    cy.get('input[name="fullName"]').should('exist');
    cy.get('input[name="email"]').should('exist');
    cy.get('input[name="phoneNo"]').should('exist');
    cy.get('input[name="dob"]').should('exist');
    cy.get('input[name="password"]').should('exist');
    cy.get('input[name="confirm-password"]').should('exist');
    cy.get('button[type="submit"]').should('exist');
  });

  it('should successfully sign up with valid credentials', () => {
    cy.get('input[name="fullName"]').type('Test User');
    cy.get('input[name="email"]').type('abcz@example.com');
    cy.get('input[name="phoneNo"]').type('1234567890');
    cy.get('input[name="dob"]').type('2000-01-01');
    cy.get('input[name="password"]').type('Pass@123');
    cy.get('input[name="confirm-password"]').type('Pass@123');
    cy.get('button[type="submit"]').click();
   
  });

  it('should navigate to the login page from the success modal', () => {
   
    cy.get('input[name="fullName"]').type('John Doe');
    cy.get('input[name="email"]').type('john.doe@example.com');
    cy.get('input[name="phoneNo"]').type('1234567890');
    cy.get('input[name="dob"]').type('2000-01-01');
    cy.get('input[name="password"]').type('Pass@123');
    cy.get('input[name="confirm-password"]').type('Pass@123');
    cy.get('button[type="submit"]').click();

    cy.contains('Sign In').click();

    cy.url().should('include', '/auth/login');
  });

});
