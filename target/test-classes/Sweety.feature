Feature: Sweety Automation

@SweetyLevelEntry

Scenario Outline: Glucose level entry
	Given Home Page loads successfully
	Then Enter EmailID and password "<PropertyFile>"
	And Click on Login
	And Navigate to Enter Levels
	And Click On AddnewValue
	And Enter the Level "<Level>"
	Then Click on Submit
	
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
	And View Monthly Reports
	
Examples:
|PropertyFile|
|LoginDetails.properties|

	