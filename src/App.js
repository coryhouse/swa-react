import React, { useState } from "react";

const initialCourses = [
  {
    id: 1,
    title: "Securing React Apps with Auth0",
    slug: "react-auth0-authentication-security",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 2,
    title: "React: The Big Picture",
    slug: "react-big-picture",
    authorId: 1,
    category: "JavaScript"
  }
];

function App(props) {
  // Declare state using the React useState hook
  const [courses, setCourses] = useState(initialCourses);

  function deleteCourse(id) {
    // Note: not mutating state. Creating an updated copy.
    const newCourses = courses.filter(course => course.id !== id);
    setCourses(newCourses);
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
