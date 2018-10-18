// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'add drink order test': (browser) => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .click('.header__button')
      .useXpath()
      .setValue('//*[@id="app"]/div[3]/div/div[2]/div/div[2]/input[1]', 'Aaron Chen')
      .setValue('//*[@id="app"]/div[3]/div/div[2]/div/div[2]/input[2]', '四季春')
      .setValue('//*[@id="app"]/div[3]/div/div[2]/div/div[2]/input[3]', 30)
      .click('//*[@id="app"]/div[3]/div/div[2]/div/div[3]/div[1]/div[2]')
      .click('//*[@id="app"]/div[3]/div/div[2]/div/div[3]/div[2]/div[3]')
      .setValue('//*[@id="app"]/div[3]/div/div[2]/div/div[4]/input', '我我我我我我我我我我我我我我我我我我我我')
      .useCss()
      .click('.modal__btn--confirm')
      .waitForElementVisible('.orderList__card', 5000);

      browser.expect.element('.order__drink').text.to.equal('四季春');
      browser.expect.element('.order__name').text.to.equal('Aaron Chen');
      browser.expect.element('.order__price').text.to.equal('$30');
      browser.expect.element('.order__tag--sugar').text.to.equal('半糖');
      browser.expect.element('.order__tag--ice').text.to.equal('少冰');
      browser.end();
  },
};
