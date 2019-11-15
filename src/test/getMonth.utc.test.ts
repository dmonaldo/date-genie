import { getMonth } from '../getMonth';

describe('Timezones', () => {
  it('should always be UTC', () => {
      expect(new Date().getTimezoneOffset()).toBe(0);
  });
});

// October 31st, 2019
{
    test('October 31st, 12am', () => {
        expect(getMonth(new Date("2019-10-31T00:00:00.000Z"), 0)).toBe(598);
    });
    test('October 31st, 1am', () => {
        expect(getMonth(new Date("2019-10-31T01:00:00.000Z"), 0)).toBe(598);
    });
    test('October 31st, 2am', () => {
        expect(getMonth(new Date("2019-10-31T02:00:00.000Z"), 0)).toBe(598);
    });
    test('October 31st, 3am', () => {
        expect(getMonth(new Date("2019-10-31T03:00:00.000Z"), 0)).toBe(598);
    });
    test('October 31st, 4am', () => {
        expect(getMonth(new Date("2019-10-31T04:00:00.000Z"), 0)).toBe(598);
    });
    test('October 31st, 5am', () => {
        expect(getMonth(new Date("2019-10-31T05:00:00.000Z"), 0)).toBe(598);
    });
    test('October 31st, 6am', () => {
        expect(getMonth(new Date("2019-10-31T06:00:00.000Z"), 0)).toBe(598);
    });
    test('October 31st, 7am', () => {
        expect(getMonth(new Date("2019-10-31T07:00:00.000Z"), 0)).toBe(598);
    });
    test('October 31st, 8am', () => {
        expect(getMonth(new Date("2019-10-31T08:00:00.000Z"), 0)).toBe(598);
    });
    test('October 31st, 9am', () => {
        expect(getMonth(new Date("2019-10-31T09:00:00.000Z"), 0)).toBe(598);
    });
    test('October 31st, 10am', () => {
        expect(getMonth(new Date("2019-10-31T10:00:00.000Z"), 0)).toBe(598);
    });
    test('October 31st, 11am', () => {
        expect(getMonth(new Date("2019-10-31T11:00:00.000Z"), 0)).toBe(598);
    });
    test('October 31st, 12pm', () => {
        expect(getMonth(new Date("2019-10-31T12:00:00.000Z"), 0)).toBe(598);
    });
    test('October 31st, 1pm', () => {
        expect(getMonth(new Date("2019-10-31T13:00:00.000Z"), 0)).toBe(598);
    });
    test('October 31st, 2pm', () => {
        expect(getMonth(new Date("2019-10-31T14:00:00.000Z"), 0)).toBe(598);
    });
    test('October 31st, 3pm', () => {
        expect(getMonth(new Date("2019-10-31T15:00:00.000Z"), 0)).toBe(598);
    });
    test('October 31st, 4pm', () => {
        expect(getMonth(new Date("2019-10-31T16:00:00.000Z"), 0)).toBe(598);
    });
    test('October 31st, 5pm', () => {
        expect(getMonth(new Date("2019-10-31T17:00:00.000Z"), 0)).toBe(598);
    });
    test('October 31st, 6pm', () => {
        expect(getMonth(new Date("2019-10-31T18:00:00.000Z"), 0)).toBe(598);
    });
    test('October 31st, 7pm', () => {
        expect(getMonth(new Date("2019-10-31T19:00:00.000Z"), 0)).toBe(598);
    });
    test('October 31st, 8pm', () => {
        expect(getMonth(new Date("2019-10-31T20:00:00.000Z"), 0)).toBe(598);
    });
    test('October 31st, 9pm', () => {
        expect(getMonth(new Date("2019-10-31T21:00:00.000Z"), 0)).toBe(598);
    });
    test('October 31st, 10pm', () => {
        expect(getMonth(new Date("2019-10-31T22:00:00.000Z"), 0)).toBe(598);
    });
    test('October 31st, 11pm', () => {
        expect(getMonth(new Date("2019-10-31T23:00:00.000Z"), 0)).toBe(598);
    });
}

