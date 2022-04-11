package runner;

import io.cucumber.testng.CucumberOptions;
import io.cucumber.testng.AbstractTestNGCucumberTests;
import org.testng.annotations.Test;

//@RunWith(Cucumber.class)
@CucumberOptions(features={"src//test//java//features"}
        ,glue={"steps","setups"}
        ,plugin = {"pretty", "html:target/cucumber"}
        ,tags = "@appium"
)
@Test
public class TestRunner extends AbstractTestNGCucumberTests {
}
