const Page = require('./page');

class LoginForm extends Page {
    get inputFname () { return $('input[name="firstName"]') }
    get inputLname () { return $('input[name="lastName"]') }
    get inputMobnum () { return $('input[name="mobile"]') }
    get inputzipCode () { return $('//div[5]/md-input-container/input') }
    get radioBtn1 (){return $('//md-radio-button/div/div')}
    get checkBtn1(){return $('//md-checkbox[2]/div')}
    get radioBtn2 (){return $('//div[8]/md-input-container/md-radio-group/md-radio-button[3]/div/div')}
    get checkBtn2(){return $('//md-input-container/md-checkbox/div')}
    get contButton(){return $('#AP_Basic_Info_continue')}
    get phonescreen(){return $('//b[contains(.,"Confirm your phone number")]')}

async fillForm (Fname,Lname,Mobnum,zipCode) {

    await (await this.inputFname).setValue(Fname);
    await (await this.inputLname).setValue(Lname);
    await (await this.inputMobnum).setValue(Mobnum);
    await (await this.inputzipCode).setValue(zipCode);
    await (await this.radioBtn1).click();
    await (await this.checkBtn1).click();
    await (await this.radioBtn2).click();
    await (await this.checkBtn2).click();
    await (await this.contButton).click();
}

}
    


module.exports = new LoginForm();
