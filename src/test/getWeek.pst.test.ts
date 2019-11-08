import { getWeek } from '../getWeek';

describe('Timezones', () => {
  it('should always be UTC', () => {
      expect(new Date().getTimezoneOffset()).toBe(0);
  });
});

// Sunday
{
  test('Sunday 12am', () => {
    expect(getWeek(new Date("2019-11-03T00:00:00.000Z"), 480)).toBe(2600);
  });
  test('Sunday 1am', () => {
    expect(getWeek(new Date("2019-11-03T01:00:00.000Z"), 480)).toBe(2600);
  });
  test('Sunday 2am', () => {
    expect(getWeek(new Date("2019-11-03T02:00:00.000Z"), 480)).toBe(2600);
  });
  test('Sunday 3am', () => {
    expect(getWeek(new Date("2019-11-03T03:00:00.000Z"), 480)).toBe(2600);
  });
  test('Sunday 4am', () => {
    expect(getWeek(new Date("2019-11-03T04:00:00.000Z"), 480)).toBe(2600);
  });
  test('Sunday 5am', () => {
    expect(getWeek(new Date("2019-11-03T05:00:00.000Z"), 480)).toBe(2600);
  });
  test('Sunday 6am', () => {
    expect(getWeek(new Date("2019-11-03T06:00:00.000Z"), 480)).toBe(2600);
  });
  test('Sunday 7am', () => {
    expect(getWeek(new Date("2019-11-03T07:00:00.000Z"), 480)).toBe(2600);
  });
  test('Sunday 8am', () => {
    expect(getWeek(new Date("2019-11-03T08:00:00.000Z"), 480)).toBe(2600);
  });
  test('Sunday 9am', () => {
    expect(getWeek(new Date("2019-11-03T09:00:00.000Z"), 480)).toBe(2600);
  });
  test('Sunday 10am', () => {
    expect(getWeek(new Date("2019-11-03T10:00:00.000Z"), 480)).toBe(2600);
  });
  test('Sunday 11am', () => {
    expect(getWeek(new Date("2019-11-03T11:00:00.000Z"), 480)).toBe(2600);
  });
  test('Sunday 12pm', () => {
    expect(getWeek(new Date("2019-11-03T12:00:00.000Z"), 480)).toBe(2600);
  });
  test('Sunday 1pm', () => {
    expect(getWeek(new Date("2019-11-03T13:00:00.000Z"), 480)).toBe(2600);
  });
  test('Sunday 2pm', () => {
    expect(getWeek(new Date("2019-11-03T14:00:00.000Z"), 480)).toBe(2600);
  });
  test('Sunday 3pm', () => {
    expect(getWeek(new Date("2019-11-03T15:00:00.000Z"), 480)).toBe(2600);
  });
  test('Sunday 4pm', () => {
    expect(getWeek(new Date("2019-11-03T16:00:00.000Z"), 480)).toBe(2600);
  });
  test('Sunday 5pm', () => {
    expect(getWeek(new Date("2019-11-03T17:00:00.000Z"), 480)).toBe(2600);
  });
  test('Sunday 6pm', () => {
    expect(getWeek(new Date("2019-11-03T18:00:00.000Z"), 480)).toBe(2600);
  });
  test('Sunday 7pm', () => {
    expect(getWeek(new Date("2019-11-03T19:00:00.000Z"), 480)).toBe(2600);
  });
  test('Sunday 8pm', () => {
    expect(getWeek(new Date("2019-11-03T20:00:00.000Z"), 480)).toBe(2600);
  });
  test('Sunday 9pm', () => {
    expect(getWeek(new Date("2019-11-03T21:00:00.000Z"), 480)).toBe(2600);
  });
  test('Sunday 10pm', () => {
    expect(getWeek(new Date("2019-11-03T22:00:00.000Z"), 480)).toBe(2600);
  });
  test('Sunday 11pm', () => {
    expect(getWeek(new Date("2019-11-03T23:00:00.000Z"), 480)).toBe(2600);
  });
}

