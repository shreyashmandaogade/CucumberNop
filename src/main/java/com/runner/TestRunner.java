package com.runner;

import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(

		features="src/main/java/com/features/customer.feature", //path features
		glue="com.stepdefs",  //path of stepdefs
		plugin = {"pretty","html:target"},	//report generation
		monochrome = true,
		dryRun = false
		)


public class TestRunner {

	
}
