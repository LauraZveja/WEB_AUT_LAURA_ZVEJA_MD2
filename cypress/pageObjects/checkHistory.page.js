class CheckHistoryPage{
  static get url() {
    return '/history.php#history';
  }

  static clickHistoryLink() {
    cy.get('a[href="history.php#history"]').click();
  }

  static validateNoAppointmentMessage() {
    cy.get('.col-sm-12.text-center').should('contain', 'No appointment');
  }
}

export default CheckHistoryPage;
