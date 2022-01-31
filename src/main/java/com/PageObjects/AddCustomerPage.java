package com.PageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class AddCustomerPage {

	public WebDriver ldriver;

	public AddCustomerPage(WebDriver rdriver) {
		this.ldriver = rdriver;
		PageFactory.initElements(rdriver,this);
	}

	By lnkCustomer_menu = By.xpath("//a[@href='#']//p[contains(text(),'Customers')]");

	By lnkCustomer_menuitem = By.xpath("//a[@href='/Admin/Customer/List']//p[contains(text(),'Customers')]");

	By btnAddnew = By.xpath("//a[@class='btn btn-primary']");

	By txtEmail = By.xpath("//input[@id='Email']");

	By txtPassword = By.xpath("//input[@id='Password']");

	By txtcustomerRoles = By.xpath("//div[@class='k-widget k-multiselect k-multiselect-clearable k-state-hover k-state-focused k-state-border-down']//div[@role='listbox']");

	By lstitemAdministors = By.xpath("//li[normalize-space()='Administrators']");
	By lstitemRegistered = By.xpath("//li[@class='k-button k-state-hover']");	
	By lstitemGuests = By.xpath("//li[normalize-space()='Guests']");	
	By lstitemVendors = By.xpath("//li[contains(text(),'Vendors')]");

	By drpOfVendors = By.xpath("//select[@id='VendorId']");	
	By rdMaleGender = By.id("Gender_Male");
	By rdFeMaleGender = By.id("Gender_Female");

	By txtFirstName = By.xpath("//input[@id='FirstName']");
	By txtlstName = By.xpath("//input[@id='LastName']");

	By txtDob = By.xpath("//input[@id='DateOfBirth']");

	By txtCompanyName = By.xpath("//input[@id='Company']");

	By txtAdminComment = By.xpath("//textarea[@id='AdminComment']");

	By btnSave = By.xpath("//button[@name='save']");

	//Actions Methods
	
	public String getPageTitle() {
		return ldriver.getTitle();
	}

	public void clickOnCustomersMenu() {
		ldriver.findElement(lnkCustomer_menu).click();
	}

	public void clickOnCustomersMenuItem() {
		ldriver.findElement(lnkCustomer_menuitem).click();
	}

	public void clickOnAddnew() {
		ldriver.findElement(btnAddnew).click();
	}

	public void setEmail(String email) {
		ldriver.findElement(txtEmail).sendKeys(email);
	}

	public void setPassword(String password) {
		ldriver.findElement(txtPassword).sendKeys(password);
	}

	public void setCustomerRoles(String role) throws Exception {

		if(!role.equals("Vendors"))
		{
			ldriver.findElement(By.xpath("//li[contains(text(),'Vendors')]"));		
		}

		ldriver.findElement( txtcustomerRoles).click();

		WebElement listitem;
		Thread.sleep(5000);

		if(role.equals("Administrators")) 
		{
			listitem = ldriver.findElement(lstitemAdministors);
		}
		else if(role.equals("Guests"))
		{
			listitem = ldriver.findElement(lstitemGuests);
		}
		else if(role.equals("Registered")) 
		{
			listitem = ldriver.findElement(lstitemRegistered);
		}
		else if(role.equals("Vendors")) 
		{
			listitem = ldriver.findElement(lstitemVendors);
		}		
		else 
		{
			listitem = ldriver.findElement(lstitemGuests);
		}

		listitem.click();

		JavascriptExecutor js = (JavascriptExecutor)ldriver;
		js.executeScript("arguments[0].click();", listitem);

	}

	public void setManagerOfVendor(String value) {

		Select drp = new Select(ldriver.findElement(drpOfVendors));
		drp.deselectByVisibleText(value);
	}

	public void setGender(String gender) {

		if(gender.equals("Male")) 
		{
			ldriver.findElement(rdMaleGender).click();
		}
		else if(gender.equals("FeMale")) 
		{
			ldriver.findElement(rdFeMaleGender).click();
		}
		else 
		{
			ldriver.findElement(rdMaleGender).click();
		}
	}

	public void setFirstName(String fname) {
		ldriver.findElement(txtFirstName).sendKeys(fname);
	}

	public void setLastName(String lname) {
		ldriver.findElement(txtlstName).sendKeys(lname);
	}

	public void setDob(String dob) {
		ldriver.findElement(txtDob).sendKeys(dob);
	}

	public void setCompanyName(String comname) {
		ldriver.findElement(txtCompanyName).sendKeys(comname);
	}

	public void setAdminComment(String comments) {
		ldriver.findElement(txtAdminComment).sendKeys(comments);
	}

	public void clickOnSave() {
		ldriver.findElement(btnSave).click();
	}
}
