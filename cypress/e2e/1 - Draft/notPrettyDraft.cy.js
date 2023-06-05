describe("Elements", () => {
  context("Appointment scenarios", () => {
    beforeEach(() => {
      //i. Open https://katalon-demo-cura.herokuapp.com/
      cy.visit('https://katalon-demo-cura.herokuapp.com/');
    });

    it('should make an appointment', () => {

      //ii. Click - Make Appointment
      cy.get('#btn-make-appointment').click();

      //iii. Set username and password fields with the demo account credentials
      cy.get('#txt-username').type('John Doe');
      cy.get('#txt-password').type('ThisIsNotAPassword');

      //iv. Click - Login
      cy.get('#btn-login').click();

      //v. Set the following values:
      //1. Facility - Seoul CURA Healthcare Center
      cy.get('#combo_facility').select('Seoul CURA Healthcare Center');

      //2. Check - Apply for hospital readmission
      cy.get('#chk_hospotal_readmission').check('Yes');

      //3. Select - Medicare
      cy.get('#radio_program_medicare').check();

      //4. Set Date value by using the widget - 30
      cy.get('.glyphicon-calendar').click();
      cy.get('.day').not('.old').contains('30').click();

      //Click on the page body, so the widget closes
      cy.get('body').click();

      //5. Set comment - CURA Healthcare Service
      cy.get('#txt_comment').type('CURA Healthcare Service');

      //6. Click - Book Appointment
      cy.get('#btn-book-appointment').click();

      // Step vi. Validate that previously set values are correct
      cy.get('#facility').should('contain', 'Seoul CURA Healthcare Center');
      cy.get('#hospital_readmission').should('contain', 'Yes');
      cy.get('#program').should('contain', 'Medicare');
      cy.get('#visit_date').should('contain', '30/06/2023');
      cy.get('#comment').should('contain', 'CURA Healthcare Service');

    });

    it('Appointment history empty', () => {
      //ii. Click - Make Appointment
      cy.get('#btn-make-appointment').click();

      //iii. Set username and password fields with the demo account credentials
      cy.get('#txt-username').type('John Doe');
      cy.get('#txt-password').type('ThisIsNotAPassword');

      //iv. Click - Login
      cy.get('#btn-login').click();

      //v. Click - Menu/Stack/Burger icon
      cy.get('#menu-toggle').click();

      //vi. Validate that the sidebar is active
      cy.get('#sidebar-wrapper.active').should('exist');

      //vii. Click - History
      cy.get('a[href="history.php#history"]').click();

      //viii. Validate that - No appointment - is visible
      cy.get('.col-sm-12.text-center').should('contain', 'No appointment');

    });
  });
});
