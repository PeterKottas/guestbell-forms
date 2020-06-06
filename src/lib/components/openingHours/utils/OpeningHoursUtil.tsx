// Libs
import * as React from 'react';
import { Duration } from 'moment';
import { OpeningHoursDayObj } from '../openingHoursDay';

export const defaultTranslations = {
  open: 'Open',
  closed: 'Closed',
  and: 'and',
  hour: 'hour',
  hours: 'hours',
  minute: 'minute',
  minutes: 'minutes',
};

export type OpeningHoursLabelTranslations = Partial<typeof defaultTranslations>;

export class OpeningHoursUtil {
  public getTimeFromMidnight(time: Duration, midnight: Duration = time) {
    midnight = midnight
      .clone()
      .subtract(midnight.hours(), 'hours')
      .subtract(midnight.minutes(), 'minutes')
      .subtract(midnight.seconds(), 'seconds')
      .subtract(midnight.milliseconds(), 'milliseconds');
    const diff = time.asMilliseconds() - midnight.asMilliseconds();
    return diff;
  }

  public getTotalTimeString(
    times: Duration[],
    translations?: OpeningHoursLabelTranslations
  ) {
    translations = this.getTranslations(translations);
    let totalTime = 0;
    let newTimes = times
      .slice(0)
      .map(item => this.getTimeFromMidnight(item, times[0]));
    if (times.length % 2 === 1) {
      newTimes = newTimes.concat([86400000 + 60 * 1000]);
    }
    for (let index = 0; index < newTimes.length - 1; index++) {
      if (index % 2 === 0) {
        let time = newTimes[index];
        let nextTime = newTimes[index + 1];
        totalTime += nextTime - time;
      }
    }
    const hours = Math.floor(totalTime / 3600000);
    const minutes = Math.floor(totalTime / (60 * 1000)) % 60;
    const hoursFormatted = hours
      ? hours.toFixed(0) +
        ' ' +
        (hours > 1 ? translations.hours : translations.hour)
      : '';
    const minutesFormatted = minutes
      ? minutes.toFixed(0) +
        ' ' +
        (minutes > 1 ? translations.minutes : translations.minute)
      : '';
    if (hoursFormatted && minutesFormatted) {
      return (
        <span>
          {translations.open} {hoursFormatted} {translations.and}{' '}
          {minutesFormatted}
        </span>
      );
    }
    if (hoursFormatted) {
      return (
        <span>
          {translations.open} {hoursFormatted}
        </span>
      );
    }
    if (minutesFormatted) {
      return (
        <span>
          {translations.open} {minutesFormatted}
        </span>
      );
    }
    return <span>{translations.closed}</span>;
  }

  public getLabelSuffix(
    day: OpeningHoursDayObj,
    translations?: OpeningHoursLabelTranslations
  ) {
    translations = this.getTranslations(translations);
    return day && day.times && day.times.length === 0
      ? translations.closed
      : this.getTotalTimeString(
          (day.times || []).reduce<Duration[]>(
            (a, b) => a.concat([b.opens, b.closes]),
            []
          ),
          translations
        );
  }

  private getTranslations(translations?: OpeningHoursLabelTranslations) {
    return {
      ...defaultTranslations,
      ...translations,
    };
  }
}

const util = new OpeningHoursUtil();
export default util;
