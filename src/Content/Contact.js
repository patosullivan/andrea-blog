import React from "react"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ListGroup, ListGroupItem } from "reactstrap"

const Contact = () => (
  <ListGroup>
    <ListGroupItem>
      <a href="mailto:andrea@osullivan.io">
        <FontAwesomeIcon icon={faEnvelope} /> Email
      </a>
    </ListGroupItem>
  </ListGroup>
)

export default Contact