// November 1st, 2019
{
    test('November 1st, 12am', () => {
        expect(getMonth(new Date("2019-11-01T00:00:00.000Z"), 0)).toBe(599);
    });
    test('November 1st, 1am', () => {
        expect(getMonth(new Date("2019-11-01T01:00:00.000Z"), 0)).toBe(599);
    });
    test('November 1st, 2am', () => {
        expect(getMonth(new Date("2019-11-01T02:00:00.000Z"), 0)).toBe(599);
    });
    test('November 1st, 3am', () => {
        expect(getMonth(new Date("2019-11-01T03:00:00.000Z"), 0)).toBe(599);
    });
    test('November 1st, 4am', () => {
        expect(getMonth(new Date("2019-11-01T04:00:00.000Z"), 0)).toBe(599);
    });
    test('November 1st, 5am', () => {
        expect(getMonth(new Date("2019-11-01T05:00:00.000Z"), 0)).toBe(599);
    });
    test('November 1st, 6am', () => {
        expect(getMonth(new Date("2019-11-01T06:00:00.000Z"), 0)).toBe(599);
    });
    test('November 1st, 7am', () => {
        expect(getMonth(new Date("2019-11-01T07:00:00.000Z"), 0)).toBe(599);
    });
    test('November 1st, 8am', () => {
        expect(getMonth(new Date("2019-11-01T08:00:00.000Z"), 0)).toBe(599);
    });
    test('November 1st, 9am', () => {
        expect(getMonth(new Date("2019-11-01T09:00:00.000Z"), 0)).toBe(599);
    });
    test('November 1st, 10am', () => {
        expect(getMonth(new Date("2019-11-01T10:00:00.000Z"), 0)).toBe(599);
    });
    test('November 1st, 11am', () => {
        expect(getMonth(new Date("2019-11-01T11:00:00.000Z"), 0)).toBe(599);
    });
    test('November 1st, 12pm', () => {
        expect(getMonth(new Date("2019-11-01T12:00:00.000Z"), 0)).toBe(599);
    });
    test('November 1st, 1pm', () => {
        expect(getMonth(new Date("2019-11-01T13:00:00.000Z"), 0)).toBe(599);
    });
    test('November 1st, 2pm', () => {
        expect(getMonth(new Date("2019-11-01T14:00:00.000Z"), 0)).toBe(599);
    });
    test('November 1st, 3pm', () => {
        expect(getMonth(new Date("2019-11-01T15:00:00.000Z"), 0)).toBe(599);
    });
    test('November 1st, 4pm', () => {
        expect(getMonth(new Date("2019-11-01T16:00:00.000Z"), 0)).toBe(599);
    });
    test('November 1st, 5pm', () => {
        expect(getMonth(new Date("2019-11-01T17:00:00.000Z"), 0)).toBe(599);
    });
    test('November 1st, 6pm', () => {
        expect(getMonth(new Date("2019-11-01T18:00:00.000Z"), 0)).toBe(599);
    });
    test('November 1st, 7pm', () => {
        expect(getMonth(new Date("2019-11-01T19:00:00.000Z"), 0)).toBe(599);
    });
    test('November 1st, 8pm', () => {
        expect(getMonth(new Date("2019-11-01T20:00:00.000Z"), 0)).toBe(599);
    });
    test('November 1st, 9pm', () => {
        expect(getMonth(new Date("2019-11-01T21:00:00.000Z"), 0)).toBe(599);
    });
    test('November 1st, 10pm', () => {
        expect(getMonth(new Date("2019-11-01T22:00:00.000Z"), 0)).toBe(599);
    });
    test('November 1st, 11pm', () => {
        expect(getMonth(new Date("2019-11-01T23:00:00.000Z"), 0)).toBe(599);
    });
}

