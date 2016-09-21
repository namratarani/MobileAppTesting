package calculator;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.ios.IOSDriver;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.net.URL;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;

public class TestCalcWithoutBDD {
	
	private AppiumDriver<WebElement> driver;

	 @Before
	    public void setUp() throws Exception {
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

	    @After
	    public void tearDown() throws Exception {
	        driver.quit();
	    }

	    @Test
	    public void testUIComputation() throws Exception {
	    	driver.findElementByAccessibilityId("TextField1").sendKeys(String.valueOf(10));
			  driver.findElementsByClassName("UIATextField").get(1).sendKeys(String.valueOf(20));;
			  driver.findElementByAccessibilityId("ComputeSumButton").click();
			  String result =driver.findElementsByClassName("UIAStaticText").get(0).getText().toString();
			  Assert.assertEquals("values are not same", 30, Integer.parseInt(result));
	    }

	    
	
}
