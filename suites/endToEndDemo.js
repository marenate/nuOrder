import LoginPage  from '..//pages/loginPage';
import DashboardPage from '..//pages/dashboardPage';
import PostNewPage from '..//pages/postNewPage';
import ViewNewPostPage from '..//pages/viewNewPostPage';
import {getUrl} from '../helpers/urlEnvironment';
import { superUser }  from '../helpers/mockData';
import { Selector as $ } from 'testcafe';
import { errorFieldPasswordEmpty, errorFieldUserNameEmpty, errorUnknownUserName, errorIncorrectPasswordEntered } from '../helpers/uiMessage';

fixture('Log In user').page(getUrl);
test('Verify the user try to sign in without password entered', async t => {
    const loginPage = new LoginPage();
    await loginPage.enterUserName(t, superUser.user);
    await loginPage.clickLogInButton(t);
    await t.expect(loginPage.selectors.loginError.innerText).eql(errorFieldPasswordEmpty);
    await t.takeScreenshot();
});
test('Verify the user try to sign in without username entered', async t => {
    const loginPage = new LoginPage();
    await loginPage.enterPassword(t, superUser.user);
    await loginPage.clickLogInButton(t);
    await t.expect(loginPage.selectors.loginError.innerText).eql(errorFieldUserNameEmpty);
    await t.takeScreenshot();
});
test('Verify the user try to sign in with invalid username', async t => {
    const invalidUser='useruser'
    const loginPage = new LoginPage();
    await loginPage.enterUserName(t, invalidUser);
    await loginPage.enterPassword(t, superUser.password);
    await loginPage.clickLogInButton(t);
    await t.expect(loginPage.selectors.loginError.innerText).eql(errorUnknownUserName);
    await t.takeScreenshot();
});
test('Verify the user try to sign in with invalid password', async t => {
    const invalidPassword='password'
    const loginPage = new LoginPage();
    await loginPage.enterUserName(t, superUser.user);
    await loginPage.enterPassword(t, invalidPassword);
    await loginPage.clickLogInButton(t);
    await t.expect(loginPage.selectors.loginError.innerText).eql(errorIncorrectPasswordEntered);
    await t.takeScreenshot();
});
test('Verify the user try to sign in without username and password entered', async t => {
    const loginPage = new LoginPage();
    await loginPage.clickLogInButton(t);
    await t.expect(loginPage.selectors.loginError.innerText).eql(`${errorFieldUserNameEmpty}${errorFieldPasswordEmpty}`);
    await t.takeScreenshot();
});
test('Verify the user is able to see the password entered', async t => {
    const loginPage = new LoginPage();
    await loginPage.enterUserName(t, superUser.user);
    await loginPage.enterPassword(t, superUser.password);
    await t.click(loginPage.selectors.showAndHidePassword); 
    await $(loginPage.selectors.showAndHidePassword).withAttribute('aria-label="Hide password"');
    await t.expect(loginPage.selectors.password.visible).ok()
    await t.expect(loginPage.selectors.password.value).eql(superUser.password);
    await t.takeScreenshot();
});

test('Verify the Log In success', async t => {
    const loginPage = new LoginPage();
    await loginPage.enterUserName(t, superUser.user);
    await loginPage.enterPassword(t, superUser.password);
    await loginPage.clickLogInButton(t);
    const dashboardPage = new DashboardPage();
    await t.expect(dashboardPage.selectors.userName.innerText).eql(`Howdy, ${superUser.user}`);
    await t.takeScreenshot();
});

test('Verify the use is able to create and remove a post', async t =>{
    const loginPage = new LoginPage();
    await loginPage.enterUserName(t, superUser.user);
    await loginPage.enterPassword(t, superUser.password);
    await loginPage.clickLogInButton(t);
    const dashboardPage = new DashboardPage();
    await t.hover(dashboardPage.selectors.menuAdminBarNew);
    await t.expect(await dashboardPage.selectors.menuAdminBarNewMouseOver.exists).eql(true);
    await t.takeScreenshot();
    await dashboardPage.clickNewPostLink(t);
    const postNewPage = new PostNewPage();
    await t.expect(postNewPage.selectors.addTitleDefaultLabel.textContent).eql('Add title');
    await t.takeScreenshot();
    await t.expect(postNewPage.selectors.blockEditorDefaultPost.textContent).eql('Start writing or type / to choose a block');
    await t.takeScreenshot();
    const postTitle = 'Adding new Tiitle' + Math.random().toString(36).substr(1,44444);
    await postNewPage.enterTitlePost(t, postTitle); 
    await t.click(postNewPage.selectors.categorySelect);
    await t.click(postNewPage.selectors.postInstallmentCategoryCheckBox);
    await t.expect(postNewPage.selectors.postInstallmentCategoryCheckBox.checked).ok()
    await t.takeScreenshot();
    await t.click(postNewPage.selectors.publishButton);
    await t.click(postNewPage.selectors.visibilitySelect);
    await postNewPage.verifyPublicRadioButtonChecked(t);
    await t.click(postNewPage.selectors.publishPanelButton);
    await t.expect(postNewPage.selectors.viewPostLink.visible).eql(true);
    await t.takeScreenshot();
    await postNewPage.verifyTheTitleLinkPostPublishedIsPresent(t, postTitle);
    await t.navigateTo('https://s1.demo.opensourcecms.com/wordpress/wp-admin/edit.php');
    //await t.debug();
    await dashboardPage.selectors.rowPostPublishedByName.withText(postTitle).exists;
    await dashboardPage.removeThePostPublished(t, postTitle); 
    await t.expect(dashboardPage.selectors.rowPostPublishedByName.withText(postTitle).exists).eql(false);
    await t.takeScreenshot();
    
    
});
