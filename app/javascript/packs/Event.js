import React from 'react'

const Event = props => (
  <div className="event">
    <h2 className="event-title">{props.event.title}</h2>
    <div className="event-datetime">{formatDate(props.event.start_dattime)}</div>
    <div className="event-location">{props.event.location}</div>
  </div>
)

export default Event