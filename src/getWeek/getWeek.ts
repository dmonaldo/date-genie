export function getWeek(date: Date, offset: number = 0): number {
  let unixEpoch = new Date(0 + offset * 60000);
  let numDays = Math.floor((date.getTime()-unixEpoch.getTime())/86400000);
  return Math.floor((numDays+(unixEpoch.getDay()+6)%7)/7);
}