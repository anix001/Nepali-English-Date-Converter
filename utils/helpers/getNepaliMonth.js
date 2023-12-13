const getNepaliMonth = (englishMonthInNumber) => {
    let nepaliMonth;
  
    switch (englishMonthInNumber) {
      case 1:
        nepaliMonth = "बैशाख";
        break;
  
      case 2:
        nepaliMonth = "जेठ";
        break;
  
      case 3:
        nepaliMonth = "असार";
        break;
  
      case 4:
        nepaliMonth = "श्रावण";
        break;
  
      case 5:
        nepaliMonth = "भदौ";
        break;
  
      case 6:
        nepaliMonth = "असोज";
        break;
  
      case 7:
        nepaliMonth = "कार्तिक";
        break;
  
      case 8:
        nepaliMonth = "मंसिर";
        break;
  
      case 9:
        nepaliMonth = "पुष";
        break;
  
      case 10:
        nepaliMonth = "माघ";
        break;
  
      case 11:
        nepaliMonth = "फाल्गुन";
        break;
  
      case 12:
        nepaliMonth = "चैत्र";
        break;
    }
    return nepaliMonth;
  };

module.exports = {getNepaliMonth};