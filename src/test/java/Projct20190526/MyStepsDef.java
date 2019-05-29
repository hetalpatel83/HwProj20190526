package Projct20190526;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepsDef extends Utils
{
    HomePage homePage = new HomePage();
    VerificationPage verificationPage = new VerificationPage();
    LoginPage loginPage = new LoginPage();

    @Given("^user is on Home page$")
    public void userIsOnHomePage(){
        verificationPage.verifyUserIsOnHomePage();
    }

    @When("^user navigate to login Page$")
    public void userNavigateToLoginPage(){

        homePage.navigationToLoginPage();

    }

    @When("^user enter invalid \"([^\"]*)\" and \"([^\"]*)\"$")
    public void userEnterInvalidAnd(String Email, String Password){
        loginPage.userEnterUserNamePasswordAndClickOnLoginButton(Email, Password);

    }
    @Then("user should not be logged in Successfully and user can see {string}")
    public void user_should_not_be_logged_in_Successfully_and_user_can_see(String errorMsg) {
        verificationPage.assertErrorMessage(errorMsg);

    }



    }

