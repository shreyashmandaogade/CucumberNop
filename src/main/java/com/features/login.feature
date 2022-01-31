Feature: Login

Scenario: Successful Login with Valid Credentials
Given User Launch Chrome browser
When User opens URL "https://admin-demo.nopcommerce.com/login"
And User enters Email as "admin@yourstore.com" and Password as "admin"
And Click on Login
Then User should on Dashboard page "Dashboard / nopCommerce administration"
When User click on Log out link
Then user will on home page "Your store. Login"
And close browser


Scenario Outline: Login Data Driven
Given User Launch Chrome browser
When User opens URL "https://admin-demo.nopcommerce.com/login"
And User enters Email as "<email>" and Password as "<password>"
And Click on Login
Then User should on Dashboard page "Dashboard / nopCommerce administration"
When User click on Log out link
Then user will on home page "Your store. Login"
And close browser

Examples :
|email | password |
|admin@yourstore.com | admin |
|admin@yourstore.com | admin123 |
