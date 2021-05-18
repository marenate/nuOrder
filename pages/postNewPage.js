import { Selector } from 'testcafe';
export default class postNewPage{
    constructor(){
        this.selectors = {
            publishButton: Selector('button').withText('Publish'),
            addTitleDefaultLabel: Selector('div.edit-post-visual-editor__post-title-wrapper > div > label'),
            blockEditorDefaultPost: Selector('div.block-editor-block-list__layout.is-root-container > div > div > textarea'),
            titleTextArea: Selector('#post-title-0'),
            blockParagraphArea: Selector('p[data-title="Paragraph"]'),
            blockTextArea: Selector('textarea.block-editor-default-block-appender__content'),
            visibilitySelect: Selector('div.editor-post-publish-panel__content > div > div:nth-child(3) > h2 > button'),
            categorySelect: Selector('div.components-panel > div:nth-child(3) > h2 > button'),
            visibilityPublicRadioButton: Selector('#editor-post-public-0'),
            visibilityPrivatedRadioButton: Selector('#editor-post-public-0'),
            publishPanelButton: Selector('div.editor-post-publish-panel__header-publish-button > button'),
            postViewTitleLink: Selector('a'),
            viewPostLink: Selector('a').withText('View Post'),
            copyLinkPost: Selector('a').withText('Copy Link'),
            postAddress: Selector('#inspector-text-control-0'),
            postInstallmentCategoryCheckBox: Selector('#inspector-checkbox-control-2'),
            a: Selector('div.interface-interface-skeleton__content > div.edit-post-visual-editor > div.editor-styles-wrapper > div.block-editor-writing-flow > div.block-editor-block-list__layout.is-root-container'), 
        }
    }
    async enterTitlePost(t, title){
        await t.click(this.selectors.titleTextArea);
        await t.typeText(this.selectors.titleTextArea, title);
        await t.expect(this.selectors.titleTextArea.value).eql(title);
    }
    
    async verifyPublicRadioButtonChecked(t) {
        const checked= await this.selectors.visibilityPublicRadioButton.hasAttribute('checked');
        await t.expect(checked).eql(true);
    }
    async verifyTheTitleLinkPostPublishedIsPresent(t, title) {
        await this.selectors.postViewTitleLink.withText(title).exists;
        await t.expect(this.selectors.postViewTitleLink.withText(title).textContent).eql(title)
    }
    
}