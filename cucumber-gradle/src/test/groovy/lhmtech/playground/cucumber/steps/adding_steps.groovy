package lhmtech.playground.cucumber.steps

import cucumber.api.PendingException
import lhmtech.playground.cucumber.Calculator

/**
 * Created by lihe on 3/12/17.
 */

this.metaClass.mixin(cucumber.api.groovy.Hooks)
this.metaClass.mixin(cucumber.api.groovy.EN)

Given(~/^the input "([^"]*)"$/) { String input ->
    // Write code here that turns the phrase above into concrete actions
    calculator = new Calculator(expression: input)
}

When(~/^the calculator is run$/) { ->
    // Write code here that turns the phrase above into concrete actions
    output = calculator.run()
}
Then(~/^the output should be "([^"]*)"$/) { String expected ->
    // Write code here that turns the phrase above into concrete actions
    assert (expected == output)
}