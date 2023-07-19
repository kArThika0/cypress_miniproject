///<references types=”cypress”/>

describe('Cura Make Appointment', () => {
  it('Visit the URL', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/');
     //id = btn-make-appointment
     cy.get('#btn-make-appointment').click();
    cy.get('#txt-username').type('John Doe');
    cy.get('#txt-password').type('ThisIsNotAPassword');
    cy.get('#btn-login').click();
    cy.get('#combo_facility').select('Seoul CURA Healthcare Center')
    cy.get('#chk_hospotal_readmission').click();
    cy.get('#radio_program_medicare').click();
    cy.get('#txt_visit_date').type('30/06/2023');
    cy.get('#txt_comment').click({force:true});
    cy.get('#txt_comment').type('Karthika appointment date is 30/06/2023');
    cy.get('#btn-book-appointment').click();
    cy.get('h2').contains('Appointment Confirmation');
    cy.get('#comment').contains('Karthika appointment date is 30/06/2023');
  });

  /* it('Login', () => {
     //goes to demo login page. Username placeholder= Username 
    //password placeholder= Password
    //Login button id= btn-login
   
  });

  it('Click on make Appointment ', () => {
    //Select id=combo_facility   option value= Seoul CURA Healthcare Center
    //checkbox id= chk_hospotal_readmission
    //radio id=radio_program_medicare
    //input date id= txt_visit_date
    //text area id = txt_comment
    //book appointment button id= btn-book-appointment

        cy.get('select').select('Seoul CURA Healthcare Center').click();
        cy.get('#chk_hospotal_readmission').click();
        cy.get('#radio_program_medicare').click();
        cy.get('#txt_visit_date').type('30/06/2023');
        cy.get('#txt_comment').click({force:true});
        cy.get('#txt_comment').type('Karthika appointment date is 30/06/2023');
        cy.get('#btn-book-appointment').click();

  });
  it('verify Appointment',() => {
    //h1 = Appointment Confirmation
    //comment id= comment
    cy.get('h2').contains('Appointment Confirmation');
    cy.get('#comment').contains('Karthika appointment date is 30/06/2023');
  }); */

});