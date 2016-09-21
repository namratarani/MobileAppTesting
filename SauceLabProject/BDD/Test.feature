Feature: Add two numbers
  As a math enthusiast
  I want to add two numbers
  So that I have correct sum

  Scenario Outline: Add two numbers in calculator app
    Given I have launched calculator app
    And I enter <value1> and <value2>
    When I press sum button
    Then the sum should be <expectedvalue>
    

    Examples: 
      | value1 | value2 | expectedvalue |
      |      8 |     13 |            21 |
      |    121 |    100 |           201 |
      |    131 |     99 |           230 |
