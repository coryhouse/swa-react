export async function getSessions() {
  const response = await fetch("http://localhost:3001/sessions");
  if (response.ok) {
    return await response.json();
  }
}
