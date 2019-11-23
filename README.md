# date-genie
date-genie is a Javascript date manipulation library written in Typescript. Use it to count the number of weeks or months that have occured since the Unix epoch.

###### Disclaimer
This library has been thoroughly tested in UTC (Zulu Time) environments. Running this code in a timezone other than UTC *could* produce unpredictable results.

## Installation
Use the package manager [npm](https://www.npmjs.com/package/@dmonaldo/date-genie) to install date-genie.

```bash
npm install date-genie
```

## Usage
```javascript
import genie from 'date-genie';
```

#### getWeek(Date, TimezoneOffset)
Provided a given `Date`, return the number of full weeks that have occured before this date + 1. Monday is considered the first day of the week.

`TimezoneOffset` is optional. If supplied, it shifts the date to the specified timezone using the offset. Otherwise it defaults to `0`.

```javascript
// Tuesday, November 5th, 2019
var date = new Date("2019-11-05T00:00:00.000Z"); 
var result = genie.getWeek(date);
// result = 2601 because November 5th, 2019 is in the 2601st week since the Unix epoch
```

```javascript
// Using TimezoneOffset
// Sunday, November 3rd, 2019 @ 10pm PST
// Note that the UTC date is November 4th but the TimezoneOffset shifts it back
var date = new Date("2019-11-04T06:00:00.000Z");
var timezoneOffset = 480;
var result = genie.getWeek(date, timezoneOffset);
// result = 2600 because November 3rd, 2019 is in the 2600th week since the Unix epoch
```

#### getMonth(Date, TimezoneOffset)
Provided a given `Date`, return the number of full months that have occured before this date + 1.

`TimezoneOffset` is optional. If supplied, it shifts the date to the specified timezone using the offset. Otherwise it defaults to `0`.

```javascript
// Friday, November 1st, 2019
var date = new Date("2019-11-01T00:00:00.000Z"); 
var result = genie.getMonth(date);
// result = 599 because November 2019 is the 599th month since the Unix epoch
```

## Roadmap
- Add support for dates before 1970. Currently only dates after January 1st, 1970 are supported and have been tested.
- Allow the day a week starts to be adjusted for `getWeek`. Currently defaults to Monday.
- Support environments operating in timezones other than UTC.
- Solve [Year 2038 problem](https://en.wikipedia.org/wiki/Year_2038_problem)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to add/update tests as appropriate.

```bash
# Build and run tests
npm test

# Compile TypeScript into ./build
tsc

# Build for distribution
gulp
```

## License
[ISC](https://choosealicense.com/licenses/isc/)