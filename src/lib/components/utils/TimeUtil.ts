// Libs

import { Duration } from 'moment';

class TimeUtil {
  public dayDiff(start: Duration, end: Duration) {
    const startOfDay = start
      .clone()
      .subtract(start.hours(), 'hours')
      .subtract(start.minutes(), 'minutes')
      .subtract(start.seconds(), 'seconds')
      .subtract(start.milliseconds(), 'milliseconds');
    const timeDiff = Math.abs(
      end.asMilliseconds() - startOfDay.asMilliseconds()
    );
    const diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));
    return diffDays;
  }
}

const util = new TimeUtil();
export default util;
