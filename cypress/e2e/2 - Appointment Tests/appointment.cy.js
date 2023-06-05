import CheckHistoryPage from "../../pageObjects/checkHistory.page";
import MakeAppointPage from "../../pageObjects/makeAppoint.page";
describe("Elements", () => {
  context("Appointment scenarios", () => {
    beforeEach(() => {
      //i. Open https://katalon-demo-cura.herokuapp.com/
      cy.visit('https://katalon-demo-cura.herokuapp.com/');
    });

    it('should make an appointment', () => {
      MakeAppointPage.clickMakeAppointmentButton();
      MakeAppointPage.setUsername('John Doe');
      MakeAppointPage.setPassword('ThisIsNotAPassword');
      MakeAppointPage.clickLoginButton();
      MakeAppointPage.selectFacility('Seoul CURA Healthcare Center');
      MakeAppointPage.checkHospitalReadmission();
      MakeAppointPage.selectProgram('medicare');
      MakeAppointPage.setDate('30');
      MakeAppointPage.setComment('CURA Healthcare Service');
      MakeAppointPage.clickBookAppointmentButton();

      MakeAppointPage.validateAppointmentValues(
        'Seoul CURA Healthcare Center',
        'Yes',
        'Medicare',
        '30/06/2023',
        'CURA Healthcare Service'
      );

    });

    it('Appointment history empty', () => {
      MakeAppointPage.clickMakeAppointmentButton();
      MakeAppointPage.setUsername('John Doe');
      MakeAppointPage.setPassword('ThisIsNotAPassword');
      MakeAppointPage.clickLoginButton();
      MakeAppointPage.clickMenuToggle();
      MakeAppointPage.validateSidebarIsActive();
      CheckHistoryPage.clickHistoryLink();
      CheckHistoryPage.validateNoAppointmentMessage();
    });
  });
});
