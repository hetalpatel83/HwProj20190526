package Projct20190526;

import org.openqa.selenium.By;

public class LoginPage extends Utils
{
    LoadProperties loadProperties = new LoadProperties();
    // find locator for userName,password,LogInButton
    private By _userName = By.xpath(" //input[@id='Email']");
    private By _password = By.xpath(" //input[@id='Password']");
    private By _LogInButton = By.xpath("//input[@class='button-1 login-button']");


    //Enter username and password
    //And click on login button

    public void userEnterUserNamePasswordAndClickOnLoginButton(String Email,String Password)
    {
        enterText(_userName,Email );
        enterText(_password,Password);
        clickElementBy(_LogInButton);
    }

}
