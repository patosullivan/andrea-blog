import Home from "./Content/Home"
import PropTypes from "prop-types"
import React from "react"
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap"

const Main = props => {
  let pageContent = "Home"
  switch (props.page) {
    case "Home":
      pageContent = <Home />
      break

    default:
      pageContent = <Home />
      break
  }
  return (
    <main className="py-2">
      <Card>
        <CardHeader>
          <CardTitle>{props.page}</CardTitle>
        </CardHeader>
        <CardBody>{pageContent}</CardBody>
      </Card>
    </main>
  )
}

Main.propTypes = {
  page: PropTypes.string
}

export default Main
