const getEnglishDayOfWeek = (dayInNumber) => {
    let day;
    switch (dayInNumber) {
      case 1:
        day = "Sunday";
        break;
  
      case 2:
        day = "Monday";
        break;
  
      case 3:
        day = "Tuesday";
        break;
  
      case 4:
        day = "Wednesday";
        break;
  
      case 5:
        day = "Thursday";
        break;
  
      case 6:
        day = "Friday";
        break;
  
      case 7:
        day = "Saturday";
        break;
    }
    return day;
  };

module.exports = {getEnglishDayOfWeek};