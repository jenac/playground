package example


object Main extends App {

  def isA(value: String): Option[String] = value match {
    case "A" => None
    case "a" => None
    case _ => Some("Error A")
  }

  def isB(value: String): Option[String] = value match {
    case "B" => None
    case "b" => None
    case _ => Some("Error B")
  }

  def allTogether(a: String, b: String) = for {
    x <- isA(a)
    y <- isB(b)
  } yield (x, y)

  val p = allTogether("a", "b")
  println(s"${isA("a")}")
  val ages = Seq(42, 75, 29, 64)
  println(s"The max age is ${ages.max}")
}
