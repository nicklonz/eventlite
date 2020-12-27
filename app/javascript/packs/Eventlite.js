import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import EventsList from './EventsList'

const Eventlite = props => (
  <div>
    <EventForm />
    <EventsList events={props.events} />
  </div>
)

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('events_data')
  const data = JSON.parse(node.getAttribute('data'))
  ReactDOM.render(
    <Eventlite events={data} />,
    document.body.appendChild(document.createElement('div')),
  )
})