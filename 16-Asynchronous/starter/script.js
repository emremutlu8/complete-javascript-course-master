'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////// XML API USAGE //////////////////

// const getCountryData = function(country) {
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//
// request.send();
//
// request.addEventListener('load', function(){
//   const [data] = JSON.parse(this.responseText); // [data] yaparak JSON.parse(this.responseText)[0] ile aynı şeyi yaptık.
//   console.log(data);
//
//   const html = `
//         <article class="country">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//           </div>
//         </article>
//   `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// });
// };
//
// getCountryData('Turkey');
// getCountryData('spain');

// const request = fetch('https://restcountries.eu/rest/v2/name/turkey');
// console.log(request);

const renderCountry = function(data, className = ''){
  const html = `
        <article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// const getCountryData = function(country){
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(function(response){
//     console.log(response);
//     return response.json(); // Data which we are looking for
//   })
//     .then(function(data){
//       console.log([data]);
//       renderCountry(data[0]);
//     });
// };

const getCountryData = function(country){
  // Country 1
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => response.json()) // Json'a çevirdik.
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) return;

      // Country 2
      return fetch(`https://restcountries.eu/rest/v2/name/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'));
};
getCountryData('turkey');

(async function (){
  try{

  } catch (err){

  }
  }

)