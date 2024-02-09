import HomePage from '../pages/home-page.js';
import allureReporter from '@wdio/allure-reporter'


describe("Home", () => {
  beforeEach(async () => {
    await HomePage.open();
  })

  it("Open URL and asset the title", async () => {
    allureReporter.addSeverity('minor');

    //Assert
    await expect(browser).toHaveTitle(
      "Practice E-Commerce Site – SDET Unicorns"
    );
  });

  it("Open About page and asset the URL", async () => {
    //Open URL
    await browser.url("/about/");

    //Assert
    await expect(browser).toHaveUrl("https://practice.sdetunicorns.com/about/");
  });

  it('Click get started btn & assert url contains get-started text', async () => {
    // Click get started button
    await HomePage.btnGetStarted.click();

    // Assert url contains get-started text
    await expect(browser).toHaveUrl(expect.stringContaining('get-started'));
  });

  it("Click Logo button and asset URL contains don't get-started text", async () => {
    allureReporter.addFeature('Logo verification');
    //Open URL
    await browser.url("/#get-started");

    //Click Get Started button
    await HomePage.imageLogo.click();

    //Assert url contains get-started text
    await expect(browser).not.toHaveUrl(expect.stringContaining('get-started'));
  });

  it("Find heading element and assert the text", async () => {
  
    //find header elem
    const headerEl = await HomePage.textHeading;

    //Assert the text
    await expect(headerEl).toHaveText("Think different. Make different.");
  });
});
