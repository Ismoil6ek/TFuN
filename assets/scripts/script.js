var main = document.querySelector("main");
var filter1 = document.getElementById("countries");
var countries = filter1.getElementsByClassName("btn");
for (var i = 0; i < countries.length; i++) {
  countries[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("activeCountry");
    current[0].className = current[0].className.replace(" activeCountry", "");
    this.className += " activeCountry";
  });
}

var filter2 = document.getElementById("tags");
var tags = filter2.getElementsByClassName("btn");
for (var i = 0; i < tags.length; i++) {
  tags[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("activeTag");
    current[0].className = current[0].className.replace(" activeTag", "");
    this.className += " activeTag";
  });
}

var freeSection = document.querySelector(".freeSection");
var saleSection = document.querySelector(".saleSection");
var premiumSection = document.querySelector(".premiumSection");

function showPlaces(my_db_list, section, sectionID) {
  var section = document.createElement("div");
  for (var key in my_db_list) {
    var value = my_db_list[key];
    var card = document.createElement("div");
    card.classList.add("flip-card");
    card.innerHTML = `
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="${value.fullimg}" alt="Avatar" style="width:266px;height:400px;">
          </div>
          <div class="flip-card-back">
            <h1>${value.location}</h1> 
            <p>${value.place_name}</p> 
            <p>${value.overview}</p>
          </div>
        </div>
                `;
    if (value.type == "Free") {
      let free = document.querySelector(".freeSection");
      free.appendChild(card);
    } else if (value.type == "Sale") {
      let sale = document.querySelector(".saleSection");
      sale.appendChild(card);
    } else if (value.type == "Premium") {
      let premium = document.querySelector(".premiumSection");
      premium.appendChild(card);
    }
  }
  main.appendChild(section);
}

function hide() {
  let loadingdiv = document.querySelector(".loading");
  loadingdiv.style.display = "none";
}

const firebaseConfig = {
  apiKey: "AIzaSyA9L-xoKXYBCgneW2ODGz8q7lccAELfNbk",
  authDomain: "auth-ad1da.firebaseapp.com",
  databaseURL: "https://auth-ad1da-default-rtdb.firebaseio.com",
  projectId: "auth-ad1da",
  storageBucket: "auth-ad1da.appspot.com",
  messagingSenderId: "927440792801",
  appId: "1:927440792801:web:574d32d03e02a7e30e9ba0",
  measurementId: "G-4MNQMR913Z",
};
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const dbRef = firebase.database().ref("places/");

// on() method;
var my_db_list = undefined;
firebase
  .database()
  .ref("places/")
  .on("value", (snap) => {
    my_db_list = snap.val();
    console.log(snap.val());
    hide();
    main.style.display = "block";
    showPlaces(my_db_list, freeSection, 1);
    showPlaces(my_db_list, saleSection, 2);
    showPlaces(my_db_list, premiumSection, 3);
  });
