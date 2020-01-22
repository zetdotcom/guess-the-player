export function handleApiErrors(response) {
  if (!response.ok) {
    console.log(response)
    throw Error(response.statusText);
  }
  return response;
}