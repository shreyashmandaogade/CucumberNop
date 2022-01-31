$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/com/features/customer.feature");
formatter.feature({
  "line": 1,
  "name": "Customers",
  "description": "",
  "id": "customers",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Add a new Customer",
  "description": "",
  "id": "customers;add-a-new-customer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User can view Dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User click on customer Menu",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Click on customers Menu Item",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on Add new button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User can view Add new customer page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User enters customer info",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "click on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User can view confirmation message \"The new customer has been added successfully.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Loginsteps.user_Launch_Chrome_browser()"
});
formatter.result({
  "duration": 1868249600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login",
      "offset": 16
    }
  ],
  "location": "Loginsteps.user_opens_URL(String)"
});
formatter.result({
  "duration": 2444931400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Loginsteps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 228477400,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.click_on_Login()"
});
formatter.result({
  "duration": 10379234100,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.user_can_view_Dashboard()"
});
formatter.result({
  "duration": 8989200,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.user_click_on_customer_Menu()"
});
formatter.result({
  "duration": 3070519000,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.click_on_customers_Menu_Item()"
});
formatter.result({
  "duration": 4880573900,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.click_on_Add_new_button()"
});
formatter.result({
  "duration": 6202702200,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.user_can_view_Add_new_customer_page()"
});
formatter.result({
  "duration": 4722300,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.user_enters_customer_info()"
});
formatter.result({
  "duration": 642264000,
  "error_message": "java.lang.UnsupportedOperationException: You may only deselect options of a multi-select\r\n\tat org.openqa.selenium.support.ui.Select.deselectByVisibleText(Select.java:294)\r\n\tat com.PageObjects.AddCustomerPage.setManagerOfVendor(AddCustomerPage.java:120)\r\n\tat com.stepdefs.Loginsteps.user_enters_customer_info(Loginsteps.java:118)\r\n\tat ✽.When User enters customer info(src/main/java/com/features/customer.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Loginsteps.click_on_Save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "The new customer has been added successfully.",
      "offset": 36
    }
  ],
  "location": "Loginsteps.user_can_view_confirmation_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Loginsteps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 20,
  "name": "Search Customer by EmailID",
  "description": "",
  "id": "customers;search-customer-by-emailid",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User can view Dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User click on customer Menu",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Click on customers Menu Item",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Enter customer Email",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Click on search button",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "User should found Email in the Search table",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Loginsteps.user_Launch_Chrome_browser()"
});
formatter.result({
  "duration": 1046987700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login",
      "offset": 16
    }
  ],
  "location": "Loginsteps.user_opens_URL(String)"
});
formatter.result({
  "duration": 2240845100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Loginsteps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 249346500,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.click_on_Login()"
});
formatter.result({
  "duration": 7517378500,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.user_can_view_Dashboard()"
});
formatter.result({
  "duration": 13044600,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.user_click_on_customer_Menu()"
});
formatter.result({
  "duration": 3084122200,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.click_on_customers_Menu_Item()"
});
formatter.result({
  "duration": 6492046200,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.enter_customer_Email()"
});
formatter.result({
  "duration": 196933100,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.click_on_search_button()"
});
formatter.result({
  "duration": 3100697700,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.user_should_found_Email_in_the_Search_table()"
});
formatter.result({
  "duration": 61561900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//table[@id\u003d\u0027customers-grid\u0027]/body/tr[1]/td[2]\"}\n  (Session info: chrome\u003d97.0.4692.99)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-7RS9FQA9\u0027, ip: \u0027192.168.225.138\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.14\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 97.0.4692.99, chrome: {chromedriverVersion: 97.0.4692.71 (adefa7837d02a..., userDataDir: C:\\Users\\Shreyash\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:62014}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 82877c14e714c9758674b34d075471b1\n*** Element info: {Using\u003dxpath, value\u003d//table[@id\u003d\u0027customers-grid\u0027]/body/tr[1]/td[2]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.findElement(RemoteWebElement.java:179)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.findElementByXPath(RemoteWebElement.java:252)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.findElement(RemoteWebElement.java:175)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy18.findElement(Unknown Source)\r\n\tat com.PageObjects.SearchCustomerPage.searchCustomerByEmail(SearchCustomerPage.java:134)\r\n\tat com.stepdefs.Loginsteps.user_should_found_Email_in_the_Search_table(Loginsteps.java:154)\r\n\tat ✽.Then User should found Email in the Search table(src/main/java/com/features/customer.feature:30)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Loginsteps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 34,
  "name": "Search Customer by Name",
  "description": "",
  "id": "customers;search-customer-by-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User can view Dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "User click on customer Menu",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "Click on customers Menu Item",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Enter customer FirstName",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Enter customer LastName",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "Click on search button",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "User should found Name in the Search table",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Loginsteps.user_Launch_Chrome_browser()"
});
formatter.result({
  "duration": 1016922100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login",
      "offset": 16
    }
  ],
  "location": "Loginsteps.user_opens_URL(String)"
});
formatter.result({
  "duration": 1235302700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Loginsteps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 221038900,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.click_on_Login()"
});
formatter.result({
  "duration": 5869442700,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.user_can_view_Dashboard()"
});
formatter.result({
  "duration": 11981500,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.user_click_on_customer_Menu()"
});
formatter.result({
  "duration": 3080078100,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.click_on_customers_Menu_Item()"
});
formatter.result({
  "duration": 5976315600,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.enter_customer_FirstName()"
});
formatter.result({
  "duration": 148980600,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.enter_customer_LastName()"
});
formatter.result({
  "duration": 104818700,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.click_on_search_button()"
});
formatter.result({
  "duration": 3204014400,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.user_should_found_Name_in_the_Search_table()"
});
formatter.result({
  "duration": 55516600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//table[@id\u003d\u0027customers-grid\u0027]/body/tr[1]/td[3]\"}\n  (Session info: chrome\u003d97.0.4692.99)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-7RS9FQA9\u0027, ip: \u0027192.168.225.138\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.14\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 97.0.4692.99, chrome: {chromedriverVersion: 97.0.4692.71 (adefa7837d02a..., userDataDir: C:\\Users\\Shreyash\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:62032}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 8c8320b2174c803609f3760ddfa79564\n*** Element info: {Using\u003dxpath, value\u003d//table[@id\u003d\u0027customers-grid\u0027]/body/tr[1]/td[3]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.findElement(RemoteWebElement.java:179)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.findElementByXPath(RemoteWebElement.java:252)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.findElement(RemoteWebElement.java:175)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy18.findElement(Unknown Source)\r\n\tat com.PageObjects.SearchCustomerPage.searchCustomerByName(SearchCustomerPage.java:152)\r\n\tat com.stepdefs.Loginsteps.user_should_found_Name_in_the_Search_table(Loginsteps.java:179)\r\n\tat ✽.Then User should found Name in the Search table(src/main/java/com/features/customer.feature:45)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Loginsteps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});