const cardd = document.getElementById("conm");
const add = document.getElementById("btns");
const inpt = document.querySelector(".inputs");
let city = null;
let citytemp = null;
let cityhum = null;
let citywin = null;
let citymx = null;
let citymin = null;
let cityfeel = null;
let url = add.addEventListener("click", () => {
  getdata();
});

const displaydata = () => {
  const card1 = document.createElement("article");
  const spn1 = document.createElement("span");
  const spnh1 = document.createElement("span");
  const spn2 = document.createElement("span");
  const spncon = document.createElement("span");
  const spnin1 = document.createElement("span");
  const spnin2 = document.createElement("span");
  const hh2 = document.createElement("h2");
  const temp = document.createElement("p");
  const mxtemp = document.createElement("p");
  const mntemp = document.createElement("p");
  const wins = document.createElement("p");
  const hum = document.createElement("p");
  const feel = document.createElement("p");
  const hlin = document.createElement("hr");
  const buton = document.createElement("button");
  let htext = document.createTextNode(city);
  let p1text = document.createTextNode(`Temperature: ${citytemp} °C`);
  let p2text = document.createTextNode(`Max Temperature: ${citymx} °C`);
  let p3text = document.createTextNode(`Min Temperature: ${citymin} °C`);
  let p4text = document.createTextNode(`Wind Speed: ${citywin} KM`);
  let p5text = document.createTextNode(`Humidity: ${cityhum} %`);
  let p6text = document.createTextNode(`Feels Like: ${cityfeel} °C`);
  let cbt = document.createTextNode("X");

  //add elements

  const nwecard = cardd.appendChild(card1);
  const mainf = nwecard.appendChild(spn1);
  const conh = mainf.appendChild(spnh1);
  const h = conh.appendChild(hh2);
  const line = mainf.appendChild(hlin);
  const datcon = mainf.appendChild(spncon);
  const pcon1 = datcon.appendChild(spnin1);
  const pcon2 = datcon.appendChild(spnin2);
  const cancels = conh.appendChild(buton);
  let p1 = spnin1.appendChild(temp);
  let p2 = spnin1.appendChild(mxtemp);
  let p3 = spnin1.appendChild(mntemp);
  let p4 = spnin2.appendChild(wins);
  let p5 = spnin2.appendChild(hum);
  let p6 = spnin2.appendChild(feel);
  buton.appendChild(cbt);

  //add class

  nwecard.setAttribute("class", "cards1");
  mainf.setAttribute("class", "cancon1");
  conh.setAttribute("class", "conh");
  datcon.classList.add("datacon", "row", "align-items-center", "align-items-lg-start","m-0");
  cancels.setAttribute("class", "cancels");
  pcon1.classList.add("col-12", "col-lg-6");
  // pcon1.setAttribute("class", "");
  pcon2.classList.add("col-12", "col-lg-6");
  // pcon2.setAttribute("class", "");
  line.setAttribute("class", "hbr");
  p1.setAttribute("class", "p-text");
  p2.setAttribute("class", "p-text");
  p3.setAttribute("class", "p-text");
  p4.setAttribute("class", "p-text");
  p5.setAttribute("class", "p-text");
  p6.setAttribute("class", "p-text");

  //add text

  h.appendChild(htext);
  p1.appendChild(p1text);
  p2.appendChild(p2text);
  p3.appendChild(p3text);
  p4.appendChild(p4text);
  p5.appendChild(p5text);
  p6.appendChild(p6text);

  const catd = document.querySelectorAll("article");

  const btm = document.querySelectorAll(".cancels");
  for (let i = 0; i < btm.length; i++) {
    btm[i].addEventListener("click", () => {
      catd[i].remove();
    });
  }
};

async function getdata() {
  city = inpt.value;
  let cap = city.slice(1);
  city = city.charAt(0).toUpperCase();
  city = city + cap;
  inpt.value = "";
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8e94ef8f76ed76c242d3f797a150082d&units=metric`
  )
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
      citytemp = result.main.temp;
      cityhum = result.main.humidity;
      citywin = result.wind.speed;
      citymx = result.main.temp_max;
      citymin = result.main.temp_min;
      cityfeel = result.main.feels_like;

      displaydata();
    });
}
