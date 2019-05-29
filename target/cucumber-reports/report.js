$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Resources/FeatureFiles/Login.feature");
formatter.feature({
  "name": ": User should not be logged in with invalid Credential",
  "description": "  So user can see error message",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User should not be logged in with invalid Credential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user navigate to login Page",
  "keyword": "When "
});
formatter.step({
  "name": "user enter invalid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user should not be logged in Successfully and user can see \"\u003cerror message\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "error message"
      ]
    },
    {
      "cells": [
        "jhonkins@bmail.com",
        "auto246",
        "The credentials provided are incorrect"
      ]
    },
    {
      "cells": [
        "jhonkins@bmail.com",
        "",
        "Please enter password"
      ]
    },
    {
      "cells": [
        "jhonkins@bmail.com",
        "print357",
        "The credentials provided are incorrect"
      ]
    },
    {
      "cells": [
        "jhonlewis@bmail.com",
        "auto246",
        "The credentials provided are incorrect"
      ]
    },
    {
      "cells": [
        "jhonlewis@bmail.com",
        "",
        "Please enter password"
      ]
    },
    {
      "cells": [
        "",
        "print357",
        "Please enter email"
      ]
    },
    {
      "cells": [
        "",
        "auto246",
        "Please enter email"
      ]
    },
    {
      "cells": [
        "",
        "",
        "Please enter valid credential"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepsDef.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be logged in with invalid Credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "user navigate to login Page",
  "keyword": "When "
});
formatter.match({
  "location": "MyStepsDef.userNavigateToLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter invalid \"jhonkins@bmail.com\" and \"auto246\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepsDef.userEnterInvalidAnd(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not be logged in Successfully and user can see \"The credentials provided are incorrect\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepsDef.user_should_not_be_logged_in_Successfully_and_user_can_see(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepsDef.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be logged in with invalid Credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "user navigate to login Page",
  "keyword": "When "
});
formatter.match({
  "location": "MyStepsDef.userNavigateToLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter invalid \"jhonkins@bmail.com\" and \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepsDef.userEnterInvalidAnd(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not be logged in Successfully and user can see \"Please enter password\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepsDef.user_should_not_be_logged_in_Successfully_and_user_can_see(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepsDef.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be logged in with invalid Credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "user navigate to login Page",
  "keyword": "When "
});
formatter.match({
  "location": "MyStepsDef.userNavigateToLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter invalid \"jhonkins@bmail.com\" and \"print357\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepsDef.userEnterInvalidAnd(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not be logged in Successfully and user can see \"The credentials provided are incorrect\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepsDef.user_should_not_be_logged_in_Successfully_and_user_can_see(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepsDef.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be logged in with invalid Credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "user navigate to login Page",
  "keyword": "When "
});
formatter.match({
  "location": "MyStepsDef.userNavigateToLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter invalid \"jhonlewis@bmail.com\" and \"auto246\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepsDef.userEnterInvalidAnd(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not be logged in Successfully and user can see \"The credentials provided are incorrect\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepsDef.user_should_not_be_logged_in_Successfully_and_user_can_see(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepsDef.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be logged in with invalid Credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "user navigate to login Page",
  "keyword": "When "
});
formatter.match({
  "location": "MyStepsDef.userNavigateToLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter invalid \"jhonlewis@bmail.com\" and \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepsDef.userEnterInvalidAnd(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not be logged in Successfully and user can see \"Please enter password\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepsDef.user_should_not_be_logged_in_Successfully_and_user_can_see(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepsDef.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be logged in with invalid Credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "user navigate to login Page",
  "keyword": "When "
});
formatter.match({
  "location": "MyStepsDef.userNavigateToLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter invalid \"\" and \"print357\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepsDef.userEnterInvalidAnd(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not be logged in Successfully and user can see \"Please enter email\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepsDef.user_should_not_be_logged_in_Successfully_and_user_can_see(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepsDef.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be logged in with invalid Credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "user navigate to login Page",
  "keyword": "When "
});
formatter.match({
  "location": "MyStepsDef.userNavigateToLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter invalid \"\" and \"auto246\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepsDef.userEnterInvalidAnd(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not be logged in Successfully and user can see \"Please enter email\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepsDef.user_should_not_be_logged_in_Successfully_and_user_can_see(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepsDef.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be logged in with invalid Credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "user navigate to login Page",
  "keyword": "When "
});
formatter.match({
  "location": "MyStepsDef.userNavigateToLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter invalid \"\" and \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepsDef.userEnterInvalidAnd(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not be logged in Successfully and user can see \"Please enter valid credential\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepsDef.user_should_not_be_logged_in_Successfully_and_user_can_see(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});