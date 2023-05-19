import TextBoxPage from "../../pageObjects/textBoxPage";
import CheckBoxPage from "../../pageObjects/checkBoxPage";
import RadioButtonsPage from "../../pageObjects/radioButton.page";

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

    //Check box scenario
    context('Check Box scenerios', () => {  
        beforeEach(() => {
            CheckBoxPage.visit();
        });

        it('Checkbox select items', () => {
            //Click Expand (+) icon/button
            CheckBoxPage.expandButton.click();
            //Click Notes, Angular, Private, Excel File.dock
            CheckBoxPage.checkboxTitles.contains("Notes").click();
            CheckBoxPage.checkboxTitles.contains("Angular").click();
            CheckBoxPage.checkboxTitles.contains("Private").click();
            CheckBoxPage.checkboxTitles.contains("Excel File.doc").click();
            //Validate that selected items are registred
            CheckBoxPage.result.should('have.text',"You have selected :notesangularprivateexcelFile" );
        });

        it('Checkbox click Desktop', () =>{
            //Click Expand (+) icon/button
            CheckBoxPage.expandButton.click();
            //Click Desktop
            CheckBoxPage.checkboxTitles.contains("Desktop").click();
            //Validate succest - You have selected :desktopnotescommand
            CheckBoxPage.result.should('have.text',"You have selected :desktopnotescommands" );
         });
    }); 

    //Radio button scenario
    context('Radio Button scenerios', () => {  
        beforeEach(() => {
            RadioButtonsPage.visit();
        });

        it('Clik button and validate', () => {
            //Click Yes button
            RadioButtonsPage.yesButton.click();
            //Validate message- You have selected Yes
            RadioButtonsPage.successMessage.should('have.text', 'Yes')
            //Click Impressive button
            RadioButtonsPage.impressiveButton.click({force: true});
            //Validate message- You have selected Impressive
            RadioButtonsPage.successMessage.should('have.text', 'Impressive')
            //Validate that no button is disabled
            RadioButtonsPage.noButton.should('have.class', 'disabled');
        });

        it('Checkbox click Desktop', () =>{
            //Click Expand (+) icon/button
            CheckBoxPage.expandButton.click();
            //Click Desktop
            CheckBoxPage.checkboxTitles.contains("Desktop").click();
            //Validate succest - You have selected :desktopnotescommand
            CheckBoxPage.result.should('have.text',"You have selected :desktopnotescommands" );

        });
    }); 

    //Web tables
    //Buttons
    //Interactions - Selectable
}); 
