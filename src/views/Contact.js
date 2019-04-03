import React from "react"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ListGroup, ListGroupItem } from "reactstrap"

const Contact = () => (
  <ListGroup>
    <ListGroupItem>
      <a href="mailto:andrea@osullivan.io">
        <FontAwesomeIcon icon={faEnvelope} /> Email
      </a>
    </ListGroupItem>
    <ListGroupItem>
      <a href="https://twitter.com/anjiecast">
        <FontAwesomeIcon icon={faTwitter} /> @anjiecast
      </a>
    </ListGroupItem>
  </ListGroup>
)

export default Contact
