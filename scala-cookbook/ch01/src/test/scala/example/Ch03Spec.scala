package example

import org.scalatest._

class Ch03Spec extends FlatSpec with Matchers {
  it should "3.01" in {
    val a = Array("apple", "banana", "orange")
    for ( e <- a ) {
      println(e.toUpperCase)
    }

    val newArray = for ( e <- a ) yield e.toUpperCase
    newArray(0) shouldBe "APPLE"
    newArray(1) shouldBe "BANANA"
    newArray(2) shouldBe "ORANGE"

    for(i <-0 until a.length) {
      a(i).toUpperCase shouldBe newArray(i)
    }

    for ((e, index) <- a.zipWithIndex) {
      println(s"$index is $e")
    }

    for ( i <- 1 to 10 if i < 4 ) println(i)

    val names = Map("fname" -> "Robert", "lname" -> "Mike")
    for ((k,v) <- names) println(s"key: $k, value: $v")

    a.foreach(println)
  }

  it should "3.02" in {
    for(i <- 1 to 2; j <- 1 to 2) println(s"i=$i, j=$j")
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
      if i %2 == 0
    } println(i)
  }

  it should "3.04" in {
    val names = Array("chris", "jenac", "tony")
    val capNames = for (e <- names) yield e.capitalize
    capNames.contains("Chris") shouldBe true
    capNames.contains("Jenac") shouldBe true
    capNames.contains("Tony") shouldBe true

    val lengths = for(e <- names) yield e.length
    lengths.foreach(println)
  }


}
