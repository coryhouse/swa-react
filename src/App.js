import React, { useState, useEffect } from "react";
import { getSessions } from "./api/sessionApi";

const newSession = {
  id: null,
  title: ""
};

function App() {
  // this will hold our form data
  const [session, setSession] = useState(newSession);
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    getSessions().then(sessions => setSessions(sessions));
  }, []);

  function deleteSession(id) {
    const newSessions = sessions.filter(session => session.id !== id);
    setSessions(newSessions); // this triggers a re-render because state changed.
  }

  function renderSession(session) {
    return (
      <li key={session.id}>
        <button onClick={() => deleteSession(session.id)}>Delete</button>{" "}
        {session.title}
      </li>
    );
  }

  function saveSession(event) {
    event.preventDefault(); // don't post back to the server.
    // Assign an id on the client. because YOLO.
    const sessionToSave = { ...session, id: Math.random() };
    setSessions([...sessions, sessionToSave]);

    // clear out the form
    setSession(newSession);
  }

  function onChange(event) {
    // use event.target.value to update session.title in state
    const newSession = { ...session, title: event.target.value }; // copy session
    setSession(newSession);
  }

  // what I return here gets rendered.
  return (
    <>
      <h1>KCDC Sessions</h1>
      <form onSubmit={saveSession}>
        <h2>Add Session</h2>
        <div>
          <label htmlFor="title">Title</label>
          <br />
          <input
            type="text"
            onChange={onChange}
            id="title"
            value={session.title}
          />
        </div>
        <input type="submit" value="Add Session" />
      </form>
      <ul>{sessions.map(renderSession)}</ul>
    </>
  );
}

export default App;
