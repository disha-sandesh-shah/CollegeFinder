let url = "http://universities.hipolabs.com/search?name=";
let searchBtn = document.querySelector(".search-btn");

async function init() {
    let colArr = await getColleges("india");
    show(colArr);
}

init();

searchBtn.addEventListener("click", async () => {
    let country = document.querySelector(".search-input").value;
    console.log(country);

    let colArr = await getColleges(country);
    show(colArr);
});

function show(colArr) {
    let container = document.querySelector(".container");
    container.innerHTML = "";

    for (col of colArr) {
        console.log(col);
        let name = document.createElement("h4");
        let country = document.createElement("h5");

        name.innerHTML = `<i class="fa-solid fa-building-columns"></i> ${col.name}`;
        country.innerHTML = `<i class="fa-solid fa-globe"></i> ${col.country}`;

        let card = document.createElement("div");
        card.classList.add("card");
        card.appendChild(name);
        card.appendChild(country);

        card.addEventListener("click", () => {
            window.open(col.web_pages, "_blank");
        });


        container.appendChild(card);
    }
}

async function getColleges(country) {
    try {
        let res = await axios.get(url + country);
        return res.data;
    } catch (e) {
        console.log(e);
        return [];
    }
}