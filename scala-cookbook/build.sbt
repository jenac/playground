import Dependencies._

ThisBuild / scalaVersion     := "2.13.1"
ThisBuild / version          := "0.1.0-SNAPSHOT"
ThisBuild / organization     := "com.example"
ThisBuild / organizationName := "example"

lazy val root = (project in file("ch01to12"))
  .settings(
    name := "ch01to12",
    libraryDependencies += scalaTest % Test
  )

lazy val ch1301 = (project in file("ch1301"))
  .settings(
    name := "ch1301",
    libraryDependencies += akka
  )
// See https://www.scala-sbt.org/1.x/docs/Using-Sonatype.html for instructions on how to publish to Sonatype.
