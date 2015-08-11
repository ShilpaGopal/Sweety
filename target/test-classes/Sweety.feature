Feature: Sweety Automation

@SweetyLevelEntry

Scenario Outline: Glucose level entry Validation for more than 4 entries per day
	Given Home Page loads successfully
	Then Enter EmailID and password "<PropertyFile>"
	And Click on Login
	And Navigate to Enter Levels
	And Verify 4 levels are available for the day
	And Click On AddnewValue
	And Enter the Level "<Level>"
	And Click on Submit
	Then Verify level entered are not accepted
	
Examples:
|PropertyFile|Level|
|LoginDetails.properties|4|



@SweetyReport

Scenario Outline: View Report
	Given Home Page loads successfully
	Then Enter EmailID and password "<PropertyFile>"
	And Click on Login
	And Navigate to Reports
	And View Daily Report
	Then View Monthly Reports
	
	
Examples:
|PropertyFile|
|LoginDetails.properties|

	