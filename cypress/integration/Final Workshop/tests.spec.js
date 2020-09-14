/// <reference types="cypress" />
import LunchApp from '../../page_objects/lunchapp.js'


const lunchapp = new LunchApp();
const username = 'benas@yellow.vln';
const password = 'Cheese011';
const diena = 'Trečiadienis'; //Must use english word if it's set to english

beforeEach('executes before each test',()=>{ 
    cy.visit("https://lunch.devbstaging.com/login-password");
})
//fails when the dish has multiple selections (different combination of soups and main meals)
describe('Simple Main functionality tests', () => {

    it('Adding the first soup and Main meal (adds desert if there\'s soup or main meal missing) to the cart and saving the order', ()=>{
        lunchapp.getUsernameField().type(username);
        lunchapp.getPasswordField().type(password);
        lunchapp.clickLoginButton();
        cy.contains(diena).click(); 
        lunchapp.clickFirstSoupSelection();
        lunchapp.clickFirstMainCourseSelection();
        lunchapp.clickSaveOrder();
    })
})
