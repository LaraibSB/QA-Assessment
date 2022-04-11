package steps;

import io.appium.java_client.android.AndroidDriver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import setups.Hook;

public class AppiumScenario {

    private AndroidDriver driver;

    public AppiumScenario(){
        this.driver = Hook.getDriver();
    }

    @Given("^I open the application$")
    public void i_open_the_application() throws Throwable {
        Assert.assertTrue(driver.findElement(By.xpath("//*[@text='Accessibility']")).isDisplayed());
    }

    @When("^I tap on Accessibility$")
    public void i_tap_on_Accessibility() throws Throwable {
        driver.findElement(By.xpath("//*[@text='Accessibility']")).click();
    }

    @Then("^I validate Custom View$")
    public void i_validate_Custom_View() throws Throwable {
        Assert.assertTrue("Custom View is not displayed",driver.findElement(By.xpath("//*[@text='Custom View']")).isDisplayed());
    }
}
