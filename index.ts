import { ClientFunction, Selector } from 'testcafe';
import XPathSelector from './xpath-selector';

fixture`The signin page`
    .page('http://internal-dev.dipro-tech.com/signin');

test('Login success', async t => {
    await t
        .typeText(Selector('input').withAttribute('name', 'email'), 'linhhta@dipro.vn')
        .typeText(Selector('input').withAttribute('name', 'password'), 'Dipro555#')
        .click(Selector('div').child('button'))
        .expect(XPathSelector('//*[@id="__next"]/div/div/div[3]/div/div/header/div[1]/p').textContent).eql("My Attendance");
});