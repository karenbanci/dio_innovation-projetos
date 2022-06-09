const BASE_URL = "https://api.thecatapi.com/v1/images/search";
const catBtn = document.getElementById("change-cat");
const catImg = document.getElementById("cat");

const getCats = async() => {
  try {
    const data = await fetch(BASE_URL);
    // aqui estou pegando os dados do API e convertendo em JSON
    const json = await data.json();
    // aqui estou acessando a propriedade webpurl
    return json[0].url;

  } catch (e) {
    console.log(e.message);
  }
}

const handleCats = async() => {
  // aqui vai chamar a funcao acima para executar
  catImg.src = await getCats();
}

catBtn.addEventListener("click", handleCats);

handleCats();
