importReactfrom'react'
classEventFormextendsReact.Component{ render () {
return ( <div>
        <h4>Create an Event:</h4>
        <form>
          <input type="text" name="title" placeholder="Title" />
          <input type="text" name="start_datetime" placeholder="Date" />
          <input type="text" name="location" placeholder="Location" />
          <button type="submit">Create Event</button>
        </form>
      </div>
) }
} exportdefaultEventForm