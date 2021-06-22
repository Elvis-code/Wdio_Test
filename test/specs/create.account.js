const LoginPage = require('../pageobjects/login.page');
const LoginForm = require('../pageobjects/login.form');


describe('User can create account', () => {
    it('using valid credentials', async () => {
        await LoginPage.open();   //The page that allows the new user to create an account 
        await LoginPage.login('username@mailinator.com', 'User123%');
    });
    
    
});

describe('The Form on the basic screen info ', () => {          // The basic info screen that opens after the new user register the email and password
   
    it('should be filled correctly', async () => {
        await expect(LoginForm.contButton).toBeEnabled();
        await LoginForm.fillForm('Firstname','Lastname','7589577506','02090'); // The user fill the fields with required information about personal information and get the Continue clickable
        browser.pause(10000);
        await expect(LoginForm.phonescreen).toBeExisting();
        await expect(LoginForm.phonescreen).toHaveTextContaining(
            'Confirm your phone number');
});
});

describe('When user is registred already', () => {          // Controls if email already exist and must get the 'Email Taken' text.
    
    it("Should return Email Taken", async() =>{
       
        await LoginPage.open();
        await LoginPage.login('user1@mailinator.com', 'User1%');
        await expect(LoginPage.flashText).toBeExisting();
        await  expect(LoginPage.flashText).toHaveTextContaining(
            'Email Taken');
    })
});
describe('When user is registred already', () => {          // The page that leads to Login In Page  when user already exists
    
    it("Should load the Login Page not the Sign Up", async() =>{        
       
        await LoginPage.open();
        await LoginPage.login('user@mailinator.com', 'User123%');

        browser.url('https://portal.intelycare.com/apply/career.html?step=Login')

        await LoginPage.login('user@mailinator.com', 'User123%');              // The user fill the email and password again with existed credentials


    })
});


describe('When you type a short password', ()=> {     //  Controls if the user has typed a valid password

    it('Should display an error message', async()=>{        // Display the error message "Password Too Short" 

        await LoginPage.open();

        await LoginPage.login('user9@mailinator.com', '123')

        await expect(LoginPage.flashText).toBeExisting();

        await  expect(LoginPage.flashText).toHaveTextContaining(
            'Password Too Short');

    })

})

describe('Password Format', () => {
    
    it("Must contain correct password form", async() =>{    // When user fill the password field without password requirements it will show him an error message "Password must contain at least one uppercase, and one number."
       
        await LoginPage.open();
        await LoginPage.login('user3@mailinator.com', 'user123');
        await expect(LoginPage.flashText).toBeExisting();
        await  expect(LoginPage.flashText).toHaveTextContaining(
            'Password must contain at least one uppercase, and one number.');       // The message should be equal to the message that page shows 

    })
});
