package example

import org.scalatest.{FlatSpec, Matchers}

class Ch05Spec extends FlatSpec with Matchers {
  //Accessibility
  //private [this] // access by current instance
  //private //access by class
  //protected //access by class and sub classes
  //private[example] access by package example classes

}
