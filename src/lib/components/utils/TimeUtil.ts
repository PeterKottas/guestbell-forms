// Libs

class TimeUtil {
  public dayDiff(start: Date, end: Date) {
    const startOfDay = new Date(start);
    startOfDay.setHours(0);
    startOfDay.setMinutes(0);
    startOfDay.setSeconds(0);
    const timeDiff = Math.abs(end.getTime() - startOfDay.getTime());
    const diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));
    return diffDays;
  }
}

const util = new TimeUtil();
export default util;
