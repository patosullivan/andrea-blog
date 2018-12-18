import React from "react"
import { Jumbotron } from "reactstrap"

const jumboStyle = {
  backgroundImage: "url(./triangles.jpg)",
  backgroundAttachment: "fixed",
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  fontFamily: "'Merriweather', serif"
}

const Banner = () => (
  <Jumbotron className="my-2 text-center text-black rounded-0" css={jumboStyle}>
    <h1 className="display-4">{"Andrea O'Sullivan"}</h1>
    <p className="lead" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      Technology and Public Policy
    </p>
  </Jumbotron>
)

export default Banner
