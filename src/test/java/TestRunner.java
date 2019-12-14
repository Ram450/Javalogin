
import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@CucumberOptions(features = "src/test/java/login.feature",
format = {"pretty", "html:test-output"},
monochrome = true,
dryRun = false)
public class TestRunner extends AbstractTestNGCucumberTests {

}
