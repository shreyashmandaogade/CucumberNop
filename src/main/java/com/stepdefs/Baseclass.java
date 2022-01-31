package com.stepdefs;

import org.apache.commons.lang3.RandomStringUtils;
import org.openqa.selenium.WebDriver;
import com.PageObjects.AddCustomerPage;
import com.PageObjects.LoginPage;
import com.PageObjects.SearchCustomerPage;

public class Baseclass {

	public WebDriver driver;
	public LoginPage lp;
	public AddCustomerPage addCust;
	public SearchCustomerPage searchCust;
	
	
	//Created for generating random string for Unique email 
	public static String randomstring() {
		
		String generatedString1 = RandomStringUtils.randomAlphabetic(5);
		return (generatedString1);
		
	}
}