// Monday
{
  test('Monday 12am', () => {
    expect(getWeek(new Date("2019-11-04T00:00:00.000Z"), 480)).toBe(2600);
  });
  test('Monday 1am', () => {
    expect(getWeek(new Date("2019-11-04T01:00:00.000Z"), 480)).toBe(2600);
  });
  test('Monday 2am', () => {
    expect(getWeek(new Date("2019-11-04T02:00:00.000Z"), 480)).toBe(2600);
  });
  test('Monday 3am', () => {
    expect(getWeek(new Date("2019-11-04T03:00:00.000Z"), 480)).toBe(2600);
  });
  test('Monday 4am', () => {
    expect(getWeek(new Date("2019-11-04T04:00:00.000Z"), 480)).toBe(2600);
  });
  test('Monday 5am', () => {
    expect(getWeek(new Date("2019-11-04T05:00:00.000Z"), 480)).toBe(2600);
  });
  test('Monday 6am', () => {
    expect(getWeek(new Date("2019-11-04T06:00:00.000Z"), 480)).toBe(2600);
  });
  test('Monday 7am', () => {
    expect(getWeek(new Date("2019-11-04T07:00:00.000Z"), 480)).toBe(2600);
  });
  test('Monday 8am', () => {
    expect(getWeek(new Date("2019-11-04T08:00:00.000Z"), 480)).toBe(2601);
  });
  test('Monday 9am', () => {
    expect(getWeek(new Date("2019-11-04T09:00:00.000Z"), 480)).toBe(2601);
  });
  test('Monday 10am', () => {
    expect(getWeek(new Date("2019-11-04T10:00:00.000Z"), 480)).toBe(2601);
  });
  test('Monday 11am', () => {
    expect(getWeek(new Date("2019-11-04T11:00:00.000Z"), 480)).toBe(2601);
  });
  test('Monday 12pm', () => {
    expect(getWeek(new Date("2019-11-04T12:00:00.000Z"), 480)).toBe(2601);
  });
  test('Monday 1pm', () => {
    expect(getWeek(new Date("2019-11-04T13:00:00.000Z"), 480)).toBe(2601);
  });
  test('Monday 2pm', () => {
    expect(getWeek(new Date("2019-11-04T14:00:00.000Z"), 480)).toBe(2601);
  });
  test('Monday 3pm', () => {
    expect(getWeek(new Date("2019-11-04T15:00:00.000Z"), 480)).toBe(2601);
  });
  test('Monday 4pm', () => {
    expect(getWeek(new Date("2019-11-04T16:00:00.000Z"), 480)).toBe(2601);
  });
  test('Monday 5pm', () => {
    expect(getWeek(new Date("2019-11-04T17:00:00.000Z"), 480)).toBe(2601);
  });
  test('Monday 6pm', () => {
    expect(getWeek(new Date("2019-11-04T18:00:00.000Z"), 480)).toBe(2601);
  });
  test('Monday 7pm', () => {
    expect(getWeek(new Date("2019-11-04T19:00:00.000Z"), 480)).toBe(2601);
  });
  test('Monday 8pm', () => {
    expect(getWeek(new Date("2019-11-04T20:00:00.000Z"), 480)).toBe(2601);
  });
  test('Monday 9pm', () => {
    expect(getWeek(new Date("2019-11-04T21:00:00.000Z"), 480)).toBe(2601);
  });
  test('Monday 10pm', () => {
    expect(getWeek(new Date("2019-11-04T22:00:00.000Z"), 480)).toBe(2601);
  });
  test('Monday 11pm', () => {
    expect(getWeek(new Date("2019-11-04T23:00:00.000Z"), 480)).toBe(2601);
  });
}

