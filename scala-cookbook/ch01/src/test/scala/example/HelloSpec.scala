package example

import org.scalatest._

import scala.util.Random
class HelloSpec extends FlatSpec with Matchers {
  "The Hello object" should "say hello" in {
    Hello.greeting shouldEqual "hello"
  }

  it should "1.10" in {
    import example.utils.StringUtils._
    val result = "HAL".increment
    result shouldEqual "IBM"

    "4".plusOne shouldBe 5
    "0".asBoolean shouldBe false
    "1".asBoolean shouldBe true
  }

  it should "2.01" in {
    "100".toInt shouldBe 100
    "100".toDouble shouldBe 100.0
    "100".toFloat shouldBe 100.0
    "1".toLong shouldBe 1
    "1".toShort shouldBe 1
    "1".toByte shouldBe 1

    Integer.parseInt("1", 2) shouldBe 1
    Integer.parseInt("10", 2) shouldBe 2
    Integer.parseInt("100", 2) shouldBe 4
    Integer.parseInt("1", 8) shouldBe 1
    Integer.parseInt("10", 8) shouldBe 8
    Integer.parseInt("11", 8) shouldBe 9

    import example.utils.ValueUtils._
    "1".toInt(2) shouldBe 1
    "10".toInt(2) shouldBe 2
    "100".toInt(2) shouldBe 4
    "100".toInt(8) shouldBe 64
    "100".toInt(16) shouldBe 256
  }

  it should "2.06" in {
    val b = BigInt(1234567890)
    (b * b).toString shouldBe "1524157875019052100"
    (b + b).toString shouldBe "2469135780"
    b.isValidByte shouldBe false
    b.isValidChar shouldBe false
    val c = if (b.isValidShort) b.toShort else None
    c shouldBe None
    val d = if (b.isValidInt) b.toInt else None
    d shouldBe 1234567890 //not Some(1234567890) ?
  }

  it should "2.07" in {
    val r = Random
    r.nextInt()
    r.nextDouble

    r.nextInt(100) < 100 shouldBe true
    r.nextInt(100) > 0 shouldBe true
  }


}
