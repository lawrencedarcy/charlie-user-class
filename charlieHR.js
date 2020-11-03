class User {
  constructor(name, dob) {
    this.name = name;
    this.dob = dob;
  }

  age() {
    const today = new Date();
    const birthday = new Date(this.dob);
    const age = today.getFullYear() - birthday.getFullYear();
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
