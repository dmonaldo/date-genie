export function getMonth(date: Date, offset: number = 0): number {
    var today = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0); // This at 00:00:00
    var epoch = new Date(0);
    var diff_years = today.getUTCFullYear() - epoch.getUTCFullYear();
    return (diff_years * 12) + today.getUTCMonth() + 1;
}