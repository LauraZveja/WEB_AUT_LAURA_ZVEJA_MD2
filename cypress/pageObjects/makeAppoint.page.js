class MakeAppointPage{

  static clickMakeAppointmentButton() {
    cy.get('#btn-make-appointment').click();
  }

  static setUsername(username) {
    cy.get('#txt-username').type(username);
  }

  static setPassword(password) {
    cy.get('#txt-password').type(password);
  }

  static clickLoginButton() {
    cy.get('#btn-login').click();
  }

  static selectFacility(facility) {
    cy.get('#combo_facility').select(facility);
  }

  static checkHospitalReadmission() {
    cy.get('#chk_hospotal_readmission').check('Yes');
  }

  static selectProgram(program) {
    cy.get(`#radio_program_${program}`).check();
  }

  static setDate(date) {
    cy.get('.glyphicon-calendar').click();
    cy.get('.day').not('.old').contains(date).click();
    cy.get('body').click();
  }

  static setComment(comment) {
    cy.get('#txt_comment').type(comment);
  }

  static clickBookAppointmentButton() {
    cy.get('#btn-book-appointment').click();
  }

  static validateAppointmentValues(facility, readmission, program, date, comment) {
    cy.get('#facility').should('contain', facility);
    cy.get('#hospital_readmission').should('contain', readmission);
    cy.get('#program').should('contain', program);
    cy.get('#visit_date').should('contain', date);
    cy.get('#comment').should('contain', comment);
  }

  static clickMenuToggle() {
    cy.get('#menu-toggle').click();
  }

  static validateSidebarIsActive() {
    cy.get('#sidebar-wrapper.active').should('exist');
  }
}

export default MakeAppointPage;
