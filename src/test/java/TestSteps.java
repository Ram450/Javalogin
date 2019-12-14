import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TestSteps {
		WebDriver driver;
	@Given("^Open the sample login appliction in chrome browser$")
	public void open_the_sample_login_appliction_in_chrome_browser() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   // throw new PendingException();
		System.setProperty("webdriver.chrome.driver", "src/main//resources//chromedriver//chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://localhost:8080/JavaServletLogin/");
		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(100, TimeUnit.MILLISECONDS);
	
	}
	
	@When("^title of the main page is \"([^\"]*)\"$")
	public void title_of_the_main_page_is(String expectedTitle) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   // throw new PendingException();
		Thread.sleep(15000);
		String mainPageTitle =driver.getTitle();
		  System.out.println(mainPageTitle); Assert.assertEquals(mainPageTitle,expectedTitle);
	}

	@Then("^enter username and password$")
	public void enter_username_and_password() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new PendingException();
		driver.findElement(By.xpath("//input[@name='username']")).clear();
		driver.findElement(By.xpath("//input[@name='username']")).sendKeys("test");
		driver.findElement(By.xpath("//input[@name='password']")).clear();
		driver.findElement(By.xpath("//input[@name='password']")).sendKeys("test@123");
	}
	@Then("^enter username as \"([^\"]*)\" and password as \"([^\"]*)\"$")
	public void enter_username_as_and_password_as(String usr, String pass) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	  //  throw new PendingException();
		driver.findElement(By.xpath("//input[@name='username']")).clear();
		driver.findElement(By.xpath("//input[@name='username']")).sendKeys(usr);
		driver.findElement(By.xpath("//input[@name='password']")).clear();
		driver.findElement(By.xpath("//input[@name='password']")).sendKeys(pass);
	}

	

	@Then("^click on login button$")
	public void click_on_login_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new PendingException();
		Thread.sleep(10000);
		driver.findElement(By.xpath("//input[@value='Login']")).click();
	}
	@Then("^verify the title of the page after login \"([^\"]*)\"$")
	public void verify_the_title_of_the_page_after_login(String expectedText) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new PendingException();
		String textAfterLogin
		  =driver.findElement(By.xpath("//div[@id='serlvetResponse']//p")).getText();
		  System.out.println(textAfterLogin); Assert.assertEquals(textAfterLogin, expectedText);
	}
	
	@After()
    public void closeBrowser() {
      driver.quit();
    }

}
