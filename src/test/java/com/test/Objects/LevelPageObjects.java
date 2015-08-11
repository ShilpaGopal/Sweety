package com.test.Objects;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LevelPageObjects 
{
	@FindBy(linkText="Levels")
	public WebElement Level;
	
	@FindBy(linkText="Add new")
	public WebElement AddLevel;
	
	@FindBy(id="entry_level")
	public WebElement EnterLevel;
	
	@FindBy(xpath="//*[@id='new_entry']/input[3]")
	public WebElement Submit;
	
	@FindBy(xpath="//*[@id='page-content-wrapper']/div/div[1]")
	public WebElement AlertMsg;
	
	@FindBy(tagName="tbody")
	public WebElement TableBody;
	
	@FindBy(tagName="tr")
	public WebElement TableRow;
	
	
	

}
