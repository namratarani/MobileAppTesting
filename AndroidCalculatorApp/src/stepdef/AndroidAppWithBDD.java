package stepdef;

import java.net.URL;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.appium.java_client.android.AndroidDriver;
import org.junit.Assert;

public class AndroidAppWithBDD {
	
	 private AndroidDriver<WebElement> driver;

	@Given("^I have launched calculator app$")
	public void I_have_launched_calculator_app() throws Throwable {
	
		  DesiredCapabilities capabilities = new DesiredCapabilities();		
		  capabilities.setCapability("deviceName", "FUH7N16505009554");
		  capabilities.setCapability(CapabilityType.BROWSER_NAME, "Android");
		  capabilities.setCapability(CapabilityType.VERSION, "6.0");
		  capabilities.setCapability("platformName", "Android");
		  capabilities.setCapability("appPackage", "com.android.calculator2");
		  capabilities.setCapability("appActivity", "com.android.calculator2.Calculator");
		  driver = new AndroidDriver<WebElement>(new URL("http://127.0.0.1:4723/wd/hub"), capabilities);
		  driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	}

	@Given("^I press key with (\\d+)$")
	public void I_press_key_with(int arg1) throws Throwable {
		
		 driver.findElement(By.name(String.valueOf(arg1))).click();
	}

	@Given("^I press 'plus' key$")
	public void I_press_plus_key() throws Throwable {
		 driver.findElement(By.id("com.android.calculator2:id/plus")).click();
	}

	@When("^I press key1 with (\\d+)$")
	public void I_press_key1_with(int arg1) throws Throwable {
		 driver.findElement(By.name(String.valueOf(arg1))).click();
	}

	@When("^I press 'equals' key$")
	public void I_press_equals_key() throws Throwable {
		  driver.findElement(By.id("com.android.calculator2:id/equal")).click();
	}

	@Then("^the sum should be (\\d+)$")
	public void the_sum_should_be(int arg1) throws Throwable {
		  String result = driver.findElement(By.className("android.widget.EditText")).getText();
		  Assert.assertEquals("sum not correct", arg1, Integer.parseInt(result));
		  driver.quit();
		  
	}
}
