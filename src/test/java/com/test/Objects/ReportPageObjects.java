package com.test.Objects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ReportPageObjects 
{
	@FindBy(linkText="Reports")
	public WebElement Report;
	
	@FindBy(xpath="//*[@id='page-content-wrapper']/div/div[2]/div[2]/ul/li[1]/a")
	public WebElement DailyReport;
	
	@FindBy(xpath="//*[@id='page-content-wrapper']/div/div[2]/div[2]/ul/li[2]/a")
	public WebElement MonthlyReport;

}
