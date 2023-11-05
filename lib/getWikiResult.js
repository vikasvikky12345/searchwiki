export default async function getWikiResult(search) {

    const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${search}&gsrlimit=20&prop=pageimages|extracts&exchars=100&exintro=true&explaintext=true&exlimit=max&format=json&origin=*`;

    const response = await fetch(apiUrl);

    const data= await response.json();

  return data;
}