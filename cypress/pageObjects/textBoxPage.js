import BasePage from"./base.page";

class TextBoxPage extends BasePage{

    static get url(){
        return '/text-box';
    }

    static get usernameField(){
        return cy.get("#userName");
    }

    static get useremailField(){
        return cy.get("#userEmail");
    }

    static get CurrentAddressField(){
        return cy.get("Textarea#currentAddress");
    }

    static get PermanentAddressField(){
        return cy.get("Textarea#permanentAddress");
    }

    static get submitButton(){
        return cy.get("button#submit");
    }


    static get nameSelection(){
        return  cy.get("#name");
    }

    static get emailSelection(){
        return  cy.get("#email");
    }

    static get CurrentAddressSelection(){
        return  cy.get("p#currentAddress");
    }

    static get PermanentAddressSelection(){
        return   cy.get("p#permanentAddress");
    }

}

export default TextBoxPage;