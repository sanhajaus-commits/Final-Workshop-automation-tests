class LunchApp{

    getUsernameField(){
        return cy.get(':nth-child(1) > .v-input__control > .v-input__slot > .v-text-field__slot > input');
    }
    
    getPasswordField(){
        return cy.get(':nth-child(2) > .v-input__control > .v-input__slot > .v-text-field__slot > input');
    }

    clickLoginButton(){
        return cy.get('.v-btn__content').click();
    }
     clickSaveOrder(){
         return cy.get('.orders-list-button').click();
     }
    clickFirstSoupSelection(){
        cy.get(':nth-child(2) > .layout > :nth-child(1) > .v-card__text > div').click();
    }
    clickFirstMainCourseSelection(){
        cy.get(':nth-child(6) > .layout > :nth-child(1) > .v-card__text > div').click();
    }
}
export default LunchApp