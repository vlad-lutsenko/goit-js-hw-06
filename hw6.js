"use strict";
import users from "./users.js";

//task-1

const getUserNames = users => {
  return users.map(user => user.name);
};

console.log(getUserNames(users));

//task-2

const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, "blue"));

// task-3

const getUsersWithGender = (users, gender) => {
  return users
    .filter(user => user.gender === gender)
    .map(filteredUser => filteredUser.name);
};

console.log(getUsersWithGender(users, "male"));

//task-4

const getInactiveUsers = users => {
  return users.filter(user => !user.isActive);
};

console.log(getInactiveUsers(users));

//task-5

const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
console.log(getUserWithEmail(users, "elmahead@omatom.com"));

// task-6

const getUsersWithAge = (users, min, max) => {
  return users.filter(user => user.age >= min && user.age <= max);
};

console.log(getUsersWithAge(users, 20, 30));

console.log(getUsersWithAge(users, 30, 40));

//task-7

const calculateTotalBalance = users => {
  return users.reduce((totalBalance, user) => {
    totalBalance += user.balance;
    return totalBalance;
  }, 0);
};

console.log(calculateTotalBalance(users));

//task-8

const getUsersWithFriend = (users, friendName) => {
  return users
    .filter(user => user.friends.includes(friendName))
    .map(userWithFriend => userWithFriend.name);
};

console.log(getUsersWithFriend(users, "Briana Decker"));
console.log(getUsersWithFriend(users, "Goldie Gentry"));

//task-9
//Массив имен (поле name) людей, отсортированных в
//зависимости от количества их друзей (поле friends)

const getNamesSortedByFriendsCount = users => {
  const sortedByFriendsCount = (a, b) => {
    a.friends.length - b.friends.length;
  };
  return users.sort(sortedByFriendsCount);
  // .map(userSortedByFriendsCount => userSortedByFriendsCount.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head',
//'Carey Barr',
// 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