// December 31st, 2019
{
    test('December 31st, 12am', () => {
        expect(getMonth(new Date("2019-12-31T00:00:00.000Z"), 0)).toBe(600);
    });
    test('December 31st, 1am', () => {
        expect(getMonth(new Date("2019-12-31T01:00:00.000Z"), 0)).toBe(600);
    });
    test('December 31st, 2am', () => {
        expect(getMonth(new Date("2019-12-31T02:00:00.000Z"), 0)).toBe(600);
    });
    test('December 31st, 3am', () => {
        expect(getMonth(new Date("2019-12-31T03:00:00.000Z"), 0)).toBe(600);
    });
    test('December 31st, 4am', () => {
        expect(getMonth(new Date("2019-12-31T04:00:00.000Z"), 0)).toBe(600);
    });
    test('December 31st, 5am', () => {
        expect(getMonth(new Date("2019-12-31T05:00:00.000Z"), 0)).toBe(600);
    });
    test('December 31st, 6am', () => {
        expect(getMonth(new Date("2019-12-31T06:00:00.000Z"), 0)).toBe(600);
    });
    test('December 31st, 7am', () => {
        expect(getMonth(new Date("2019-12-31T07:00:00.000Z"), 0)).toBe(600);
    });
    test('December 31st, 8am', () => {
        expect(getMonth(new Date("2019-12-31T08:00:00.000Z"), 0)).toBe(600);
    });
    test('December 31st, 9am', () => {
        expect(getMonth(new Date("2019-12-31T09:00:00.000Z"), 0)).toBe(600);
    });
    test('December 31st, 10am', () => {
        expect(getMonth(new Date("2019-12-31T10:00:00.000Z"), 0)).toBe(600);
    });
    test('December 31st, 11am', () => {
        expect(getMonth(new Date("2019-12-31T11:00:00.000Z"), 0)).toBe(600);
    });
    test('December 31st, 12pm', () => {
        expect(getMonth(new Date("2019-12-31T12:00:00.000Z"), 0)).toBe(600);
    });
    test('December 31st, 1pm', () => {
        expect(getMonth(new Date("2019-12-31T13:00:00.000Z"), 0)).toBe(600);
    });
    test('December 31st, 2pm', () => {
        expect(getMonth(new Date("2019-12-31T14:00:00.000Z"), 0)).toBe(600);
    });
    test('December 31st, 3pm', () => {
        expect(getMonth(new Date("2019-12-31T15:00:00.000Z"), 0)).toBe(600);
    });
    test('December 31st, 4pm', () => {
        expect(getMonth(new Date("2019-12-31T16:00:00.000Z"), 0)).toBe(600);
    });
    test('December 31st, 5pm', () => {
        expect(getMonth(new Date("2019-12-31T17:00:00.000Z"), 0)).toBe(600);
    });
    test('December 31st, 6pm', () => {
        expect(getMonth(new Date("2019-12-31T18:00:00.000Z"), 0)).toBe(600);
    });
    test('December 31st, 7pm', () => {
        expect(getMonth(new Date("2019-12-31T19:00:00.000Z"), 0)).toBe(600);
    });
    test('December 31st, 8pm', () => {
        expect(getMonth(new Date("2019-12-31T20:00:00.000Z"), 0)).toBe(600);
    });
    test('December 31st, 9pm', () => {
        expect(getMonth(new Date("2019-12-31T21:00:00.000Z"), 0)).toBe(600);
    });
    test('December 31st, 10pm', () => {
        expect(getMonth(new Date("2019-12-31T22:00:00.000Z"), 0)).toBe(600);
    });
    test('December 31st, 11pm', () => {
        expect(getMonth(new Date("2019-12-31T23:00:00.000Z"), 0)).toBe(600);
    });
}
  
