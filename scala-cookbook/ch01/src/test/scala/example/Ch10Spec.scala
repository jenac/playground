package example

import org.scalatest.{FlatSpec, Matchers}


class Ch10Spec extends FlatSpec with Matchers {
  "10.11" should "zipWithInex and zip" in {
    val days = Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat")
    val zipped = days.zipWithIndex
    zipped shouldBe Array(("Sun", 0), ("Mon", 1), ("Tue", 2), ("Wed", 3), ("Thu", 4), ("Fri", 5), ("Sat", 6))

    val lower = Array("a", "b", "c")
    val upper = Array("A", "B", "C")
    val lu = lower.zip(upper)
    lu shouldBe Array(("a", "A"), ("b", "B"), ("c", "C"))
  }

  "10.15" should "flatten" in {
    val lol = List(List(1, 2), List(3, 4, 5))
    val fl = lol.flatten
    fl shouldBe List(1, 2, 3, 4, 5)

    val loa = List(Array(1, 2), Array(3, 4))
    val fla = loa.flatten
    fla shouldBe List(1, 2, 3, 4)
  }

  "10.16" should "flatmap" in {
    val bags = List("1", "2", "three", "4", "too much")

    def toInt(in: String): Option[Int] = {
      try {
        Some(Integer.parseInt((in.trim)))
      } catch {
        case e: Exception => None
      }
    }

    val sum = bags.flatMap(toInt).sum
    sum shouldBe 7

    //flatMap remove Nones
    val fm = bags.flatMap(toInt)
    fm shouldBe List(1, 2, 4)
  }

  "10.17" should "filter" in {
    val list = "apple" :: "banana" :: 1 :: 2 :: Nil
    val strings = list.filter {
      case s: String => true
      case _ => false
    }
    strings shouldBe List("apple", "banana")
  }

  "10.18" should "pick elements methods" in {
    val x = (1 to 10).toArray

    val y = x.drop(3)
    y shouldBe Array(4, 5, 6, 7, 8, 9, 10)

    val z = x.dropWhile(_ < 6)
    z shouldBe Array(6, 7, 8, 9, 10)

    val a = x.dropRight(4)
    a shouldBe Array(1, 2, 3, 4, 5, 6)

    val b = x.take(3)
    b shouldBe Array(1, 2, 3)

    val c = x.takeWhile(_ < 5)
    c shouldBe Array(1, 2, 3, 4)

    val d = x.takeRight(3)
    d shouldBe Array(8, 9, 10)

    //slice(from, until) until not included
    val peeps = List("John", "Mary", "Jane", "Fred")
    peeps.slice(1, 3) shouldBe List("Mary", "Jane")

    val nums = Array(1, 2, 3, 4, 5)
    nums.head shouldBe 1
    nums.headOption shouldBe Some(1)
    nums.init shouldBe Array(1, 2, 3, 4)
    nums.last shouldBe 5
    nums.lastOption shouldBe Some(5)
    nums.tail shouldBe Array(2, 3, 4, 5)
  }


  "10.19" should "groupby, partition" in {
    val x = List(15, 10, 5, 8, 20, 12)

    val g = x.groupBy(_ > 10)
    g shouldBe Map(false -> List(10, 5, 8), true -> List(15, 20, 12))
    g(true) shouldBe List(15, 20, 12)

    val p = x.partition(_ > 10)
    p shouldBe(List(15, 20, 12), List(10, 5, 8))

    val s = x.span(_ < 20) //span: for collection t and function f, return ( t takeWhile f, t dropWhile f)
    s shouldBe(List(15, 10, 5, 8), List(20, 12))

    val sp = x.splitAt(2)
    sp shouldBe(List(15, 10), List(5, 8, 20, 12))

    val nums = (1 to 5).toList
    nums shouldBe List(1, 2, 3, 4, 5)

    val s1 = nums.sliding(2).toList
    s1 shouldBe List(List(1, 2), List(2, 3), List(3, 4), List(4, 5))

    val s2 = nums.sliding(3).toList
    s2 shouldBe List(List(1, 2, 3), List(2, 3, 4), List(3, 4, 5))

    //step = 2
    val s3 = nums.sliding(2, 2).toList
    s3 shouldBe List(List(1, 2), List(3, 4), List(5))

    //step = 3
    val s4 = nums.sliding(2, 3).toList
    s4 shouldBe List(List(1, 2), List(4, 5))
  }

  "10.19" should "mutable/immutable collections" in {
    List(1, 2) shouldBe List(1, 2)
    List(List(1, 2)) shouldBe List(List(1, 2))
    Array(1, 2) shouldBe Array(1, 2)
    //since array is mutable, the following will be List(somePointer) vs List(otherPointer)
    List(Array(1, 2)) == List(Array(1, 2)) shouldBe false
  }

  "10.19" should "zip/unzip" in {
    val num = List(1, 2)
    val eng = List("One", "Two")

    val z = num zip eng
    z shouldBe List((1, "One"), (2, "Two"))

    val uz = z.unzip
    uz shouldBe (List(1, 2),List("One", "Two"))
  }
}
