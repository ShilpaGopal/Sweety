package com.test.Sweety;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features={"src/test/java/Sweety.feature"},
		format={"pretty", "html:target/cucumber","json:target/cucumber.json","rerun:target/cucumber/temp.txt"},
		glue={"com/test/Sweety"})
public class TriggerTest 
{
	
}
