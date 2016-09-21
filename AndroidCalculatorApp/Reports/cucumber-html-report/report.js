$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Test.feature");
formatter.feature({
  "line": 1,
  "name": "Add two numbers",
  "description": "As a math enthusiast\r\nI want to add two numbers\r\nSo that I have correct sum",
  "id": "add-two-numbers",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 16,
  "name": "Add two numbers in calculator app",
  "description": "",
  "id": "add-two-numbers;add-two-numbers-in-calculator-app;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I have launched calculator app",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I press key with 1",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I press \u0027plus\u0027 key",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I press key1 with 2",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I press \u0027equals\u0027 key",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the sum should be 3",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AndroidAppWithBDD.I_have_launched_calculator_app()"
});
formatter.result({
  "duration": 15829535264,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 17
    }
  ],
  "location": "AndroidAppWithBDD.I_press_key_with(int)"
});
formatter.result({
  "duration": 385082219,
  "status": "passed"
});
formatter.match({
  "location": "AndroidAppWithBDD.I_press_plus_key()"
});
formatter.result({
  "duration": 678327803,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "AndroidAppWithBDD.I_press_key1_with(int)"
});
formatter.result({
  "duration": 657084500,
  "status": "passed"
});
formatter.match({
  "location": "AndroidAppWithBDD.I_press_equals_key()"
});
formatter.result({
  "duration": 691714668,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "AndroidAppWithBDD.the_sum_should_be(int)"
});
formatter.result({
  "duration": 1704129901,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Add two numbers in calculator app",
  "description": "",
  "id": "add-two-numbers;add-two-numbers-in-calculator-app;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I have launched calculator app",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I press key with 2",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I press \u0027plus\u0027 key",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I press key1 with 4",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I press \u0027equals\u0027 key",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the sum should be 6",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AndroidAppWithBDD.I_have_launched_calculator_app()"
});
formatter.result({
  "duration": 15778669199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 17
    }
  ],
  "location": "AndroidAppWithBDD.I_press_key_with(int)"
});
formatter.result({
  "duration": 504102702,
  "status": "passed"
});
formatter.match({
  "location": "AndroidAppWithBDD.I_press_plus_key()"
});
formatter.result({
  "duration": 685656515,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "AndroidAppWithBDD.I_press_key1_with(int)"
});
formatter.result({
  "duration": 645098204,
  "status": "passed"
});
formatter.match({
  "location": "AndroidAppWithBDD.I_press_equals_key()"
});
formatter.result({
  "duration": 643713460,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 18
    }
  ],
  "location": "AndroidAppWithBDD.the_sum_should_be(int)"
});
formatter.result({
  "duration": 1999376907,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Add two numbers in calculator app",
  "description": "",
  "id": "add-two-numbers;add-two-numbers-in-calculator-app;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I have launched calculator app",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I press key with 4",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I press \u0027plus\u0027 key",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I press key1 with 3",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I press \u0027equals\u0027 key",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the sum should be 8",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AndroidAppWithBDD.I_have_launched_calculator_app()"
});
formatter.result({
  "duration": 15412540194,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 17
    }
  ],
  "location": "AndroidAppWithBDD.I_press_key_with(int)"
});
formatter.result({
  "duration": 485388120,
  "status": "passed"
});
formatter.match({
  "location": "AndroidAppWithBDD.I_press_plus_key()"
});
formatter.result({
  "duration": 672805075,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "AndroidAppWithBDD.I_press_key1_with(int)"
});
formatter.result({
  "duration": 651880803,
  "status": "passed"
});
formatter.match({
  "location": "AndroidAppWithBDD.I_press_equals_key()"
});
formatter.result({
  "duration": 660844438,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 18
    }
  ],
  "location": "AndroidAppWithBDD.the_sum_should_be(int)"
});
formatter.result({
  "duration": 658953350,
  "error_message": "java.lang.AssertionError: sum not correct expected:\u003c8\u003e but was:\u003c7\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat stepdef.AndroidAppWithBDD.the_sum_should_be(AndroidAppWithBDD.java:59)\r\n\tat ✽.Then the sum should be 8(Test.feature:12)\r\n",
  "status": "failed"
});
});