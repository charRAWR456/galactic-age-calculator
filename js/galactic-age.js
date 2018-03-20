export class GalacticAge {

  constructor(birthDate, lifeExpectancy){
    this.birthDate = birthDate;
    this.lifeExpectancy = lifeExpectancy;
  }

  ageInSeconds() {
    let userBirthDate = new Date(this.birthDate)
    let todayDate = new Date();
    return Math.floor((todayDate.getTime() - userBirthDate.getTime()) / 1000);
  }

  ageOnEarth(){
    let ageOnEarth = Math.floor(this.ageInSeconds() / 31536000);
    return ageOnEarth;
  }
  
  ageOnMercury(){
    let ageOnMercury = Math.floor((this.ageInSeconds() / 31536000) / .24);
    return ageOnMercury;
  }

  ageOnVenus(){
    let ageOnVenus = Math.floor((this.ageInSeconds() / 31536000) / .62);
    return ageOnVenus;
  }

  ageOnMars(){
    let ageOnMars = Math.floor((this.ageInSeconds() / 31536000) / 1.88);
    return ageOnMars;
  }

  ageOnJupiter(){
    let ageOnJupiter = Math.floor((this.ageInSeconds() / 31536000) / 11.86);
    return ageOnJupiter;
  }

  lifeExpectancy(){
    let planetLifeExpectancy = 0;
  }
}
