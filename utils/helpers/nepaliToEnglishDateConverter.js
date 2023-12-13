const { yearsWithMonthDaysInBsForEnglishDate } = require("../constants/YearWithMonthDaysInBs");
const { getEnglishDayOfWeek } = require("./getEnglishDayOfWeek");
const { getEnglishMonth } = require("./getEnglishMonth");
const { isLeapYear } = require("./isLeapYear");
const { isNepaliDateInRange } = require("./isNepaliDateInRange");

const NepaliToEnglishDateConverter =(inputYear, inputMonth, inputDay) =>
{
    let englishYear = 1943;
    let englishMonth = 4;
    let englishDay = 14 - 1;    // initial english date.
    let nepaliYear = 2000;
    // let nepaliMonth = 1;
    // let nepaliDay = 1;        // initial equivalent nepali date.
    let totalEnglishDays = 0;
    let totalNepaliDays = 0;
    let a = 0;
    let day = 4 - 1;
    let m = 0;
    let y = 0;
    let i = 0;
    let k = 0;
    let numDay = 0;
    let month = [ 0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
    let lmonth = [ 0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    // Check for date range
    let dateCheck = isNepaliDateInRange(inputYear, inputMonth, inputDay);

    if (!dateCheck) {
        return false;
    } else {
        // Count total days in-terms of year
        for ( i = 0; i < (inputYear - nepaliYear); i++) {
            for (let j = 1; j <= 12; j++) {
                totalNepaliDays += yearsWithMonthDaysInBsForEnglishDate[k][j];
            }
            k++;
        }
        // Count total days in-terms of month
        for (let j = 1; j < inputMonth; j++) {
            totalNepaliDays += yearsWithMonthDaysInBsForEnglishDate[k][j];
        }
        // Count total days in-terms of dat
        totalNepaliDays += inputDay;
        // Calculation of equivalent english date...
        totalEnglishDays = englishDay;
        m = englishMonth;
        y = englishYear;
        while (totalNepaliDays !== 0) {
            if (isLeapYear(y)) {
                a = lmonth[m];
            } else {
                a = month[m];
            }
            totalEnglishDays++;
            day++;
            if (totalEnglishDays > a) {
                m++;
                 totalEnglishDays = 1;
                if (m > 12) {
                    y++;
                    m = 1;
                }
            }
            if (day > 7) {
                day = 1;
            }
            totalNepaliDays--;
        }

        numDay = day;

  
      let result = {
        englishYear: y,
        englishMonth: m,
        englishDate: totalEnglishDays,
        weekDay: numDay,
        month:m,
        dayName: getEnglishDayOfWeek(day),
        monthName: getEnglishMonth(m),
      };
  
      return result;
    }
}

module.exports = {NepaliToEnglishDateConverter};