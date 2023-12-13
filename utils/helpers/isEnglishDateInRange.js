const { yearsWithMonthDaysInBsForEnglishDate } = require("../constants/YearWithMonthDaysInBs");

const isEnglishDateInRange = (year, month, day) => {
    let monthPosition = 1;
    let yearPosition = 0;

    for(let i=2000; i< year; i++){
       yearPosition++;
    }
    
    let yearArray = yearsWithMonthDaysInBsForEnglishDate[yearPosition];

    for(let i = 1; i<month; i++){
        monthPosition++;
    }

    let daysNumber = yearArray[monthPosition];

    if (year < 1944 || year > 2033) {
      console.log("Supported year is between 1944 and 2033");
      return false;
    }
  
    if (month < 1 || month > 12) {
      console.log("Error! value 1-12 only");
      return false;
    }
  
    if (day < 1 || day > daysNumber) {
      console.log(`Error! value 1-${daysNumber} only`);
      return false;
    }
    return true;
  };

module.exports = {isEnglishDateInRange};