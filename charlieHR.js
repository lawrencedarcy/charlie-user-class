class User {
  constructor(name, dob) {
    this.name = name;
    this.dob = dob;
  }

  age() {
    const today = new Date();
    const birthday = new Date(this.dob);
    let age = today.getFullYear() - birthday.getFullYear();
    const month =  today.getMonth() - birthday.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthday.getDate())) {
      age--;
  }
   return age;
  }

  nextBirthday() {
    const day = new Date(this.dob).getDate();
    const month = new Date(this.dob).getMonth();
    const year = new Date().getFullYear();

    const thisYearsBday = new Date(year, month, day);
    const today = new Date();
    return thisYearsBday.getTime() < today.getTime()
      ? new Date(year + 1, month, day).toString()
      : thisYearsBday.toString();
  }
}

module.exports = User;
