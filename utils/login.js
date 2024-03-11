const baseURL = 'http://164.68.103.68:81/#/login/';

class LoginPage {

    constructor(page)
    {
        this.page = page;
        this.signInbutton=  page.getByRole('button', { name: 'LOGIN' });
        this.userName = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');
    
    }
    
    async goTo()
    {
        await this.page.goto(baseURL);
    }
    
    async validLogin(username,password)
    {
        await  this.userName.fill('ernest');
         await this.password.fill('P@ssw0rd');
         await this.signInbutton.click();
         await this.page.waitForLoadState('networkidle');
    
    }
    
    }
    module.exports = {LoginPage};