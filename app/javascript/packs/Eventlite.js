import EventForm from './EventForm'

const Eventlite = props => (
  <div>
    <EventForm />
    <EveentsList events={props.events} />
    </div>
)