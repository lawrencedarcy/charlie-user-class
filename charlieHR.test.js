const User = require('./charlieHR');

const testUserOne = new User('lawrence', '1986, 1, 1');
const testUserTwo = new User('Darren', '1972, 11, 30');
const testUserThree = new User('Fiona', '1925, 3, 13');

test('calculate age', () => {
  expect(testUserOne.age()).toBe(34);
  expect(testUserTwo.age()).toBe(47);
  expect(testUserThree.age()).toBe(95);
}); 

test('calculate next birthday', () => {
  expect(testUserOne.nextBirthday()).toBe('Fri Jan 01 2021 00:00:00 GMT+0000 (Greenwich Mean Time)');
  expect(testUserTwo.nextBirthday()).toBe('Mon Nov 30 2020 00:00:00 GMT+0000 (Greenwich Mean Time)');
  expect(testUserThree.nextBirthday()).toBe('Sat Mar 13 2021 00:00:00 GMT+0000 (Greenwich Mean Time)');
}); 
