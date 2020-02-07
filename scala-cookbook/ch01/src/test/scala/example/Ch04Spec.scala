package example

import org.scalatest.{FlatSpec, Matchers}

class Ch04Spec extends FlatSpec with Matchers {
  "4.03" should "additional constructors" in {
    class Pizza(var crustSize: Int, var crustType: String) {
      def this(crustSize: Int) {
        this(crustSize, Pizza.DEFAULT_CRUST_TYPE)
      }

      def this(crustType: String) {
        this(Pizza.DEFAULT_CRUST_SIZE, crustType)
      }

      def this() {
        this(Pizza.DEFAULT_CRUST_SIZE, Pizza.DEFAULT_CRUST_TYPE)
      }
    }

    object Pizza {
      val DEFAULT_CRUST_TYPE = "Thin"
      val DEFAULT_CRUST_SIZE = 12
    }

    val p1  = new Pizza()
    val p2  = new Pizza(Pizza.DEFAULT_CRUST_TYPE)
    val p3  = new Pizza(Pizza.DEFAULT_CRUST_SIZE)
    val p4  = new Pizza(Pizza.DEFAULT_CRUST_SIZE, Pizza.DEFAULT_CRUST_TYPE)

    p1.crustSize == p2.crustSize && p1.crustType == p2.crustType shouldBe true
  }

  "4.03" should "use apply to simulate additional constructor for case class" in {
    case class Person(name: String, age: Int)
    object  Person {

      def apply(age: Int): Person = new Person("Someone", age)
      def apply(name: String): Person = new Person(name, 1)
    }

    Person("Someone", 12) == Person(12) shouldBe true
    Person("baby", 1) == Person("baby") shouldBe true
  }

  "4.04" should "private primary constructor for singleton" in {
    class SomeHelper private {
      def hello = "I am Helper"
    }
    object SomeHelper {
      def getInstance = new SomeHelper()
    }
    SomeHelper.getInstance.hello shouldBe "I am Helper"

    //with arg
    class SomeService private(serviceName: String) {
      def hello = s"I am $serviceName service"
    }
    object SomeService {
      def getInstance(name: String) = new SomeService(name)
    }
    SomeService.getInstance("whois").hello shouldBe "I am whois service"

  }
}
