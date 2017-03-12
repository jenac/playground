package lhmtech.playground.cucumber

import cucumber.api.CucumberOptions
import cucumber.api.junit.Cucumber
import org.junit.runner.RunWith

@RunWith(Cucumber)
@CucumberOptions(
        format=["pretty", "html:build/reports/cucumber"],
        strict=true,
        features=["src/test/groovy/lhmtech/playground/cucumber/features"],
        glue=["src/test/groovy/lhmtech/playground/cucumber/steps"]
)
public class RunCukesTest { }

