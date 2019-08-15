export function getCourses() {
  return fetch("http://localhost:3001/courses").then(response => {
    // handle the response from the api
    if (response.ok) return response.json();
  });
}

export function deleteCourse(id) {
  return fetch("http://localhost:3001/courses/" + id, {
    method: "DELETE"
  }).then(response => {
    // handle the response from the api
    if (response.ok) return response.json();
  });
}
