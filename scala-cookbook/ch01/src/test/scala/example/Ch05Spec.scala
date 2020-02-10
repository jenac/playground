package example

import org.scalatest.{FlatSpec, Matchers}

class Ch05Spec extends FlatSpec with Matchers {
  "5.02" should "call base class method" in {
    trait Human {
      def hello = "Human"
    }

    trait Mother extends Human {
      override def hello: String = "Mother"
    }

    trait Father extends Human {
      override def hello: String = "Father"
    }

    class Child extends Human with Mother with Father {
      def helloSuper = super.hello
      def helloMonther = super[Mother].hello
      def helloFather = super[Father].hello
      def helloHuman = super[Human].hello
    }

    val c = new Child
    c.helloSuper shouldBe "Father" //the last with
    c.helloMonther shouldBe "Mother"
    c.helloFather shouldBe "Father"
    c.helloHuman shouldBe "Human"

    class Child2 extends Mother {
      //the following won't compile
      //Child2 does not directly extens Human
      //compile error: Human does not name a parent class of class Child2

      //def helloHuman = super[Human].hello
    }

  }
}
