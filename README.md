# MobileAppTesting

Before this assignment I had no experience with Appium, Eclipse and Saucelabs. That's why it took me some time but I think it was worthy learning experience.
For the Android app I first started with writing BDD scenarios in Cucumber. It is easy to write test if the scenarios are defined correctly.
Once I have my scenarios in place I created the testrunner class where I specified where my feature file is. I also created the stepdefinition file and defined its location in testrunner class and specified the path where the reports to be generated. The biggest challange for me was to get the app working correctly on my phone. But google helped me a lot.
For execution I had the appium server running locally and ran the tests as junit tests.

For the Saucelabs part I followed the same approach and created testscenarios using Cucumber and created testrunner and stepdefinition class. Here in the stepdefinition class  I first created a Saucelabs account and defined its parameters in my stepdefinition class. Here the challange was to upload the TestApp zip file and connect to Saucelabs. After some struggling it worked out for me. After that I ran the tests from eclipse and I could see the test runnign in Saucelabs.

In this Github repository you will find two eclipse projects one for Saucelabs implementation and one with running Android app on mobile phone.I am also uploading the recordings of my Saucelabs tests.