import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import {GalacticAge} from './../js/galactic-age.js';

$(document).ready(function() {
  $("#user-info").submit(function(event){
    event.preventDefault();

    let birthday = $("#user-birthday").val();
    let lifeExpectancy = $("#user-life-expectancy").val();
console.log(birthday);
console.log(lifeExpectancy);
    let newUser = new GalacticAge(birthday, lifeExpectancy);
    $("#results").show();
    console.log(newUser.ageOnEarth());
    $("#mercury").text(newUser.ageOnMercury());
    $("#venus").text(newUser.ageOnVenus());
    $("#earth").text(newUser.ageOnEarth());
    $("#mars").text(newUser.ageOnMars());
    $("#jupiter").text(newUser.ageOnJupiter());


  });
});