// January 1st, 2020
{
    test('January 1st, 12am', () => {
        expect(getMonth(new Date("2020-01-01T00:00:00.000Z"), 0)).toBe(601);
    });
    test('January 1st, 1am', () => {
        expect(getMonth(new Date("2020-01-01T01:00:00.000Z"), 0)).toBe(601);
    });
    test('January 1st, 2am', () => {
        expect(getMonth(new Date("2020-01-01T02:00:00.000Z"), 0)).toBe(601);
    });
    test('January 1st, 3am', () => {
        expect(getMonth(new Date("2020-01-01T03:00:00.000Z"), 0)).toBe(601);
    });
    test('January 1st, 4am', () => {
        expect(getMonth(new Date("2020-01-01T04:00:00.000Z"), 0)).toBe(601);
    });
    test('January 1st, 5am', () => {
        expect(getMonth(new Date("2020-01-01T05:00:00.000Z"), 0)).toBe(601);
    });
    test('January 1st, 6am', () => {
        expect(getMonth(new Date("2020-01-01T06:00:00.000Z"), 0)).toBe(601);
    });
    test('January 1st, 7am', () => {
        expect(getMonth(new Date("2020-01-01T07:00:00.000Z"), 0)).toBe(601);
    });
    test('January 1st, 8am', () => {
        expect(getMonth(new Date("2020-01-01T08:00:00.000Z"), 0)).toBe(601);
    });
    test('January 1st, 9am', () => {
        expect(getMonth(new Date("2020-01-01T09:00:00.000Z"), 0)).toBe(601);
    });
    test('January 1st, 10am', () => {
        expect(getMonth(new Date("2020-01-01T10:00:00.000Z"), 0)).toBe(601);
    });
    test('January 1st, 11am', () => {
        expect(getMonth(new Date("2020-01-01T11:00:00.000Z"), 0)).toBe(601);
    });
    test('January 1st, 12pm', () => {
        expect(getMonth(new Date("2020-01-01T12:00:00.000Z"), 0)).toBe(601);
    });
    test('January 1st, 1pm', () => {
        expect(getMonth(new Date("2020-01-01T13:00:00.000Z"), 0)).toBe(601);
    });
    test('January 1st, 2pm', () => {
        expect(getMonth(new Date("2020-01-01T14:00:00.000Z"), 0)).toBe(601);
    });
    test('January 1st, 3pm', () => {
        expect(getMonth(new Date("2020-01-01T15:00:00.000Z"), 0)).toBe(601);
    });
    test('January 1st, 4pm', () => {
        expect(getMonth(new Date("2020-01-01T16:00:00.000Z"), 0)).toBe(601);
    });
    test('January 1st, 5pm', () => {
        expect(getMonth(new Date("2020-01-01T17:00:00.000Z"), 0)).toBe(601);
    });
    test('January 1st, 6pm', () => {
        expect(getMonth(new Date("2020-01-01T18:00:00.000Z"), 0)).toBe(601);
    });
    test('January 1st, 7pm', () => {
        expect(getMonth(new Date("2020-01-01T19:00:00.000Z"), 0)).toBe(601);
    });
    test('January 1st, 8pm', () => {
        expect(getMonth(new Date("2020-01-01T20:00:00.000Z"), 0)).toBe(601);
    });
    test('January 1st, 9pm', () => {
        expect(getMonth(new Date("2020-01-01T21:00:00.000Z"), 0)).toBe(601);
    });
    test('January 1st, 10pm', () => {
        expect(getMonth(new Date("2020-01-01T22:00:00.000Z"), 0)).toBe(601);
    });
    test('January 1st, 11pm', () => {
        expect(getMonth(new Date("2020-01-01T23:00:00.000Z"), 0)).toBe(601);
    });
}

