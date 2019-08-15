import React from "react";

function CourseForm(props) {
  return (
    <form>
      <div>
        <label htmlFor="title">Title</label>
        <br />
        <input type="text" id="title" />
      </div>

      <div>
        <label htmlFor="category">Category</label>
        <br />
        <input type="text" id="category" />
      </div>

      <input type="submit" value="Add Course" />
    </form>
  );
}

export default CourseForm;
