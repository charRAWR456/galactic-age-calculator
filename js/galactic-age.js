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


}
