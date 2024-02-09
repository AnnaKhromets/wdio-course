describe('iFrame Test', () => {
    it('iFrame Logo test', async () => {
        await browser.url('/iframe-sample/');

        //access to iFrame
        const frame = await $('#advanced_iframe');
        await browser.switchToFrame(frame);

        //verify Logo exist
        await expect($('div .hfe-site-logo')).toExist();

        //switch to parent page
        await browser.switchToParentFrame();

        // verify title on page exist
        await expect($('h1.zak-page-title')).toHaveText('IFrame Sample');
    })
});