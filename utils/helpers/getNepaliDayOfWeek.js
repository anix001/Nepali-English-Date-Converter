const getNepaliDayOfWeek = (dayInNumber) => {
    let day;
    switch (dayInNumber) {
      case 1:
        day = "आइतवार";
        break;
  
      case 2:
        day = "सोमवार";
        break;
  
      case 3:
        day = "मंगलवार";
        break;
  
      case 4:
        day = "बुधवार";
        break;
  
      case 5:
        day = "बिहिवार";
        break;
  
      case 6:
        day = "शुक्रवार";
        break;
  
      case 7:
        day = "शनिबार";
        break;
    }
    return day;
  };

module.exports = {getNepaliDayOfWeek};