$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Sweety.feature");
formatter.feature({
  "line": 1,
  "name": "Sweety Automation",
  "description": "",
  "id": "sweety-automation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 49505488667,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Glucose level entry Validation for more than 4 entries per day",
  "description": "",
  "id": "sweety-automation;glucose-level-entry-validation-for-more-than-4-entries-per-day;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SweetyLevelEntry"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Home Page loads successfully",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter EmailID and password \"LoginDetails.properties\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Navigate to Enter Levels",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify 4 levels are available for the day",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click On AddnewValue",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter the Level \"4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Click on Submit",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Verify level entered are not accepted",
  "keyword": "Then "
});
formatter.match({
  "location": "Sweety.Home_Page_loads_successfully()"
});
formatter.result({
  "duration": 15696203396,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LoginDetails.properties",
      "offset": 28
    }
  ],
  "location": "Sweety.User_Enters_EmailID_Password(String)"
});
formatter.result({
  "duration": 316973391,
  "status": "passed"
});
formatter.match({
  "location": "Sweety.Validate_The_Login()"
});
formatter.result({
  "duration": 109256533,
  "status": "passed"
});
formatter.match({
  "location": "Sweety.Navigate_To_Enter_Levels()"
});
formatter.result({
  "duration": 1459426368,
  "status": "passed"
});
formatter.match({
  "location": "Sweety.Verify_4_levels_are_available_for_the_day()"
});
formatter.result({
  "duration": 462832107,
  "status": "passed"
});
formatter.match({
  "location": "Sweety.Click_on_Levels()"
});
formatter.result({
  "duration": 225110818,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 17
    }
  ],
  "location": "Sweety.Enter_the_level(String)"
});
formatter.result({
  "duration": 1230434059,
  "status": "passed"
});
formatter.match({
  "location": "Sweety.Click_on_submit()"
});
formatter.result({
  "duration": 3205455823,
  "status": "passed"
});
formatter.match({
  "location": "Sweety.Verify_level_entered_are_accepted_or_not()"
});
formatter.result({
  "duration": 121225824,
  "status": "passed"
});
formatter.after({
  "duration": 2348621222,
  "status": "passed"
});
formatter.before({
  "duration": 15125936261,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "View Report",
  "description": "",
  "id": "sweety-automation;view-report;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@SweetyReport"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Home Page loads successfully",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Enter EmailID and password \"LoginDetails.properties\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Navigate to Reports",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "View Daily Report",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "View Monthly Reports",
  "keyword": "Then "
});
formatter.match({
  "location": "Sweety.Home_Page_loads_successfully()"
});
formatter.result({
  "duration": 15695453541,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LoginDetails.properties",
      "offset": 28
    }
  ],
  "location": "Sweety.User_Enters_EmailID_Password(String)"
});
formatter.result({
  "duration": 303229082,
  "status": "passed"
});
formatter.match({
  "location": "Sweety.Validate_The_Login()"
});
formatter.result({
  "duration": 89262233,
  "status": "passed"
});
formatter.match({
  "location": "Sweety.Navigate_To_Report()"
});
formatter.result({
  "duration": 1364679694,
  "status": "passed"
});
formatter.match({
  "location": "Sweety.View_Daily_Report()"
});
formatter.result({
  "duration": 3142509126,
  "status": "passed"
});
formatter.match({
  "location": "Sweety.View_Monthly_Reports()"
});
formatter.result({
  "duration": 6131869286,
  "status": "passed"
});
formatter.after({
  "duration": 1936462234,
  "status": "passed"
});
});