import { Selector } from 'testcafe';
export default class dashboardPage{
    constructor(){
        this.selectors = {
            userName: Selector('#wp-admin-bar-my-account'),
            menuAdminBarNew: Selector('#wp-admin-bar-new-content'),
            menuAdminBarNewPost: Selector('#wp-admin-bar-new-post'),
            menuAdminBarNewMouseOver: Selector('#wp-admin-bar-new-content.menupop.hover'),
            welcomeToTheBlockEditor: Selector('body > div:nth-child(8) > div > div > div > div'),
            closeWelcomeToTheBlockEditor: Selector('body > div:nth-child(8) > div > div > div > div > div > div.components-modal__header > button'),
            rowPostPublishedByName: Selector('a'),
            trashLinkFromPostChart: Selector('div.row-actions > span.trash > a'),
        }
    }
    async clickNewPostLink(t){
        await t.click(this.selectors.menuAdminBarNewPost);
        if (await this.selectors.welcomeToTheBlockEditor.exists){
            await t.click(this.selectors.closeWelcomeToTheBlockEditor);
        }
        
    }
    async removeThePostPublished(t, title) {
        await t.hover(this.selectors.rowPostPublishedByName.withText(title));
        await t.click(this.selectors.trashLinkFromPostChart);
    }
}