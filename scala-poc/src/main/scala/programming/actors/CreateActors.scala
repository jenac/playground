package programming.actors

import akka.actor._
import scala.concurrent.Await
import scala.concurrent.duration.Duration


object CreateActors extends  App {
  val system = ActorSystem("sample")

  val depp = system.actorOf(Props[HollywoodActor])
  val hanks = system.actorOf(Props[HollywoodActor])

  depp ! "Wonka"
  hanks ! "Gump"

  Thread.sleep(1000)

  depp ! "Sparrow"
  hanks ! "Phillips"
  println(s"Calling from ${Thread.currentThread}")

  val terminateFuture = system.terminate()
  Await.ready(terminateFuture, Duration.Inf)
}
