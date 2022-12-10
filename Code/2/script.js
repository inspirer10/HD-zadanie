const btn = document.querySelector('.btn');
const countriesSection = document.querySelector('#countries');

btn.addEventListener('click', () => {
    fetch('https://restcountries.com/v3.1/all')
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error('Something went wrong');
            }
        })
        .then((data) => {
            for (let i = 0; i < data.length; i++) {
                countriesSection.innerHTML += `<div class="item__card" onclick={console.log(${data[i]})} >
                <img src="${data[i].flags.svg}" alt="${data[i].name.official}" />
                <h2 class="country__name">${data[i].name.common}</h2>
                <p class="country__population"><b>Population: </b>${data[i].population}</p>
                <p class="country__region"><b>Region: </b>${data[i].region}</p>
                <p class="country__capital"><b>Capital: </b>${data[i].capital}</p>
            </div>`;
            }
        })
        .catch((err) => console.warn(err));
});