// Tuesday
{
  test('Tuesday 12am', () => {
    expect(getWeek(new Date("2019-11-05T00:00:00.000Z"), 480)).toBe(2601);
  });
  test('Tuesday 1am', () => {
    expect(getWeek(new Date("2019-11-05T01:00:00.000Z"), 480)).toBe(2601);
  });
  test('Tuesday 2am', () => {
    expect(getWeek(new Date("2019-11-05T02:00:00.000Z"), 480)).toBe(2601);
  });
  test('Tuesday 3am', () => {
    expect(getWeek(new Date("2019-11-05T03:00:00.000Z"), 480)).toBe(2601);
  });
  test('Tuesday 4am', () => {
    expect(getWeek(new Date("2019-11-05T04:00:00.000Z"), 480)).toBe(2601);
  });
  test('Tuesday 5am', () => {
    expect(getWeek(new Date("2019-11-05T05:00:00.000Z"), 480)).toBe(2601);
  });
  test('Tuesday 6am', () => {
    expect(getWeek(new Date("2019-11-05T06:00:00.000Z"), 480)).toBe(2601);
  });
  test('Tuesday 7am', () => {
    expect(getWeek(new Date("2019-11-05T07:00:00.000Z"), 480)).toBe(2601);
  });
  test('Tuesday 8am', () => {
    expect(getWeek(new Date("2019-11-05T08:00:00.000Z"), 480)).toBe(2601);
  });
  test('Tuesday 9am', () => {
    expect(getWeek(new Date("2019-11-05T09:00:00.000Z"), 480)).toBe(2601);
  });
  test('Tuesday 10am', () => {
    expect(getWeek(new Date("2019-11-05T10:00:00.000Z"), 480)).toBe(2601);
  });
  test('Tuesday 11am', () => {
    expect(getWeek(new Date("2019-11-05T11:00:00.000Z"), 480)).toBe(2601);
  });
  test('Tuesday 12pm', () => {
    expect(getWeek(new Date("2019-11-05T12:00:00.000Z"), 480)).toBe(2601);
  });
  test('Tuesday 1pm', () => {
    expect(getWeek(new Date("2019-11-05T13:00:00.000Z"), 480)).toBe(2601);
  });
  test('Tuesday 2pm', () => {
    expect(getWeek(new Date("2019-11-05T14:00:00.000Z"), 480)).toBe(2601);
  });
  test('Tuesday 3pm', () => {
    expect(getWeek(new Date("2019-11-05T15:00:00.000Z"), 480)).toBe(2601);
  });
  test('Tuesday 4pm', () => {
    expect(getWeek(new Date("2019-11-05T16:00:00.000Z"), 480)).toBe(2601);
  });
  test('Tuesday 5pm', () => {
    expect(getWeek(new Date("2019-11-05T17:00:00.000Z"), 480)).toBe(2601);
  });
  test('Tuesday 6pm', () => {
    expect(getWeek(new Date("2019-11-05T18:00:00.000Z"), 480)).toBe(2601);
  });
  test('Tuesday 7pm', () => {
    expect(getWeek(new Date("2019-11-05T19:00:00.000Z"), 480)).toBe(2601);
  });
  test('Tuesday 8pm', () => {
    expect(getWeek(new Date("2019-11-05T20:00:00.000Z"), 480)).toBe(2601);
  });
  test('Tuesday 9pm', () => {
    expect(getWeek(new Date("2019-11-05T21:00:00.000Z"), 480)).toBe(2601);
  });
  test('Tuesday 10pm', () => {
    expect(getWeek(new Date("2019-11-05T22:00:00.000Z"), 480)).toBe(2601);
  });
  test('Tuesday 11pm', () => {
    expect(getWeek(new Date("2019-11-05T23:00:00.000Z"), 480)).toBe(2601);
  });
}

