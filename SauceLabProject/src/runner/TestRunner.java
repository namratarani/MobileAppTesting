package runner;

import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@Cucumber.Options(features="BDD",
				  glue={"stepdef"},
				  format={"html:Reports/cucumber-html-report"})
public class TestRunner {

}
