package example

import org.scalatest._
class HelloSpec extends FlatSpec with Matchers {
  "The Hello object" should "say hello" in {
    Hello.greeting shouldEqual "hello"
  }

  "1.10.a" should "work" in {
    import example.utils.StringUtils._
    val result = "HAL".increment
    result shouldEqual "IBM"

    "4".plusOne shouldBe 5
    "0".asBoolean shouldBe false
    "1".asBoolean shouldBe true
  }
}