// Wednesday
{
  test('Wednesday 12am', () => {
    expect(getWeek(new Date("2019-11-06T00:00:00.000Z"), 480)).toBe(2601);
  });
  test('Wednesday 1am', () => {
    expect(getWeek(new Date("2019-11-06T01:00:00.000Z"), 480)).toBe(2601);
  });
  test('Wednesday 2am', () => {
    expect(getWeek(new Date("2019-11-06T02:00:00.000Z"), 480)).toBe(2601);
  });
  test('Wednesday 3am', () => {
    expect(getWeek(new Date("2019-11-06T03:00:00.000Z"), 480)).toBe(2601);
  });
  test('Wednesday 4am', () => {
    expect(getWeek(new Date("2019-11-06T04:00:00.000Z"), 480)).toBe(2601);
  });
  test('Wednesday 5am', () => {
    expect(getWeek(new Date("2019-11-06T05:00:00.000Z"), 480)).toBe(2601);
  });
  test('Wednesday 6am', () => {
    expect(getWeek(new Date("2019-11-06T06:00:00.000Z"), 480)).toBe(2601);
  });
  test('Wednesday 7am', () => {
    expect(getWeek(new Date("2019-11-06T07:00:00.000Z"), 480)).toBe(2601);
  });
  test('Wednesday 8am', () => {
    expect(getWeek(new Date("2019-11-06T08:00:00.000Z"), 480)).toBe(2601);
  });
  test('Wednesday 9am', () => {
    expect(getWeek(new Date("2019-11-06T09:00:00.000Z"), 480)).toBe(2601);
  });
  test('Wednesday 10am', () => {
    expect(getWeek(new Date("2019-11-06T10:00:00.000Z"), 480)).toBe(2601);
  });
  test('Wednesday 11am', () => {
    expect(getWeek(new Date("2019-11-06T11:00:00.000Z"), 480)).toBe(2601);
  });
  test('Wednesday 12pm', () => {
    expect(getWeek(new Date("2019-11-06T12:00:00.000Z"), 480)).toBe(2601);
  });
  test('Wednesday 1pm', () => {
    expect(getWeek(new Date("2019-11-06T13:00:00.000Z"), 480)).toBe(2601);
  });
  test('Wednesday 2pm', () => {
    expect(getWeek(new Date("2019-11-06T14:00:00.000Z"), 480)).toBe(2601);
  });
  test('Wednesday 3pm', () => {
    expect(getWeek(new Date("2019-11-06T15:00:00.000Z"), 480)).toBe(2601);
  });
  test('Wednesday 4pm', () => {
    expect(getWeek(new Date("2019-11-06T16:00:00.000Z"), 480)).toBe(2601);
  });
  test('Wednesday 5pm', () => {
    expect(getWeek(new Date("2019-11-06T17:00:00.000Z"), 480)).toBe(2601);
  });
  test('Wednesday 6pm', () => {
    expect(getWeek(new Date("2019-11-06T18:00:00.000Z"), 480)).toBe(2601);
  });
  test('Wednesday 7pm', () => {
    expect(getWeek(new Date("2019-11-06T19:00:00.000Z"), 480)).toBe(2601);
  });
  test('Wednesday 8pm', () => {
    expect(getWeek(new Date("2019-11-06T20:00:00.000Z"), 480)).toBe(2601);
  });
  test('Wednesday 9pm', () => {
    expect(getWeek(new Date("2019-11-06T21:00:00.000Z"), 480)).toBe(2601);
  });
  test('Wednesday 10pm', () => {
    expect(getWeek(new Date("2019-11-06T22:00:00.000Z"), 480)).toBe(2601);
  });
  test('Wednesday 11pm', () => {
    expect(getWeek(new Date("2019-11-06T23:00:00.000Z"), 480)).toBe(2601);
  });
}

// Thursday
{
  test('Thursday 12am', () => {
    expect(getWeek(new Date("2019-11-07T00:00:00.000Z"), 480)).toBe(2601);
  });
  test('Thursday 1am', () => {
    expect(getWeek(new Date("2019-11-07T01:00:00.000Z"), 480)).toBe(2601);
  });
  test('Thursday 2am', () => {
    expect(getWeek(new Date("2019-11-07T02:00:00.000Z"), 480)).toBe(2601);
  });
  test('Thursday 3am', () => {
    expect(getWeek(new Date("2019-11-07T03:00:00.000Z"), 480)).toBe(2601);
  });
  test('Thursday 4am', () => {
    expect(getWeek(new Date("2019-11-07T04:00:00.000Z"), 480)).toBe(2601);
  });
  test('Thursday 5am', () => {
    expect(getWeek(new Date("2019-11-07T05:00:00.000Z"), 480)).toBe(2601);
  });
  test('Thursday 6am', () => {
    expect(getWeek(new Date("2019-11-07T06:00:00.000Z"), 480)).toBe(2601);
  });
  test('Thursday 7am', () => {
    expect(getWeek(new Date("2019-11-07T07:00:00.000Z"), 480)).toBe(2601);
  });
  test('Thursday 8am', () => {
    expect(getWeek(new Date("2019-11-07T08:00:00.000Z"), 480)).toBe(2601);
  });
  test('Thursday 9am', () => {
    expect(getWeek(new Date("2019-11-07T09:00:00.000Z"), 480)).toBe(2601);
  });
  test('Thursday 10am', () => {
    expect(getWeek(new Date("2019-11-07T10:00:00.000Z"), 480)).toBe(2601);
  });
  test('Thursday 11am', () => {
    expect(getWeek(new Date("2019-11-07T11:00:00.000Z"), 480)).toBe(2601);
  });
  test('Thursday 12pm', () => {
    expect(getWeek(new Date("2019-11-07T12:00:00.000Z"), 480)).toBe(2601);
  });
  test('Thursday 1pm', () => {
    expect(getWeek(new Date("2019-11-07T13:00:00.000Z"), 480)).toBe(2601);
  });
  test('Thursday 2pm', () => {
    expect(getWeek(new Date("2019-11-07T14:00:00.000Z"), 480)).toBe(2601);
  });
  test('Thursday 3pm', () => {
    expect(getWeek(new Date("2019-11-07T15:00:00.000Z"), 480)).toBe(2601);
  });
  test('Thursday 4pm', () => {
    expect(getWeek(new Date("2019-11-07T16:00:00.000Z"), 480)).toBe(2601);
  });
  test('Thursday 5pm', () => {
    expect(getWeek(new Date("2019-11-07T17:00:00.000Z"), 480)).toBe(2601);
  });
  test('Thursday 6pm', () => {
    expect(getWeek(new Date("2019-11-07T18:00:00.000Z"), 480)).toBe(2601);
  });
  test('Thursday 7pm', () => {
    expect(getWeek(new Date("2019-11-07T19:00:00.000Z"), 480)).toBe(2601);
  });
  test('Thursday 8pm', () => {
    expect(getWeek(new Date("2019-11-07T20:00:00.000Z"), 480)).toBe(2601);
  });
  test('Thursday 9pm', () => {
    expect(getWeek(new Date("2019-11-07T21:00:00.000Z"), 480)).toBe(2601);
  });
  test('Thursday 10pm', () => {
    expect(getWeek(new Date("2019-11-07T22:00:00.000Z"), 480)).toBe(2601);
  });
  test('Thursday 11pm', () => {
    expect(getWeek(new Date("2019-11-07T23:00:00.000Z"), 480)).toBe(2601);
  });
}

