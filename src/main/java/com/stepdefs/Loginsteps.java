package com.stepdefs;

import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import com.PageObjects.AddCustomerPage;
import com.PageObjects.LoginPage;
import com.PageObjects.SearchCustomerPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class Loginsteps extends Baseclass{


	@Given("^User Launch Chrome browser$")
	public void user_Launch_Chrome_browser() throws Throwable {

		System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir")+"\\Drivers\\chromedriver.exe");	
		driver = new ChromeDriver();
		lp = new LoginPage(driver);

	}

	@When("^User opens URL \"([^\"]*)\"$")
	public void user_opens_URL(String url) throws Throwable {
		driver.get(url);
		driver.manage().window().maximize();
	}

	@When("^User enters Email as \"([^\"]*)\" and Password as \"([^\"]*)\"$")
	public void user_enters_Email_as_and_Password_as(String email, String Password) throws Throwable {
		lp.setUserName(email);
		lp.setPassword(Password);
	}

	@When("^Click on Login$")
	public void click_on_Login() throws Throwable {
		lp.clickLogin();
	}

	@Then("^User should on Dashboard page \"([^\"]*)\"$")
	public void user_should_on_Dashboard_page(String arg1) throws Throwable {

		Assert.assertEquals(driver.getTitle(), "Dashboard / nopCommerce administration");
	}


	@Then("^user will on home page \"([^\"]*)\"$")
	public void user_will_on_home_page(String arg1) throws Throwable {
		Assert.assertEquals(driver.getTitle(), "Your store. Login");
	}


	@When("^User click on Log out link$")
	public void user_click_on_Log_out_link() throws Throwable {
		lp.clickLogout();
		Thread.sleep(3000);
	}


	@Then("^close browser$")
	public void close_browser() throws Throwable {
		driver.quit();
	}

	// <<<<<<<--Customer feature step Definitions-->>>>>>>>

	@Then("^User can view Dashboard$")
	public void user_can_view_Dashboard() throws Throwable {

		addCust = new AddCustomerPage(driver);
		Assert.assertEquals("Dashboard / nopCommerce administration",addCust.getPageTitle());
	}

	@When("^User click on customer Menu$")
	public void user_click_on_customer_Menu() throws Throwable {

		Thread.sleep(3000);
		addCust.clickOnCustomersMenu();

	}

	@When("^Click on customers Menu Item$")
	public void click_on_customers_Menu_Item() throws Throwable {

		Thread.sleep(3000);
		addCust.clickOnCustomersMenuItem();
	}

	@When("^click on Add new button$")
	public void click_on_Add_new_button() throws Throwable {

		addCust.clickOnAddnew();
		Thread.sleep(3000);
	}

	@Then("^User can view Add new customer page$")
	public void user_can_view_Add_new_customer_page() throws Throwable {

		Assert.assertEquals("Add a new customer / nopCommerce administration",addCust.getPageTitle());
	}

	@When("^User enters customer info$")
	public void user_enters_customer_info() throws Throwable {

		String email = randomstring()+"@gmail.com";
		addCust.setEmail(email);
		addCust.setPassword("test123");

		addCust.setGender("Male");
		addCust.setFirstName("Shreyash");
		addCust.setLastName("Mandaogade");
		addCust.setDob("24/06/1997");
		addCust.setCompanyName("Integrin");		
		addCust.setAdminComment("This is for Testing purpose...");
		addCust.setManagerOfVendor("Vendor2");
		addCust.setCustomerRoles("Guest");
		Thread.sleep(3000);

	}  

	@When("^click on Save button$")
	public void click_on_Save_button() throws Throwable {

		addCust.clickOnSave();

	}

	@Then("^User can view confirmation message \"([^\"]*)\"$")
	public void user_can_view_confirmation_message(String arg1) throws Throwable {

		Assert.assertTrue(driver.findElement(By.tagName("body")).getText().contains("The new customer has been added successfully."));		
	}

	@Then("^Enter customer Email$")
	public void enter_customer_Email() throws Throwable {

		searchCust = new SearchCustomerPage(driver);
		searchCust.setEmail("victoria_victoria@nopCommerce.com");
	}

	@When("^Click on search button$")
	public void click_on_search_button() throws Throwable {

		searchCust.clickSearch();
		Thread.sleep(3000);
	}

	@Then("^User should found Email in the Search table$")
	public void user_should_found_Email_in_the_Search_table() throws Throwable {

		boolean	status = searchCust.searchCustomerByEmail("victoria_victoria@nopCommerce.com");

		Assert.assertEquals(true,status);

	}

	//steps for searching a customer by using
	@When("^Enter customer FirstName$")
	public void enter_customer_FirstName() throws Throwable {

		searchCust = new SearchCustomerPage(driver);
		searchCust.setFirstName("Victoria"); 

	}

	@When("^Enter customer LastName$")
	public void enter_customer_LastName() throws Throwable {

		searchCust.setLastName("Terces");

	}

	@Then("^User should found Name in the Search table$")
	public void user_should_found_Name_in_the_Search_table() throws Throwable {

		boolean	status = searchCust.searchCustomerByName("Victoria Terces");
		Assert.assertEquals(true, status);

	}
	
}
