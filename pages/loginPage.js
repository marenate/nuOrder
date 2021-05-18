import { Selector } from 'testcafe';
export default class PageLogin{ constructor(){
    this.selectors = {
        userName: Selector('#user_login'),
        password: Selector('#user_pass'),
        show_hide_passwordBtn: Selector('#loginform > div > div > button'),
        remembermeCheckBox: Selector('#rememberme'),
        submitBtn: Selector('#wp-submit'),
        lostPasswordLbl: Selector('a').withText('Lost your password?'),
        loginError: Selector('#login_error'),
        showAndHidePassword: Selector('#loginform >div>div> button')
    }
}
async enterUserName(t, user){
    await t.typeText(this.selectors.userName, user);
    await t.expect(this.selectors.userName.value).eql(user);
}
async enterPassword(t, password){
    await t.typeText(this.selectors.password, password);
    await t.expect(this.selectors.password.value).eql(password);
}
async clickLogInButton(t){
    await t.expect(this.selectors.submitBtn.visible).eql(true);
    await t.click(this.selectors.submitBtn);
}
}