// Friday
{
  test('Friday 12am', () => {
    expect(getWeek(new Date("2019-11-08T00:00:00.000Z"), 480)).toBe(2601);
  });
  test('Friday 1am', () => {
    expect(getWeek(new Date("2019-11-08T01:00:00.000Z"), 480)).toBe(2601);
  });
  test('Friday 2am', () => {
    expect(getWeek(new Date("2019-11-08T02:00:00.000Z"), 480)).toBe(2601);
  });
  test('Friday 3am', () => {
    expect(getWeek(new Date("2019-11-08T03:00:00.000Z"), 480)).toBe(2601);
  });
  test('Friday 4am', () => {
    expect(getWeek(new Date("2019-11-08T04:00:00.000Z"), 480)).toBe(2601);
  });
  test('Friday 5am', () => {
    expect(getWeek(new Date("2019-11-08T05:00:00.000Z"), 480)).toBe(2601);
  });
  test('Friday 6am', () => {
    expect(getWeek(new Date("2019-11-08T06:00:00.000Z"), 480)).toBe(2601);
  });
  test('Friday 7am', () => {
    expect(getWeek(new Date("2019-11-08T07:00:00.000Z"), 480)).toBe(2601);
  });
  test('Friday 8am', () => {
    expect(getWeek(new Date("2019-11-08T08:00:00.000Z"), 480)).toBe(2601);
  });
  test('Friday 9am', () => {
    expect(getWeek(new Date("2019-11-08T09:00:00.000Z"), 480)).toBe(2601);
  });
  test('Friday 10am', () => {
    expect(getWeek(new Date("2019-11-08T10:00:00.000Z"), 480)).toBe(2601);
  });
  test('Friday 11am', () => {
    expect(getWeek(new Date("2019-11-08T11:00:00.000Z"), 480)).toBe(2601);
  });
  test('Friday 12pm', () => {
    expect(getWeek(new Date("2019-11-08T12:00:00.000Z"), 480)).toBe(2601);
  });
  test('Friday 1pm', () => {
    expect(getWeek(new Date("2019-11-08T13:00:00.000Z"), 480)).toBe(2601);
  });
  test('Friday 2pm', () => {
    expect(getWeek(new Date("2019-11-08T14:00:00.000Z"), 480)).toBe(2601);
  });
  test('Friday 3pm', () => {
    expect(getWeek(new Date("2019-11-08T15:00:00.000Z"), 480)).toBe(2601);
  });
  test('Friday 4pm', () => {
    expect(getWeek(new Date("2019-11-08T16:00:00.000Z"), 480)).toBe(2601);
  });
  test('Friday 5pm', () => {
    expect(getWeek(new Date("2019-11-08T17:00:00.000Z"), 480)).toBe(2601);
  });
  test('Friday 6pm', () => {
    expect(getWeek(new Date("2019-11-08T18:00:00.000Z"), 480)).toBe(2601);
  });
  test('Friday 7pm', () => {
    expect(getWeek(new Date("2019-11-08T19:00:00.000Z"), 480)).toBe(2601);
  });
  test('Friday 8pm', () => {
    expect(getWeek(new Date("2019-11-08T20:00:00.000Z"), 480)).toBe(2601);
  });
  test('Friday 9pm', () => {
    expect(getWeek(new Date("2019-11-08T21:00:00.000Z"), 480)).toBe(2601);
  });
  test('Friday 10pm', () => {
    expect(getWeek(new Date("2019-11-08T22:00:00.000Z"), 480)).toBe(2601);
  });
  test('Friday 11pm', () => {
    expect(getWeek(new Date("2019-11-08T23:00:00.000Z"), 480)).toBe(2601);
  });
}

