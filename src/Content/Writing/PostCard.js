import ProptTypes from "prop-types"
import React from "react"
import {Card, CardHeader, CardTitle, CardBody, CardFooter} from "reactstrap"

const PostCard = props => (
  <Card>
    <CardHeader>
      <CardTitle>{props.title}</CardTitle>
    </CardHeader>
    <CardBody>
      <p style={{fontFamily: "'Montserrat', sans-serif"}}>{props.body}</p>
    </CardBody>
    <CardFooter>{props.date}</CardFooter>
  </Card>
)

PostCard.propTypes = {
  title: ProptTypes.string,
  body: ProptTypes.string,
  date: ProptTypes.string
}

export default PostCard
