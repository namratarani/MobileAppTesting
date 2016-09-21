Feature: Add two numbers
  As a math enthusiast
  I want to add two numbers
  So that I have correct sum

  Scenario Outline: Add two numbers in calculator app
    Given I have launched calculator app
    And I press key with <value1>
    And I press 'plus' key
    When I press key1 with <value2>
    And I press 'equals' key
    Then the sum should be <expectedvalue>

    Examples: 
      | value1 | value2 | expectedvalue |
      |      1 |      2 |             3 |
      |      2 |      4 |             6 |
      |      4 |      3 |             8 |
