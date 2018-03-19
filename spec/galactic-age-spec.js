import {GalacticAge} from './../js/galactic-age.js';

describe('userInput', function(){
  it ('should test that user input is correct', function(){
    let userInput = new GalacticAge('1990-03-30', 85);
    expect(userInput.birthDate).toEqual('1990-03-30');
    expect(userInput.lifeExpectancy).toEqual(85);
  });
});

describe('ageInSeconds', function(){
  it ('should test that user age is converted to seconds', function(){
    let userInput = new GalacticAge('1990-03-30', 85);
    let userBirthDate = new Date(userInput.birthDate);
    let todayDate = new Date();
    expect(userInput.ageInSeconds()).toEqual((Math.floor((todayDate.getTime() - userBirthDate.getTime()) / 1000)));
  });
});

describe('ageOnMercury', function(){
  it ('should test age on Mercury is correct', function(){
    let userInput = new GalacticAge('1990-03-30', 85);

    expect().toEqual();
  });
});
