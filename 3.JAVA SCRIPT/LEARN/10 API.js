// 10 API.js

const URL = "https://api.thecatapi.com/v1/images/search"; 
// important: /search gives random images

const getRandomCat = async () => {
    console.log("Fetching new cat...");
    try {
        let response = await fetch(URL);
        let data = await response.json();
        console.log(data);

        let imgUrl = data[0].url; // API returns an array
        document.getElementById("catImage").src = imgUrl;
    } catch (error) {
        console.error("Error fetching cat:", error);
    }
}

// When page loads, show one cat
getRandomCat();

// When button is clicked, fetch new cat
document.getElementById("btn").addEventListener("click", getRandomCat);
