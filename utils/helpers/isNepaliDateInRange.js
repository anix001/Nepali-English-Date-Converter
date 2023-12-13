const { yearsWithMonthDaysInBsForEnglishDate } = require("../constants/YearWithMonthDaysInBs");

function isNepaliDateInRange(year, month, day){

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

    if(year<2000 || year>2089){
        // return 'Supported only between 2000-2089';
        return false;
    }

    if (month < 1 || month > 12) {
        // return 'Error! month value can be between 1-12 only';
        return false
    }

    if (day < 1 || day > daysNumber) {
        // return `Error! day value can be between 1-'${daysNumber}'only`;
        return false
    }

    return true;
}

module.exports = {isNepaliDateInRange};