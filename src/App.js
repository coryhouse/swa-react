import React, { useState, useEffect } from "react";
import * as api from "./api/courseApi";
import CourseForm from "./CourseForm";

function App(props) {
  // Declare state using the React useState hook
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    api.getCourses().then(courses => setCourses(courses));
  }, []);

  function deleteCourse(id) {
    // Note: not mutating state. Creating an updated copy.
    api.deleteCourse(id); // delete course from the db.
    const newCourses = courses.filter(course => course.id !== id);
    setCourses(newCourses);
  }

  function handleSave(course) {
    debugger;
  }

  function renderCourse(course) {
    return (
      <tr key={course.id}>
        <td>
          <button onClick={event => deleteCourse(course.id)}>Delete</button>
          {course.title}
        </td>
        <td>{course.category}</td>
      </tr>
    );
  }

  return (
    <>
      <h1>Courses</h1>
      <CourseForm onSubmit={handleSave} />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>{courses.map(renderCourse)}</tbody>
      </table>
    </>
  );
}

export default App;
