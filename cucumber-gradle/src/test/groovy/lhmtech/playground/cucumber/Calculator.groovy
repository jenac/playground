package lhmtech.playground.cucumber

/**
 * Created by lihe on 3/12/17.
 */
class Calculator {
    String expression
    GroovyShell shell = new GroovyShell()
    String run() {
        shell.evaluate(expression)
    }
}
