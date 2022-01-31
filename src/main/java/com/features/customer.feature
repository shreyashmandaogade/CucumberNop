Feature: Customers


Scenario: Add a new Customer
Given User Launch Chrome browser
When User opens URL "https://admin-demo.nopcommerce.com/login"
And User enters Email as "admin@yourstore.com" and Password as "admin"
And Click on Login
Then User can view Dashboard
When User click on customer Menu
And Click on customers Menu Item
And click on Add new button
Then User can view Add new customer page
When User enters customer info
And click on Save button
Then User can view confirmation message "The new customer has been added successfully."
And close browser


Scenario: Search Customer by EmailID
Given User Launch Chrome browser
When User opens URL "https://admin-demo.nopcommerce.com/login"
And User enters Email as "admin@yourstore.com" and Password as "admin"
And Click on Login
Then User can view Dashboard
When User click on customer Menu
And Click on customers Menu Item
And Enter customer Email
When Click on search button
Then User should found Email in the Search table
And close browser


Scenario: Search Customer by Name
 Given User Launch Chrome browser
 When User opens URL "https://admin-demo.nopcommerce.com/login"
 And User enters Email as "admin@yourstore.com" and Password as "admin"
 And Click on Login
 Then User can view Dashboard
When User click on customer Menu
And Click on customers Menu Item
And Enter customer FirstName
When Enter customer LastName
When Click on search button 
Then User should found Name in the Search table
And close browser
 



