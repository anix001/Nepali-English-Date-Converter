const { getNepaliDayOfWeek } = require('./getNepaliDayOfWeek');
const { yearsWithMonthDaysInBsForEnglishDate } = require("../constants/YearWithMonthDaysInBs");
const { isEnglishDateInRange } = require("./isEnglishDateInRange");
const { isLeapYear } = require("./isLeapYear");
const { getNepaliMonth } = require('./getNepaliMonth');
const { getNepaliDays } = require('./getNepaliDays');
const {getNepaliYear} = require('./getNepaliYear');

const EnglishToNepaliDateConverter = (inputYear, inputMonth, inputDay) => {
    if (isEnglishDateInRange(inputYear, inputMonth, inputDay) === false) {
      return false;
    } else {
      let yearsMonthDaysWithoutLeapYear = [
        31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
      ];
      let yearsMonthDaysWithLeapYear = [
        31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
      ];
  
      let englishYear = 1944;
      let nepaliYear = 2000;
      let nepaliMonth = 9;
      let nepaliDate = 16;
      let totalEnglishDays = 0;
      let totalNepaliDays = 0;
      let a = 0;
      let day = 6;
      let numDay = 0;
  
      for (let i = 0; i < inputYear - englishYear; i++) {
        if (isLeapYear(englishYear + i) === true)
          for (let j = 0; j < 12; j++) {
            totalEnglishDays += yearsMonthDaysWithLeapYear[j];
          }
        else
          for (let j = 0; j < 12; j++) {
            totalEnglishDays += yearsMonthDaysWithoutLeapYear[j];
          }
      }
  
      for (let i = 0; i < inputMonth - 1; i++) {
        if (isLeapYear(inputYear) === true) {
          totalEnglishDays += yearsMonthDaysWithLeapYear[i];
        } else {
          totalEnglishDays += yearsMonthDaysWithoutLeapYear[i];
        }
      }
  
      totalEnglishDays += inputDay;
  
      let i = 0;
      let j = nepaliMonth;
      totalNepaliDays = nepaliDate;
      let month = nepaliMonth;
      let year = nepaliYear;
  
      while (totalEnglishDays !== 0) {
        a = yearsWithMonthDaysInBsForEnglishDate[i][j];
        totalNepaliDays++;
        day++;
  
        if (totalNepaliDays > a) {
          month++;
          totalNepaliDays = 1;
          j++;
        }
  
        if (day > 7) {
          day = 1;
        }
  
        if (month > 12) {
          year++;
          month = 1;
        }
  
        if (j > 12) {
          j = 1;
          i++;
        }
  
        totalEnglishDays--;
      }
  
      numDay = day;
      let result = {
        year: getNepaliYear(year),
        month: getNepaliDays(month),
        date: getNepaliDays(totalNepaliDays),
        weekDay:getNepaliDays(numDay),
        dayName: getNepaliDayOfWeek(day),
        monthName: getNepaliMonth(month),
      };
  
      return result;
    }
  };

module.exports = {EnglishToNepaliDateConverter};

