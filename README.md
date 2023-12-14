# Nepali-English-Date-Converter

## Installation
```bash
npm i nepali-english-date-converter
```
## Usage
```python
import {NepaliToEnglishDateConverter} from 'nepali-english-date-converter';
or
const {NepaliToEnglishDateConverter, EnglishToNepaliDateConverter} = require('nepali-english-date-converter');

let englishDate = EnglishToNepaliDateConverter(2023,12,13);
console.log("🚀 ~ file: script.js:4 ~ a:", englishDate);
let nepaliDate = NepaliToEnglishDateConverter(2080,8,27);
console.log("🚀 ~ file: script.js:6 ~ b:", nepaliDate);
```
## Output
```python
{
  year: '२०८०',
  month: '८',
  date: '२७',
  weekDay: '४',
  dayName: 'बुधवार',
  monthName: 'मंसिर'
}
{
  englishYear: 2023,
  englishMonth: 12,
  englishDate: 13,
  weekDay: 4,
  month: 12,
  dayName: 'Wednesday',
  monthName: 'December'
}
```
