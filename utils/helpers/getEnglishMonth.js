const getEnglishMonth = (NepaliMonthInNumber) => {
    let englishMonth;
    switch (NepaliMonthInNumber) {
        case 1:
            englishMonth = "January";
            break;
          case 2:
            englishMonth = "February";
            break;
          case 3:
            englishMonth = "March";
            break;
          case 4:
            englishMonth = "April";
            break;
          case 5:
            englishMonth = "May";
            break;
          case 6:
            englishMonth = "June";
            break;
          case 7:
            englishMonth = "July";
            break;
          case 8:
            englishMonth = "August";
            break;
          case 9:
            englishMonth = "September";
            break;
          case 10:
            englishMonth = "October";
            break;
          case 11:
            englishMonth = "November";
            break;
          case 12:
            englishMonth = "December";
        }
    return englishMonth;
  };

  module.exports = {getEnglishMonth};