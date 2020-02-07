package example

import org.scalatest._

import scala.util.control.Breaks

class Ch03Spec extends FlatSpec with Matchers {
  it should "3.01" in {
    val a = Array("apple", "banana", "orange")
    for (e <- a) {
      println(e.toUpperCase)
    }

    val newArray = for (e <- a) yield e.toUpperCase
    newArray(0) shouldBe "APPLE"
    newArray(1) shouldBe "BANANA"
    newArray(2) shouldBe "ORANGE"

    for (i <- 0 until a.length) {
      a(i).toUpperCase shouldBe newArray(i)
    }

    for ((e, index) <- a.zipWithIndex) {
      println(s"$index is $e")
    }

    for (i <- 1 to 10 if i < 4) println(i)

    val names = Map("fname" -> "Robert", "lname" -> "Mike")
    for ((k, v) <- names) println(s"key: $k, value: $v")

    a.foreach(println)
  }

  it should "3.02" in {
    for (i <- 1 to 2; j <- 1 to 2) println(s"i=$i, j=$j")
    println("----------------------------------------")
    for {
      i <- 1 to 3
      j <- 1 to 2
      k <- 1 to 5
    } println(s"i=$i, j=$j, k=$k")
  }

  it should "3.03" in {
    for (i <- 1 to 10 if i % 2 == 0) println(i)
    for {
      i <- 1 to 10
      if i > 3
      if i < 6
      if i % 2 == 0
    } println(i)
  }

  it should "3.04" in {
    val names = Array("chris", "jenac", "tony")
    val capNames = for (e <- names) yield e.capitalize
    capNames.contains("Chris") shouldBe true
    capNames.contains("Jenac") shouldBe true
    capNames.contains("Tony") shouldBe true

    val lengths = for (e <- names) yield e.length
    lengths.foreach(println)
  }

  it should "3.05" in {
    import util.control.Breaks._
    var count = 0
    breakable {
      for (i <- 1 to 10) {
        count += 1
        if (i > 4) break
      }
    }
    count shouldBe 5

    val searchMe = "peter piper picked a peck of pickled peppers"
    var numPs = 0
    for (i <- 0 until searchMe.length) {
      breakable {
        if (searchMe.charAt(i) != 'p') {
          break //only breaks out breakable, still in loop, it simulates continue
        } else {
          numPs += 1
        }
      }
    }
    numPs shouldBe 9
    searchMe.count(_ == 'p') shouldBe 9

    println("----------nested break----------")
    val Inner = new Breaks
    val Outer = new Breaks
    Outer.breakable {
      for (i <- 1 to 5) {
        Inner.breakable {
          for (j <- 'a' to 'e') {
            if (i == 1 && j == 'c') Inner.break else println(s"i: $i, j: $j")
            if (i == 2 && j == 'b') Outer.break
          }
        }
      }
    }

  }

  it should "factorial" in {
    import scala.annotation.tailrec

    def factorial(n: Int): Int = {
      @tailrec def factorialAcc(acc: Int, n: Int): Int = {
        if (n <= 1) acc
        else factorialAcc(n * acc, n - 1)
      }

      factorialAcc(1, n)
    }

    factorial(3) shouldBe 6
    factorial(4) shouldBe 24
    factorial(5) shouldBe 120
  }

  it should "3.07 using match" in {
    def toMonth(i: Int) = i match {
      case 1 => "JAN"
      case 2 => "FEB"
      case 3 => "MAR"
      case 4 => "APR"
      case 5 => "MAY"
      case 6 => "JUN"
      case 7 => "JUL"
      case 8 => "AUG"
      case 9 => "SEP"
      case 10 => "OCT"
      case 11 => "NOV"
      case 12 => "DEC"
      case _ => "Invalid Month"
    }

    toMonth(1) shouldBe "JAN"
    toMonth(8) shouldBe "AUG"
    toMonth(16) shouldBe "Invalid Month"

    //map is better
    val monthNumberMap = Map(
      1 -> "JAN",
      2 -> "FEB",
      3 -> "MAR",
      4 -> "APR",
      5 -> "MAY",
      6 -> "JUN",
      7 -> "JUL",
      8 -> "AUG",
      9 -> "SEP",
      10 -> "OCT",
      11 -> "NOV",
      12 -> "DEC"
    )

    monthNumberMap(2) shouldBe "FEB"
    //    monthNumberMap(128) shouldBe "FEB" //throw exception
    monthNumberMap.get(128) shouldBe None
  }

  it should "3.08 multi case" in {
    def matchOddEven(i: Int) = i match {
      case 1 | 3 | 5 | 7 | 9 => "odd"
      case 2 | 4 | 6 | 8 | 10 => "even"
      case _ => "invalid"
    }
    matchOddEven(2) shouldBe "even"
  }

  it should "3.09 multi case return a value" in {
    def isTrue(a: Any) = a match {
      case 0 | "" => false
      case _ => true
    }

    isTrue(0) shouldBe false
    isTrue("xxx") shouldBe true
  }

  it should "3.10 default case can be _ or any variable name" in {
    def defaultCase(i: Int) = i match  {
      case 1 => "One"
      case 2 => "Two"
      case anyValue => s"Unknown $anyValue"
    }

    defaultCase(1) shouldBe "One"
    defaultCase(128) shouldBe "Unknown 128"


  }
}
