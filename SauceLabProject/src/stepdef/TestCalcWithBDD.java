package stepdef;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.ios.IOSDriver;

import org.junit.Assert;
import java.net.URL;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;

public class TestCalcWithBDD {
	
	private AppiumDriver<WebElement> driver;	
	     
       
	    @Given("^I have launched calculator app$")
	    public void I_have_launched_calculator_app() throws Throwable {
        	String sauceUserName = "namstest";
	        String sauceAccessKey = "c902e30e-a331-4a75-8e03-151a8b31dc1d";
	        String URL = "http://" + sauceUserName + ":" + sauceAccessKey + "@ondemand.saucelabs.com:80/wd/hub";
	        DesiredCapabilities caps = DesiredCapabilities.iphone();
			  caps.setCapability("appiumVersion", "1.4.16");
			  caps.setCapability("deviceName","iPhone 6 Simulator");
			  caps.setCapability("deviceOrientation", "portrait");
			  caps.setCapability("platformVersion","9.1");
			  caps.setCapability("platformName", "iOS");
			  caps.setCapability("browserName", "");
			  caps.setCapability("app","sauce-storage:MyCalculatorApp.zip");		   
	        driver = new IOSDriver<WebElement>(new URL(URL), caps);
	    }

   
	    @Given("^I enter (\\d+) and (\\d+)$")
	    public void I_enter_and(int arg1, int arg2) throws Throwable {
        	driver.findElementByAccessibilityId("TextField1").sendKeys(String.valueOf(arg1));
        	driver.findElementsByClassName("UIATextField").get(1).sendKeys(String.valueOf(arg2));
	    }
        
       
	    @When("^I press sum button$")
	    public void I_press_sum_button() throws Throwable {
        	driver.findElementByAccessibilityId("ComputeSumButton").click(); 
	    }

       
	    @Then("^the sum should be (\\d+)$")
	    public void the_sum_should_be(int arg1) throws Throwable {
        	String getsum= driver.findElementsByClassName("UIAStaticText").get(0).getText();
        	int result = Integer.parseInt(getsum.toString());
			Assert.assertEquals("sum not correct", arg1, result);
			driver.quit();
	    }
        
}
