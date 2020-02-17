package example

import org.scalatest.{FlatSpec, Matchers}

import scala.collection.mutable.ListBuffer

class Ch11Spec extends FlatSpec with Matchers {
  "11.01" should "create List" in {
    val a = 1 :: 2 :: 3 :: Nil
    a shouldBe List(1, 2, 3)

    val b = List(1, 2, 3)
    b shouldBe List(1, 2, 3)

    val c = List(1.0, 2.0, 33D, 4000.0)
    c shouldBe List(1.0, 2.0, 33D, 4000.0)

    val x = List.range(1, 10)
    x shouldBe List(1, 2, 3, 4, 5, 6, 7, 8, 9)

    val d = List.fill(3)("how")
    d shouldBe List("how", "how", "how")

    val e = List.tabulate(5)(n => n * n)
    e shouldBe List(0, 1, 4, 9, 16)

    val f = collection.mutable.ListBuffer(1, 2, 3).toList
    f shouldBe List(1, 2, 3)

    val g = "too".toList
    g shouldBe List('f', 'o', 'o')
  }

  "11.02" should "create mutable List" in {
    val fruits = new ListBuffer[String]()
    fruits += "Apple"
    fruits += "Orange"
    fruits += "Banana"
    fruits += ("StrawBerry", "Kiwi", "Pineapple")

    fruits -= "Orange"
    fruits -= ("Apple", "Pineapple")

    val list = fruits.toList
    list shouldBe List("Banana", "StrawBerry", "Kiwi")
  }

  "11.03" should "add element to list from head" in {
    val x = List(2)
    val y = 1 :: x
    y shouldBe List(1, 2)

    //will the following slow?
    val z = 0 +: y
    z shouldBe List(0, 1, 2)

    val u = x :+ 2
    u shouldBe List(2, 2)
  }

  "11.04" should "delete from List/ListBuffer" in {
    val org = List(5, 1, 4, 3, 2)
    val a = org.filter(_ > 2)
    a shouldBe List(5, 4, 3)

    //if need frequent change use ListBuffer
    val x = ListBuffer(1, 2, 3, 4, 5, 6, 7, 8, 9)
    x -= 5
    x -= (2, 3)
    x shouldBe List(1, 4, 6, 7, 8, 9)

    val e = x.remove(0)
    e shouldBe 1
    x shouldBe List(4, 6, 7, 8, 9)

    x.remove(1, 3)
    x shouldBe ListBuffer(4, 9)

    val xx = ListBuffer(1, 2, 3, 4, 5, 6)
    xx --= Seq(2, 3, 4)
    xx.toList shouldBe List(1, 5, 6)
  }

  "11.05" should "merge list" in {
    val a = List(1, 2, 3)
    val b = List(4, 5, 6)

    val c = a ::: b
    c shouldBe List(1, 2, 3, 4, 5, 6)

    val d = a ++ b
    d shouldBe List(1, 2, 3, 4, 5, 6)

    val e = List.concat(a, b)
    e shouldBe List(1, 2, 3, 4, 5, 6)
  }
}
