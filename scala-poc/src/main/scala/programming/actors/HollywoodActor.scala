package programming.actors

import  akka.actor._
class HollywoodActor extends  Actor {

  override def receive: Receive = {
    case message => println(s"$message - ${Thread.currentThread}")
  }
}
