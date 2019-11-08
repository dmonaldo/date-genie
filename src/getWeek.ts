import moment from 'moment';

export function getWeek(date: Date, offset: number): number {
  let unixEpoch = new Date(0 + (offset || 0) * 60000);
  let numDays = Math.floor((date.getTime()-unixEpoch.getTime())/86400000);
  return Math.floor((numDays+(unixEpoch.getDay()+6)%7)/7);
}