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

test.todo("Test daylight savings time changes")

test.todo("Test epoch months")

test.todo("Test leap year")