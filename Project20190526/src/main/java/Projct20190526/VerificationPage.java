package Projct20190526;


import org.junit.Assert;



public class VerificationPage extends Utils
{
    LoadProperties loadProperties = new LoadProperties();

    //verify user is on Home Page
    public void verifyUserIsOnHomePage() {

        String newBaseURL = "http://demo.nopcommerce.com/";

        String currentURL = driver.getCurrentUrl();

        Assert.assertEquals(newBaseURL, currentURL);
    }

    public void assertErrorMessage(String errorMsg){

        boolean b;
        if(errorMsg.contains("No customer account found")||errorMsg.contains("The credential provided are incorrect")
        ||errorMsg.contains("Please enter your email"))
        {
            b = true;
        }else {
            b=false;
        }
        Assert.assertEquals(false, b);
    }


}
