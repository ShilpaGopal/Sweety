$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Sweety.feature");
formatter.feature({
  "line": 1,
  "name": "Sweety Automation",
  "description": "",
  "id": "sweety-automation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 27240566001,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Glucose level entry",
  "description": "",
  "id": "sweety-automation;glucose-level-entry;;2",
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
  "name": "Click On AddnewValue",
  "keyword": "And "
});
formatter.match({
  "location": "Sweety.Home_Page_loads_successfully()"
});
formatter.result({
  "duration": 15587305737,
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
  "duration": 306325518,
  "status": "passed"
});
formatter.match({
  "location": "Sweety.Validate_The_Login()"
});
formatter.result({
  "duration": 76673451,
  "status": "passed"
});
formatter.match({
  "location": "Sweety.Navigate_To_Enter_Levels()"
});
formatter.result({
  "duration": 2032312538,
  "status": "passed"
});
formatter.match({
  "location": "Sweety.Click_on_Levels()"
});
formatter.result({
  "duration": 1247676329,
  "status": "passed"
});
formatter.after({
  "duration": 3100885516,
  "status": "passed"
});
formatter.before({
  "duration": 15775601740,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "View Report",
  "description": "",
  "id": "sweety-automation;view-report;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@SweetyReport"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "Home Page loads successfully",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "Enter EmailID and password \"LoginDetails.properties\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Navigate to Reports",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "View Daily Report",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "View Monthly Reports",
  "keyword": "And "
});
formatter.match({
  "location": "Sweety.Home_Page_loads_successfully()"
});
formatter.result({
  "duration": 14000570541,
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
  "duration": 315992714,
  "status": "passed"
});
formatter.match({
  "location": "Sweety.Validate_The_Login()"
});
formatter.result({
  "duration": 92605730,
  "status": "passed"
});
formatter.match({
  "location": "Sweety.Navigate_To_Report()"
});
formatter.result({
  "duration": 1693770478,
  "status": "passed"
});
formatter.match({
  "location": "Sweety.View_Daily_Report()"
});
formatter.result({
  "duration": 3115264353,
  "status": "passed"
});
formatter.match({
  "location": "Sweety.View_Monthly_Reports()"
});
formatter.result({
  "duration": 6143190066,
  "status": "passed"
});
formatter.after({
  "duration": 2065316366,
  "status": "passed"
});
});