package com.test.Sweety;

import java.io.IOException;
import java.util.Hashtable;
import java.util.List;

import org.apache.poi.util.SystemOutLogger;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.test.Objects.LevelPageObjects;
import com.test.Objects.LoginPageObjects;
import com.test.Objects.ReportPageObjects;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;


public class Sweety 
{
	public static WebDriver driver=null;
	public static LoginPageObjects loginObj;
	public static LevelPageObjects levelObj;
	public static ReportPageObjects ReportObj;
	
	@Before
	public static void setup()
	{
		System.setProperty("webdriver.chrome.driver", "./ChromeDriverServer/chromedriver.exe");
		driver =new ChromeDriver();
		driver.manage().window().maximize();
		loginObj = new LoginPageObjects();
		loginObj = PageFactory.initElements(driver, LoginPageObjects.class);
		
		levelObj=new LevelPageObjects();
		levelObj=PageFactory.initElements(driver, LevelPageObjects.class);
		
		ReportObj=new ReportPageObjects();
		ReportObj=PageFactory.initElements(driver, ReportPageObjects.class);
		
		
	}
	
	@After
	
		public static void tearDown(Scenario result) throws Exception {
			try {
				if (result.isFailed()) {
					result.write(result.toString());
					result.write(result.getStatus());
					result.write("ScrenShot taken for failed step ");
					Thread.sleep(3000L);
					byte[] screenshot = ((TakesScreenshot) driver)
							.getScreenshotAs(OutputType.BYTES);
					Thread.sleep(3000L);
					result.embed(screenshot, "image/png");
					Thread.sleep(3000L);
				}
			} catch (Exception e) {
				System.out.println(e.getMessage());
			} finally {
				driver.quit();
			}
		}
	
	
	@Given("^Home Page loads successfully$")
	public void Home_Page_loads_successfully() throws Throwable 
	{
		driver.get("http://damp-sands-8561.herokuapp.com/");
		//Thread.sleep(8000L);
		 WebDriverWait wait = new WebDriverWait(driver, 30);
		 wait.until(ExpectedConditions.visibilityOf(loginObj.Login));
	}
	
	@Then("^Enter EmailID and password \"([^\"]*)\"$")
	public void User_Enters_EmailID_Password(String prpertyFile)
	{
		Hashtable<String, String> getValue=new Hashtable<String, String>();
		try {
			getValue=loginObj.getUserDetails(prpertyFile);
		} catch (IOException e) {
			
			e.printStackTrace();
		}
		
		loginObj.EmailId.sendKeys(getValue.get("EmailID"));
		loginObj.Password.sendKeys(getValue.get("Password"));
		
		
	}
	
	@And("^Click on Login$")
	public void Validate_The_Login()
	{
		loginObj.Login.click();
		// WebDriverWait wait = new WebDriverWait(driver, 30);
		// wait.until(ExpectedConditions.visibilityOf(loginObj.LoginMsg));
		
	}
	
	@And("^Navigate to Enter Levels$")
	public void Navigate_To_Enter_Levels()
	{
		//WebDriverWait wait = new WebDriverWait(driver, 80);
		//wait.until(ExpectedConditions.visibilityOf(levelObj.Level));
		boolean breakIt = true;
        while (true) {
        breakIt = true;
        try {
        	levelObj.Level.click();
        } catch (Exception e) {
            if (e.getMessage().contains("element is not attached")) {
                breakIt = false;
            }
        }
        if (breakIt) {
            break;
        }

    }	
		
	}
	
	@And("^Click On AddnewValue$")
	public void Click_on_Levels()
	{
		WebDriverWait wait = new WebDriverWait(driver, 80);
		wait.until(ExpectedConditions.visibilityOf(levelObj.AddLevel));
		levelObj.AddLevel.click();
	}
	
	@And("^Enter the Level \"([^\"]*)\"$")
	public void Enter_the_level(String level)
	{
		WebDriverWait wait = new WebDriverWait(driver, 80);
		wait.until(ExpectedConditions.visibilityOf(levelObj.EnterLevel));
		levelObj.EnterLevel.sendKeys(level);
		
	}
	
	@Then("^Click on Submit$")
	public void Click_on_submit()
	{
		WebDriverWait wait = new WebDriverWait(driver, 80);
		wait.until(ExpectedConditions.visibilityOf(levelObj.Submit));
		levelObj.Submit.click();
		
		try {
			Thread.sleep(3000L);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@And("^Navigate to Reports$")
	public void Navigate_To_Report()
	{
		boolean breakIt = true;
        while (true) {
        breakIt = true;
        try {
        	ReportObj.Report.click();
        } catch (Exception e) {
            if (e.getMessage().contains("element is not attached")) {
                breakIt = false;
            }
        }
        if (breakIt) {
            break;
        }

    }
		
	}
	
	@And("^View Daily Report$$")
	public void View_Daily_Report()
	{
		try {
			Thread.sleep(3000L);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		WebDriverWait wait = new WebDriverWait(driver, 80);
		wait.until(ExpectedConditions.visibilityOf(ReportObj.DailyReport));
		ReportObj.DailyReport.click();
	}
	
	@And("^View Monthly Reports$")
	public void View_Monthly_Reports()
	{
		try {
			Thread.sleep(3000L);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		WebDriverWait wait = new WebDriverWait(driver, 80);
		wait.until(ExpectedConditions.visibilityOf(ReportObj.MonthlyReport));
		ReportObj.MonthlyReport.click();
		try {
			Thread.sleep(3000L);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	
	

}