// Saturday
{
  test('Saturday 12am', () => {
    expect(getWeek(new Date("2019-11-09T00:00:00.000Z"), 480)).toBe(2601);
  });
  test('Saturday 1am', () => {
    expect(getWeek(new Date("2019-11-09T01:00:00.000Z"), 480)).toBe(2601);
  });
  test('Saturday 2am', () => {
    expect(getWeek(new Date("2019-11-09T02:00:00.000Z"), 480)).toBe(2601);
  });
  test('Saturday 3am', () => {
    expect(getWeek(new Date("2019-11-09T03:00:00.000Z"), 480)).toBe(2601);
  });
  test('Saturday 4am', () => {
    expect(getWeek(new Date("2019-11-09T04:00:00.000Z"), 480)).toBe(2601);
  });
  test('Saturday 5am', () => {
    expect(getWeek(new Date("2019-11-09T05:00:00.000Z"), 480)).toBe(2601);
  });
  test('Saturday 6am', () => {
    expect(getWeek(new Date("2019-11-09T06:00:00.000Z"), 480)).toBe(2601);
  });
  test('Saturday 7am', () => {
    expect(getWeek(new Date("2019-11-09T07:00:00.000Z"), 480)).toBe(2601);
  });
  test('Saturday 8am', () => {
    expect(getWeek(new Date("2019-11-09T08:00:00.000Z"), 480)).toBe(2601);
  });
  test('Saturday 9am', () => {
    expect(getWeek(new Date("2019-11-09T09:00:00.000Z"), 480)).toBe(2601);
  });
  test('Saturday 10am', () => {
    expect(getWeek(new Date("2019-11-09T10:00:00.000Z"), 480)).toBe(2601);
  });
  test('Saturday 11am', () => {
    expect(getWeek(new Date("2019-11-09T11:00:00.000Z"), 480)).toBe(2601);
  });
  test('Saturday 12pm', () => {
    expect(getWeek(new Date("2019-11-09T12:00:00.000Z"), 480)).toBe(2601);
  });
  test('Saturday 1pm', () => {
    expect(getWeek(new Date("2019-11-09T13:00:00.000Z"), 480)).toBe(2601);
  });
  test('Saturday 2pm', () => {
    expect(getWeek(new Date("2019-11-09T14:00:00.000Z"), 480)).toBe(2601);
  });
  test('Saturday 3pm', () => {
    expect(getWeek(new Date("2019-11-09T15:00:00.000Z"), 480)).toBe(2601);
  });
  test('Saturday 4pm', () => {
    expect(getWeek(new Date("2019-11-09T16:00:00.000Z"), 480)).toBe(2601);
  });
  test('Saturday 5pm', () => {
    expect(getWeek(new Date("2019-11-09T17:00:00.000Z"), 480)).toBe(2601);
  });
  test('Saturday 6pm', () => {
    expect(getWeek(new Date("2019-11-09T18:00:00.000Z"), 480)).toBe(2601);
  });
  test('Saturday 7pm', () => {
    expect(getWeek(new Date("2019-11-09T19:00:00.000Z"), 480)).toBe(2601);
  });
  test('Saturday 8pm', () => {
    expect(getWeek(new Date("2019-11-09T20:00:00.000Z"), 480)).toBe(2601);
  });
  test('Saturday 9pm', () => {
    expect(getWeek(new Date("2019-11-09T21:00:00.000Z"), 480)).toBe(2601);
  });
  test('Saturday 10pm', () => {
    expect(getWeek(new Date("2019-11-09T22:00:00.000Z"), 480)).toBe(2601);
  });
  test('Saturday 11pm', () => {
    expect(getWeek(new Date("2019-11-09T23:00:00.000Z"), 480)).toBe(2601);
  });
}


test.todo("Test daylight savings time changes")

test.todo("Test epoch weeks")

test.todo("Test different days of the week starts")

test.todo("End/begining of year")