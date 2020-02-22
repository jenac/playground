import akka.actor.{ActorSystem, Props}

object Main extends App {
  val system = ActorSystem("PingPongSystem")
  val pong = system.actorOf(Props[Pong], name="pong")
  val ping = system.actorOf(Props(new Ping(pong)), name= "ping")

  ping ! Messages.StartMessage

  system.terminate()

}
