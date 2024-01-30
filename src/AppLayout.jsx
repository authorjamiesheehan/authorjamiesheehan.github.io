import './AppLayout.css'

import { A } from "@solidjs/router";

export default function App(props) {

  return (
    <>
      <nav>
        <A href="/">Home</A>
        <A href="/about">About</A>
      </nav>
      {props.children}
    </>
  )
}
