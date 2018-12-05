import ProptTypes from "prop-types"
import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import ReactMarkdown from "react-markdown"

const PostCard = props => (
  <Card className="my-2">
    <CardHeader>
      <CardTitle>{props.title}</CardTitle>
      <small>
        <em>{props.createdAt}</em>
      </small>
    </CardHeader>
    <CardBody>
      <ReactMarkdown source={props.content} />
    </CardBody>
  </Card>
)

PostCard.propTypes = {
  title: ProptTypes.string,
  content: ProptTypes.string,
  createdAt: ProptTypes.string
}

export default PostCard
