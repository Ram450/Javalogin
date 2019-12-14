Feature: Login functionality
Scenario: Verifying login functionality with valid details
Given Open the sample login appliction in chrome browser
When title of the main page is "Servlet Application Login"
Then enter username and password
Then click on login button
Then verify the title of the page after login "Congratulations! Test, You are an authorised login!"

Scenario: Verifying login functionality with valid username and password parameterized details
Given Open the sample login appliction in chrome browser
When title of the main page is "Servlet Application Login"
Then enter username as "test" and password as "test@1233"
Then click on login button
Then verify the title of the page after login "Congratulations! Test, You are an authorised login!"


Scenario Outline: Verifying login functionality with valid username and password parameterized and with scenario outline details
Given Open the sample login appliction in chrome browser
When title of the main page is "Servlet Application Login"
Then enter username as "<username>" and password as "<password>"
Then click on login button
Then verify the title of the page after login "Congratulations! Test, You are an authorised login!"

Examples:
|username|password|
|test|test@123|
|test1|test@123|
