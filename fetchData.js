// fetchData.js
export const fetchPokemonData = async () => {
  try {
    console.log("Fetching data from the API...");
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=1302"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const jsonData = await response.json();
    console.log("Data fetched successfully:", jsonData.results);
    return jsonData.results; // Nous ne renvoyons que le tableau des résultats
  } catch (error) {
    console.error("Could not fetch data:", error);
    return []; // Renvoie un tableau vide en cas d'erreur
  }
};
