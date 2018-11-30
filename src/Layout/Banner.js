import React from "react"
import { Jumbotron } from "reactstrap"

const jumboStyle = {
  backgroundImage: "url(./angularBuilding.jpg)",
  backgroundAttachment: "fixed",
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
}

const Banner = () => (
  <Jumbotron className="my-2 text-center text-white" style={jumboStyle}>
    <h1 className="display-4 text-console">{"Andrea O'Sullivan"}</h1>
    <p className="lead text-monospace">Technology and Public Policy</p>
  </Jumbotron>
)

export default Banner
