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
    let newUser = new GalacticAge(birthday, lifeExpectancy);

    $("#results").show();

    $("#mercuryAge").text(newUser.ageOnMercury());
    $("#venusAge").text(newUser.ageOnVenus());
    $("#earthAge").text(newUser.ageOnEarth());
    $("#marsAge").text(newUser.ageOnMars());
    $("#jupiterAge").text(newUser.ageOnJupiter());

    if(newUser.ageOnMercury() > 85){
      $("#mercuryLifeExpectancy").text("Congratulations! You are the longest living earthling on this planet!");
    }else{
      $("#mercuryLifeExpectancy").text(newUser.lifeExpectancy - newUser.ageOnMercury());
    }

    if(newUser.ageOnVenus() > 85){
      $("#venusLifeExpectancy").text("Congratulations! You are the longest living earthling on this planet!");
    }else{
      $("#venusLifeExpectancy").text(newUser.lifeExpectancy - newUser.ageOnVenus());
    }

    if(newUser.ageOnEarth() > 85){
      $("#earthLifeExpectancy").text("Congratulations! You are the longest living earthling on this planet!");
    }else{
      $("#earthLifeExpectancy").text(newUser.lifeExpectancy - newUser.ageOnEarth());
    }

    if(newUser.ageOnMars() > 85){
      $("#marsLifeExpectancy").text("Congratulations! You are the longest living earthling on this planet!");
    }else{
      $("#marsLifeExpectancy").text(newUser.lifeExpectancy - newUser.ageOnMars());
    }

    if(newUser.ageOnJupiter() > 85){
      $("#jupiterLifeExpectancy").text("Congratulations! You are the longest living earthling on this planet!");
    }else{
      $("#jupiterLifeExpectancy").text(newUser.lifeExpectancy - newUser.ageOnJupiter());
    }

  });
});
