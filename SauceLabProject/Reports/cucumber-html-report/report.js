$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Test.feature");
formatter.feature({
  "line": 1,
  "name": "Add two numbers",
  "description": "As a math enthusiast\r\nI want to add two numbers\r\nSo that I have correct sum",
  "id": "add-two-numbers",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 15,
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
  "name": "I enter 8 and 13",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I press sum button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the sum should be 21",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TestCalcWithBDD.I_have_launched_calculator_app()"
});
formatter.result({
  "duration": 49965540895,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 8
    },
    {
      "val": "13",
      "offset": 14
    }
  ],
  "location": "TestCalcWithBDD.I_enter_and(int,int)"
});
formatter.result({
  "duration": 10819531146,
  "status": "passed"
});
formatter.match({
  "location": "TestCalcWithBDD.I_press_sum_button()"
});
formatter.result({
  "duration": 1287757068,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21",
      "offset": 18
    }
  ],
  "location": "TestCalcWithBDD.the_sum_should_be(int)"
});
formatter.result({
  "duration": 1133398651,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
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
  "name": "I enter 121 and 100",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I press sum button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the sum should be 201",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TestCalcWithBDD.I_have_launched_calculator_app()"
});
formatter.result({
  "duration": 60411875619,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "121",
      "offset": 8
    },
    {
      "val": "100",
      "offset": 16
    }
  ],
  "location": "TestCalcWithBDD.I_enter_and(int,int)"
});
formatter.result({
  "duration": 10579859533,
  "status": "passed"
});
formatter.match({
  "location": "TestCalcWithBDD.I_press_sum_button()"
});
formatter.result({
  "duration": 1697758707,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 18
    }
  ],
  "location": "TestCalcWithBDD.the_sum_should_be(int)"
});
formatter.result({
  "duration": 1293209662,
  "error_message": "java.lang.AssertionError: not equal expected:\u003c201\u003e but was:\u003c221\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat stepdef.TestCalcWithBDD.the_sum_should_be(TestCalcWithBDD.java:53)\r\n\tat ✽.Then the sum should be 201(Test.feature:10)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 17,
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
  "name": "I enter 131 and 99",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I press sum button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the sum should be 230",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TestCalcWithBDD.I_have_launched_calculator_app()"
});
formatter.result({
  "duration": 34848094607,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "131",
      "offset": 8
    },
    {
      "val": "99",
      "offset": 16
    }
  ],
  "location": "TestCalcWithBDD.I_enter_and(int,int)"
});
formatter.result({
  "duration": 12338730902,
  "status": "passed"
});
formatter.match({
  "location": "TestCalcWithBDD.I_press_sum_button()"
});
formatter.result({
  "duration": 1226314684,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "230",
      "offset": 18
    }
  ],
  "location": "TestCalcWithBDD.the_sum_should_be(int)"
});
formatter.result({
  "duration": 871262782,
  "status": "passed"
});
});