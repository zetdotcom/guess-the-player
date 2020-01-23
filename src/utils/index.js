export function handleApiErrors(response) {
  if (!response.ok) {
    console.log(response)
    throw Error(response.statusText);
  }
  return response;
}

export function getRandomPlayers(arr, n) {
  if (!arr.length) {
    return []
  }
  let result = [];
  let len = arr.length;
  let taken = [];
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    const x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
};