// START Leap Day Tests
{
    // February 28th, 2020
    test('February 28th, 12am', () => {
        expect(getMonth(new Date("2020-02-28T00:00:00.000Z"), 0)).toBe(602);
    });
    test('February 28th, 1am', () => {
        expect(getMonth(new Date("2020-02-28T01:00:00.000Z"), 0)).toBe(602);
    });
    test('February 28th, 2am', () => {
        expect(getMonth(new Date("2020-02-28T02:00:00.000Z"), 0)).toBe(602);
    });
    test('February 28th, 3am', () => {
        expect(getMonth(new Date("2020-02-28T03:00:00.000Z"), 0)).toBe(602);
    });
    test('February 28th, 4am', () => {
        expect(getMonth(new Date("2020-02-28T04:00:00.000Z"), 0)).toBe(602);
    });
    test('February 28th, 5am', () => {
        expect(getMonth(new Date("2020-02-28T05:00:00.000Z"), 0)).toBe(602);
    });
    test('February 28th, 6am', () => {
        expect(getMonth(new Date("2020-02-28T06:00:00.000Z"), 0)).toBe(602);
    });
    test('February 28th, 7am', () => {
        expect(getMonth(new Date("2020-02-28T07:00:00.000Z"), 0)).toBe(602);
    });
    test('February 28th, 8am', () => {
        expect(getMonth(new Date("2020-02-28T08:00:00.000Z"), 0)).toBe(602);
    });
    test('February 28th, 9am', () => {
        expect(getMonth(new Date("2020-02-28T09:00:00.000Z"), 0)).toBe(602);
    });
    test('February 28th, 10am', () => {
        expect(getMonth(new Date("2020-02-28T10:00:00.000Z"), 0)).toBe(602);
    });
    test('February 28th, 11am', () => {
        expect(getMonth(new Date("2020-02-28T11:00:00.000Z"), 0)).toBe(602);
    });
    test('February 28th, 12pm', () => {
        expect(getMonth(new Date("2020-02-28T12:00:00.000Z"), 0)).toBe(602);
    });
    test('February 28th, 1pm', () => {
        expect(getMonth(new Date("2020-02-28T13:00:00.000Z"), 0)).toBe(602);
    });
    test('February 28th, 2pm', () => {
        expect(getMonth(new Date("2020-02-28T14:00:00.000Z"), 0)).toBe(602);
    });
    test('February 28th, 3pm', () => {
        expect(getMonth(new Date("2020-02-28T15:00:00.000Z"), 0)).toBe(602);
    });
    test('February 28th, 4pm', () => {
        expect(getMonth(new Date("2020-02-28T16:00:00.000Z"), 0)).toBe(602);
    });
    test('February 28th, 5pm', () => {
        expect(getMonth(new Date("2020-02-28T17:00:00.000Z"), 0)).toBe(602);
    });
    test('February 28th, 6pm', () => {
        expect(getMonth(new Date("2020-02-28T18:00:00.000Z"), 0)).toBe(602);
    });
    test('February 28th, 7pm', () => {
        expect(getMonth(new Date("2020-02-28T19:00:00.000Z"), 0)).toBe(602);
    });
    test('February 28th, 8pm', () => {
        expect(getMonth(new Date("2020-02-28T20:00:00.000Z"), 0)).toBe(602);
    });
    test('February 28th, 9pm', () => {
        expect(getMonth(new Date("2020-02-28T21:00:00.000Z"), 0)).toBe(602);
    });
    test('February 28th, 10pm', () => {
        expect(getMonth(new Date("2020-02-28T22:00:00.000Z"), 0)).toBe(602);
    });
    test('February 28th, 11pm', () => {
        expect(getMonth(new Date("2020-02-28T23:00:00.000Z"), 0)).toBe(602);
    });

    // February 29th, 2020
    test('February 29th, 12am', () => {
        expect(getMonth(new Date("2020-02-29T00:00:00.000Z"), 0)).toBe(602);
    });
    test('February 29th, 1am', () => {
        expect(getMonth(new Date("2020-02-29T01:00:00.000Z"), 0)).toBe(602);
    });
    test('February 29th, 2am', () => {
        expect(getMonth(new Date("2020-02-29T02:00:00.000Z"), 0)).toBe(602);
    });
    test('February 29th, 3am', () => {
        expect(getMonth(new Date("2020-02-29T03:00:00.000Z"), 0)).toBe(602);
    });
    test('February 29th, 4am', () => {
        expect(getMonth(new Date("2020-02-29T04:00:00.000Z"), 0)).toBe(602);
    });
    test('February 29th, 5am', () => {
        expect(getMonth(new Date("2020-02-29T05:00:00.000Z"), 0)).toBe(602);
    });
    test('February 29th, 6am', () => {
        expect(getMonth(new Date("2020-02-29T06:00:00.000Z"), 0)).toBe(602);
    });
    test('February 29th, 7am', () => {
        expect(getMonth(new Date("2020-02-29T07:00:00.000Z"), 0)).toBe(602);
    });
    test('February 29th, 8am', () => {
        expect(getMonth(new Date("2020-02-29T08:00:00.000Z"), 0)).toBe(602);
    });
    test('February 29th, 9am', () => {
        expect(getMonth(new Date("2020-02-29T09:00:00.000Z"), 0)).toBe(602);
    });
    test('February 29th, 10am', () => {
        expect(getMonth(new Date("2020-02-29T10:00:00.000Z"), 0)).toBe(602);
    });
    test('February 29th, 11am', () => {
        expect(getMonth(new Date("2020-02-29T11:00:00.000Z"), 0)).toBe(602);
    });
    test('February 29th, 12pm', () => {
        expect(getMonth(new Date("2020-02-29T12:00:00.000Z"), 0)).toBe(602);
    });
    test('February 29th, 1pm', () => {
        expect(getMonth(new Date("2020-02-29T13:00:00.000Z"), 0)).toBe(602);
    });
    test('February 29th, 2pm', () => {
        expect(getMonth(new Date("2020-02-29T14:00:00.000Z"), 0)).toBe(602);
    });
    test('February 29th, 3pm', () => {
        expect(getMonth(new Date("2020-02-29T15:00:00.000Z"), 0)).toBe(602);
    });
    test('February 29th, 4pm', () => {
        expect(getMonth(new Date("2020-02-29T16:00:00.000Z"), 0)).toBe(602);
    });
    test('February 29th, 5pm', () => {
        expect(getMonth(new Date("2020-02-29T17:00:00.000Z"), 0)).toBe(602);
    });
    test('February 29th, 6pm', () => {
        expect(getMonth(new Date("2020-02-29T18:00:00.000Z"), 0)).toBe(602);
    });
    test('February 29th, 7pm', () => {
        expect(getMonth(new Date("2020-02-29T19:00:00.000Z"), 0)).toBe(602);
    });
    test('February 29th, 8pm', () => {
        expect(getMonth(new Date("2020-02-29T20:00:00.000Z"), 0)).toBe(602);
    });
    test('February 29th, 9pm', () => {
        expect(getMonth(new Date("2020-02-29T21:00:00.000Z"), 0)).toBe(602);
    });
    test('February 29th, 10pm', () => {
        expect(getMonth(new Date("2020-02-29T22:00:00.000Z"), 0)).toBe(602);
    });
    test('February 29th, 11pm', () => {
        expect(getMonth(new Date("2020-02-29T23:00:00.000Z"), 0)).toBe(602);
    });

    // March 1st, 2020
    test('March 1st, 12am', () => {
        expect(getMonth(new Date("2020-03-01T00:00:00.000Z"), 0)).toBe(603);
    });
    test('March 1st, 1am', () => {
        expect(getMonth(new Date("2020-03-01T01:00:00.000Z"), 0)).toBe(603);
    });
    test('March 1st, 2am', () => {
        expect(getMonth(new Date("2020-03-01T02:00:00.000Z"), 0)).toBe(603);
    });
    test('March 1st, 3am', () => {
        expect(getMonth(new Date("2020-03-01T03:00:00.000Z"), 0)).toBe(603);
    });
    test('March 1st, 4am', () => {
        expect(getMonth(new Date("2020-03-01T04:00:00.000Z"), 0)).toBe(603);
    });
    test('March 1st, 5am', () => {
        expect(getMonth(new Date("2020-03-01T05:00:00.000Z"), 0)).toBe(603);
    });
    test('March 1st, 6am', () => {
        expect(getMonth(new Date("2020-03-01T06:00:00.000Z"), 0)).toBe(603);
    });
    test('March 1st, 7am', () => {
        expect(getMonth(new Date("2020-03-01T07:00:00.000Z"), 0)).toBe(603);
    });
    test('March 1st, 8am', () => {
        expect(getMonth(new Date("2020-03-01T08:00:00.000Z"), 0)).toBe(603);
    });
    test('March 1st, 9am', () => {
        expect(getMonth(new Date("2020-03-01T09:00:00.000Z"), 0)).toBe(603);
    });
    test('March 1st, 10am', () => {
        expect(getMonth(new Date("2020-03-01T10:00:00.000Z"), 0)).toBe(603);
    });
    test('March 1st, 11am', () => {
        expect(getMonth(new Date("2020-03-01T11:00:00.000Z"), 0)).toBe(603);
    });
    test('March 1st, 12pm', () => {
        expect(getMonth(new Date("2020-03-01T12:00:00.000Z"), 0)).toBe(603);
    });
    test('March 1st, 1pm', () => {
        expect(getMonth(new Date("2020-03-01T13:00:00.000Z"), 0)).toBe(603);
    });
    test('March 1st, 2pm', () => {
        expect(getMonth(new Date("2020-03-01T14:00:00.000Z"), 0)).toBe(603);
    });
    test('March 1st, 3pm', () => {
        expect(getMonth(new Date("2020-03-01T15:00:00.000Z"), 0)).toBe(603);
    });
    test('March 1st, 4pm', () => {
        expect(getMonth(new Date("2020-03-01T16:00:00.000Z"), 0)).toBe(603);
    });
    test('March 1st, 5pm', () => {
        expect(getMonth(new Date("2020-03-01T17:00:00.000Z"), 0)).toBe(603);
    });
    test('March 1st, 6pm', () => {
        expect(getMonth(new Date("2020-03-01T18:00:00.000Z"), 0)).toBe(603);
    });
    test('March 1st, 7pm', () => {
        expect(getMonth(new Date("2020-03-01T19:00:00.000Z"), 0)).toBe(603);
    });
    test('March 1st, 8pm', () => {
        expect(getMonth(new Date("2020-03-01T20:00:00.000Z"), 0)).toBe(603);
    });
    test('March 1st, 9pm', () => {
        expect(getMonth(new Date("2020-03-01T21:00:00.000Z"), 0)).toBe(603);
    });
    test('March 1st, 10pm', () => {
        expect(getMonth(new Date("2020-03-01T22:00:00.000Z"), 0)).toBe(603);
    });
    test('March 1st, 11pm', () => {
        expect(getMonth(new Date("2020-03-01T23:00:00.000Z"), 0)).toBe(603);
    });
}
// END Leap Day Tests

test.todo("Test daylight savings time changes")

test.todo("Test epoch months")