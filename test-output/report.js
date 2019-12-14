$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality",
  "description": "",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Verifying login functionality with valid details",
  "description": "",
  "id": "login-functionality;verifying-login-functionality-with-valid-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "Open the sample login appliction in chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "title of the main page is \"Servlet Application Login\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "enter username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "verify the title of the page after login \"Congratulations! Test, You are an authorised login!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSteps.open_the_sample_login_appliction_in_chrome_browser()"
});
formatter.result({
  "duration": 59210533200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Servlet Application Login",
      "offset": 27
    }
  ],
  "location": "TestSteps.title_of_the_main_page_is(String)"
});
formatter.result({
  "duration": 29160227500,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d79.0.3945.79)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 14.04 seconds\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027Raghu\u0027, ip: \u0027192.168.100.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:49968}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a), userDataDir\u003dC:\\Users\\hp\\AppData\\Local\\Temp\\scoped_dir6264_1512}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d79.0.3945.79, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: e30226f4d1ce93c79eaa501aaf004614\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:320)\r\n\tat TestSteps.title_of_the_main_page_is(TestSteps.java:32)\r\n\tat ✽.When title of the main page is \"Servlet Application Login\"(src/test/java/login.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "TestSteps.enter_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestSteps.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Congratulations! Test, You are an authorised login!",
      "offset": 42
    }
  ],
  "location": "TestSteps.verify_the_title_of_the_page_after_login(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4454108000,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verifying login functionality with valid username and password parameterized details",
  "description": "",
  "id": "login-functionality;verifying-login-functionality-with-valid-username-and-password-parameterized-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "Open the sample login appliction in chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "title of the main page is \"Servlet Application Login\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "enter username as \"test\" and password as \"test@1233\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "verify the title of the page after login \"Congratulations! Test, You are an authorised login!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSteps.open_the_sample_login_appliction_in_chrome_browser()"
});
formatter.result({
  "duration": 14178898000,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d79.0.3945.79)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 3.17 seconds\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027Raghu\u0027, ip: \u0027192.168.100.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:50093}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a), userDataDir\u003dC:\\Users\\hp\\AppData\\Local\\Temp\\scoped_dir2704_21135}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d79.0.3945.79, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: a81f880a13a66aa89a944aebd6474c94\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:316)\r\n\tat TestSteps.open_the_sample_login_appliction_in_chrome_browser(TestSteps.java:21)\r\n\tat ✽.Given Open the sample login appliction in chrome browser(src/test/java/login.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Servlet Application Login",
      "offset": 27
    }
  ],
  "location": "TestSteps.title_of_the_main_page_is(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 19
    },
    {
      "val": "test@1233",
      "offset": 42
    }
  ],
  "location": "TestSteps.enter_username_as_and_password_as(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestSteps.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Congratulations! Test, You are an authorised login!",
      "offset": 42
    }
  ],
  "location": "TestSteps.verify_the_title_of_the_page_after_login(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3311696300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Verifying login functionality with valid username and password parameterized and with scenario outline details",
  "description": "",
  "id": "login-functionality;verifying-login-functionality-with-valid-username-and-password-parameterized-and-with-scenario-outline-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "Open the sample login appliction in chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "title of the main page is \"Servlet Application Login\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "enter username as \"\u003cusername\u003e\" and password as \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "verify the title of the page after login \"Congratulations! Test, You are an authorised login!\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "login-functionality;verifying-login-functionality-with-valid-username-and-password-parameterized-and-with-scenario-outline-details;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 25,
      "id": "login-functionality;verifying-login-functionality-with-valid-username-and-password-parameterized-and-with-scenario-outline-details;;1"
    },
    {
      "cells": [
        "test",
        "test@123"
      ],
      "line": 26,
      "id": "login-functionality;verifying-login-functionality-with-valid-username-and-password-parameterized-and-with-scenario-outline-details;;2"
    },
    {
      "cells": [
        "test1",
        "test@123"
      ],
      "line": 27,
      "id": "login-functionality;verifying-login-functionality-with-valid-username-and-password-parameterized-and-with-scenario-outline-details;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "Verifying login functionality with valid username and password parameterized and with scenario outline details",
  "description": "",
  "id": "login-functionality;verifying-login-functionality-with-valid-username-and-password-parameterized-and-with-scenario-outline-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "Open the sample login appliction in chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "title of the main page is \"Servlet Application Login\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "enter username as \"test\" and password as \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "verify the title of the page after login \"Congratulations! Test, You are an authorised login!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSteps.open_the_sample_login_appliction_in_chrome_browser()"
});
formatter.result({
  "duration": 16702869300,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom chrome not reachable\n  (Session info: chrome\u003d79.0.3945.79)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 15.59 seconds\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027Raghu\u0027, ip: \u0027192.168.100.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:249)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:144)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:170)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:159)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:116)\r\n\tat TestSteps.open_the_sample_login_appliction_in_chrome_browser(TestSteps.java:20)\r\n\tat ✽.Given Open the sample login appliction in chrome browser(src/test/java/login.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Servlet Application Login",
      "offset": 27
    }
  ],
  "location": "TestSteps.title_of_the_main_page_is(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 19
    },
    {
      "val": "test@123",
      "offset": 42
    }
  ],
  "location": "TestSteps.enter_username_as_and_password_as(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestSteps.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Congratulations! Test, You are an authorised login!",
      "offset": 42
    }
  ],
  "location": "TestSteps.verify_the_title_of_the_page_after_login(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 412700,
  "error_message": "java.lang.NullPointerException\r\n\tat TestSteps.closeBrowser(TestSteps.java:75)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:205)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:77)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeMulti(TestNGDirectoryTestSuite.java:159)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:106)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 27,
  "name": "Verifying login functionality with valid username and password parameterized and with scenario outline details",
  "description": "",
  "id": "login-functionality;verifying-login-functionality-with-valid-username-and-password-parameterized-and-with-scenario-outline-details;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "Open the sample login appliction in chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "title of the main page is \"Servlet Application Login\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "enter username as \"test1\" and password as \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "verify the title of the page after login \"Congratulations! Test, You are an authorised login!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSteps.open_the_sample_login_appliction_in_chrome_browser()"
});
formatter.result({
  "duration": 13508512100,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d79.0.3945.79)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 6.03 seconds\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027Raghu\u0027, ip: \u0027192.168.100.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:50136}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a), userDataDir\u003dC:\\Users\\hp\\AppData\\Local\\Temp\\scoped_dir10872_11492}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d79.0.3945.79, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 21e9dab597ffb939d1026fdfead63ec6\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:316)\r\n\tat TestSteps.open_the_sample_login_appliction_in_chrome_browser(TestSteps.java:21)\r\n\tat ✽.Given Open the sample login appliction in chrome browser(src/test/java/login.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Servlet Application Login",
      "offset": 27
    }
  ],
  "location": "TestSteps.title_of_the_main_page_is(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test1",
      "offset": 19
    },
    {
      "val": "test@123",
      "offset": 43
    }
  ],
  "location": "TestSteps.enter_username_as_and_password_as(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestSteps.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Congratulations! Test, You are an authorised login!",
      "offset": 42
    }
  ],
  "location": "TestSteps.verify_the_title_of_the_page_after_login(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1338183700,
  "status": "passed"
});
});