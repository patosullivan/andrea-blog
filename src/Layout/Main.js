import About from "../Content/About"
import PropTypes from "prop-types"
import React from "react"
import { Card, CardBody } from "reactstrap"
import Contact from "../Content/Contact"
import Writing from "../Content/Writing/Writing"

const Main = props => {
  let pageContent = "About"
  switch (props.page) {
    case "About":
      pageContent = <About />
      break
    case "Contact":
      pageContent = <Contact />
      break
    case "Writing":
      pageContent = <Writing />
      break
    default:
      pageContent = <Writing />
      break
  }
  return (
    <main className="py-2">
      <Card>
        <CardBody>{pageContent}</CardBody>
      </Card>
    </main>
  )
}

Main.propTypes = {
  page: PropTypes.string
}

export default Main
