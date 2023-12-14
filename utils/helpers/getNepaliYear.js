const {getNepaliDays} = require('./getNepaliDays');

const getNepaliYear = (yearInAD) => {
    const splitYearInAD = yearInAD.toString().split('');
    let arrToStoreConvertedNumber = [];
    
    for(let i = 0; i<splitYearInAD?.length ; i++){
        let num = getNepaliDays(parseInt(splitYearInAD[i]));
        arrToStoreConvertedNumber.push(num);
    };

    return arrToStoreConvertedNumber.join("");

}

module.exports = {getNepaliYear};