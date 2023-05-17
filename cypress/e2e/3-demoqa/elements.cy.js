import TextBoxPage from "../../pageObjects/textBoxPage";

describe('Elements', () => {   
    context('Text Box scenerios', () => {   
        beforeEach(() => {
           // cy.visit('/text-box')
           TextBoxPage.visit();
        });
        
        it('Text Box Positive', () => {
            //Integration with elements
            TextBoxPage.usernameField.type("Donald Trump");
            TextBoxPage.useremailField.type("random@email.com");
            TextBoxPage.CurrentAddressField.type("Random Current Address");
            TextBoxPage.PermanentAddressField.type("Random Permanent Address");
            TextBoxPage.submitButton.click();

            //validation
            TextBoxPage.nameSelection.should("have.text", "Name:Donald Trump");
            TextBoxPage.emailSelection .should("have.text", "Email:random@email.com");
            TextBoxPage.CurrentAddressSelection.should("contain.text", "Current Address :Random Current Address");
            TextBoxPage.PermanentAddressSelection.should("contain.text", "Permananet Address :Random Permanent Address");
        });

        it("Text Box Negative", () => {
            TextBoxPage.useremailField.should("not.have.class", "field-error");
            TextBoxPage.useremailField.type("random@email@negative.com");
            TextBoxPage.submitButton.click();
            TextBoxPage.useremailField.should("have.class", "field-error");
        });
    });
}); 
