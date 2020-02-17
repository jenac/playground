package example

import org.scalatest.{FlatSpec, Matchers}

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
}
