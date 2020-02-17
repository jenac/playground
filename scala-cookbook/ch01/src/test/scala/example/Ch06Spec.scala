package example

import org.scalatest.{FlatSpec, Matchers}

class Ch06Spec extends FlatSpec with Matchers {
  "6.03" should "use getClass" in {
    val hello = <p>Hello, World</p>
    hello.child.foreach(e => println(e.getClass))
  }
}
