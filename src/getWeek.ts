export function getWeek(offset: number): number {
  let unixEpoch = new Date(0 - (offset || 0) * 60000);
  let unixEpochMilliseconds = unixEpoch.getMilliseconds();
  let now = new Date().getMilliseconds();
  let numWeeks = Math.floor(((Math.round((now-unixEpochMilliseconds)/86400000))+(unixEpoch.getDay()+6)%7)/7);
  return numWeeks;
}