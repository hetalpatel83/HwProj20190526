@Login
Feature: : User should not be logged in with invalid Credential
  So user can see error message

  Background:
    Given user is on Home page

  Scenario Outline: User should not be logged in with invalid Credential

    When  user navigate to login Page
    And user enter invalid "<username>" and "<password>"
    Then user should not be logged in Successfully and user can see "<error message>"

    Examples:

      | username            | password | error message                          |
      | jhonkins@bmail.com  | auto246  | The credentials provided are incorrect |
      | jhonkins@bmail.com  |          | Please enter password                  |
      | jhonkins@bmail.com  | print357 | The credentials provided are incorrect |
      | jhonlewis@bmail.com | auto246  | The credentials provided are incorrect |
      | jhonlewis@bmail.com |          | Please enter password                  |
      |                     | print357 | Please enter email                     |
      |                     | auto246  | Please enter email                     |
      |                     |          | Please enter valid credential          |
