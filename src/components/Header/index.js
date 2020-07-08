import React from "react"
import Navigation from "../Navigation"

export default function Header({ title }) {
  return (
    <>
      <Navigation />
      <h1>{title}</h1>
    </>
  )
}
