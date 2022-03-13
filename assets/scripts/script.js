var filter1 = document.getElementById("countries");
var countries = filter1.getElementsByClassName("btn");
for (var i = 0; i < countries.length; i++) {
    countries[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("activeCountry");
        current[0].className = current[0].className.replace(" activeCountry", "");
        this.className += " activeCountry";
    });
}

var filter2 = document.getElementById("tags");
var tags = filter2.getElementsByClassName("btn");
for (var i = 0; i < tags.length; i++) {
    tags[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("activeTag");
        current[0].className = current[0].className.replace(" activeTag", "");
        this.className += " activeTag";
    });
}