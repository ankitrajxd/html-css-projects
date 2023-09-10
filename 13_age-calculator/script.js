"use strict";

const yearel = document.querySelector(".purple-year");
const monthel = document.querySelector(".purple-month");
const dayel = document.querySelector(".purple-day");
const convertBtn = document.querySelector(".btn");

const userDay = document.querySelector(".input--day");
const userMonth = document.querySelector(".input--month");
const userYear = document.querySelector(".input--year");

const now = new Date();

const clearDisplay = () => {
  yearel.textContent = monthel.textContent = dayel.textContent = 0;
};

clearDisplay();

const calcAge = () => {
  //getting the value of input fields

  if (checkDay() && checkMonth() && checkYear()) {
    const userDate = new Date(
      Number(userYear.value),
      Number(userMonth.value) - 1,
      Number(userDay.value)
    );
    const age = now.getTime() - userDate.getTime();
    console.log(age);
    console.log(userDate.getTime());

    // The total number of years
    const totalYears = age / (1000 * 60 * 60 * 24 * 365.25);

    // Calculate the number of years and the remaining fractional part
    const years = Math.floor(totalYears);

    const remainingMonths = (totalYears - years) * 12;

    // Calculate the number of months and the remaining fractional part
    const months = Math.floor(remainingMonths);
    const remainingDays = (remainingMonths - months) * 30.44; // Assuming an average month length

    // Calculate the number of days
    const days = Math.round(remainingDays);

    //   console.log(`${years} years, ${months} months, ${days} days`);
    yearel.textContent = years;
    monthel.textContent = months;
    dayel.textContent = days;
  } else {
    clearDisplay();
  }
};

// adding an event listener
convertBtn.addEventListener("click", calcAge);
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    calcAge();
  }
});

const checkDay = function () {
  if (userDay.value > 31 || userDay.value <= 0) {
    userDay.style.borderColor = "red";
    return false;
  } else {
    userDay.style.borderColor = "";
  }
  return true;
};

const checkMonth = function () {
  if (userMonth.value > 12 || userMonth.value <= 0) {
    userMonth.style.borderColor = "red";
    return false;
  } 
  else {
    userMonth.style.borderColor = "";
  }
  return true;
};

const checkYear = function () {
  if (userYear.value > 9999 && userYear.value < 1000) {
    userYear.style.borderColor = "red";
    return false;
  } else {
    userYear.style.borderColor = "";
  }
  return true;
};

userDay.addEventListener("input", checkDay);
userMonth.addEventListener("input", checkMonth);
userYear.addEventListener("input", checkYear);
