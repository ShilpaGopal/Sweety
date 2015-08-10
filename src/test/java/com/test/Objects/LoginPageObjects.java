package com.test.Objects;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Hashtable;
import java.util.Properties;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPageObjects 
{
	static String PropertyPath="./Data/";
	
	@FindBy(name="commit")
	public WebElement Login;
	
	@FindBy(id="user_email")
	public WebElement EmailId;
	
	@FindBy(id="user_password")
	public WebElement Password;
	
	@FindBy(className="alert alert-info fade in")
	public WebElement LoginMsg;
	

	public Hashtable<String, String> getUserDetails(String propertyFile) throws IOException
	{
		File file =new File(PropertyPath+propertyFile);
		FileInputStream input =new FileInputStream(file);
		Properties property=new Properties();
		property.load(input);
        Hashtable<String,String> Details=new Hashtable<String,String>();
        Details.put("EmailID", property.getProperty("EmailID"));
        Details.put("Password", property.getProperty("Password"));
        return Details;
        
		
	}
}
