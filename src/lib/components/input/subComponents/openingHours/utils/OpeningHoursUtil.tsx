//Libs
import * as React from 'react';
import { OpeningHoursWeekDayObj } from 'src/lib';

export class OpeningHoursUtil {
    public getTimeFromMidnight(time: Date) {
        return (time.getTime() - time.getTimezoneOffset() * 60000) % 86400000;
    }

    public getTotalTimeString(times: Date[]) {
        let totalTime = 0;
        let newTimes = times.slice(0).map(item => this.getTimeFromMidnight(item));
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
        const hoursFormated = hours ? hours.toFixed(0) + ' hour' + (hours > 1 ? 's' : '') : '';
        const minutesFormated = minutes ? minutes.toFixed(0) + ' minute' + (minutes > 1 ? 's' : '') : '';
        if (hoursFormated && minutesFormated) {
            return <span>- open {hoursFormated} and {minutesFormated}</span>;
        }
        if (hoursFormated) {
            return <span>- open {hoursFormated}</span>;
        }
        if (minutesFormated) {
            return <span>- open {minutesFormated}</span>;
        }
        return <span>- closed</span>;
    }

    public getLabelSuffix(day: OpeningHoursWeekDayObj) {
        return day && day.times && day.times.length === 0 ?
            '- Closed'
            :
            this.getTotalTimeString(day.times);
    }
}

const util = new OpeningHoursUtil();
export default util;