import About from "../Content/About"
import React from "react"
import { Card, CardBody } from "reactstrap"
import Contact from "../Content/Contact"
import Writing from "../Content/Writing/Writing"
import { Switch, Route } from "react-router-dom"

const Main = () => {
  return (
    <main className="py-0">
      <Card className="border-top-0 rounded-0">
        <CardBody>
          <Switch>
            <Route exact={true} path="/" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/writing" component={Writing} />
          </Switch>
        </CardBody>
      </Card>
    </main>
  )
}

export default Main
