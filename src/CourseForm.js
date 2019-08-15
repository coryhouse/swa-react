import React, { useState, useContext } from "react";
import UserContext from "./UserContext";

function CourseForm(props) {
  const [course, setCourse] = useState({
    title: "",
    category: "",
    authorId: 1 // HACK: Hard coding authorId.
  });
  const user = useContext(UserContext);

  function onChange(event) {
    const newCourse = { ...course }; //copy the course object
    newCourse[event.target.name] = event.target.value; // the value that someone just typed
    setCourse(newCourse);
  }

  return (
    <form onSubmit={event => props.onSubmit(course, event)}>
      {user.name}
      <div>
        <label htmlFor="title">Title</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          onChange={onChange}
          value={course.title}
        />
      </div>

      <div>
        <label htmlFor="category">Category</label>
        <br />
        <input
          type="text"
          id="category"
          onChange={onChange}
          name="category"
          value={course.category}
        />
      </div>

      <input type="submit" value="Add Course" />
    </form>
  );
}

export default CourseForm;
