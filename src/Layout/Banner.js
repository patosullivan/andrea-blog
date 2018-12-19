import React from "react"
import { Jumbotron } from "reactstrap"
import { css } from "@emotion/core"

const jumboStyle = css`
  background-image: url(./triangles.jpg);
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
`

const nameStyle = css`
  @media (max-width: 375px) {
    font-size: 3rem;
    font-weight: 300;
    line-height: 1.2;
  }
  font-family: "Merriweather", serif;
`

const summaryStyle = css`
  @media (max-width: 320px) {
    font-size: 1rem;
  }
`

const Banner = () => (
  <Jumbotron className="my-2 text-center text-black rounded-0" css={jumboStyle}>
    <h1 css={nameStyle} className="display-4">
      {"Andrea O'Sullivan"}
    </h1>
    <p css={summaryStyle} className="lead">
      Technology and Public Policy
    </p>
  </Jumbotron>
)

export default Banner
