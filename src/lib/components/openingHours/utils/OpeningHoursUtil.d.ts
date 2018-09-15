import { OpeningHoursWeekDayObj } from '../openingHoursWeek/OpeningHoursWeek';
export declare class OpeningHoursUtil {
    getTimeFromMidnight(time: Date): number;
    getTotalTimeString(times: Date[]): JSX.Element;
    getLabelSuffix(day: OpeningHoursWeekDayObj): JSX.Element | "Closed";
}
declare const util: OpeningHoursUtil;
export default util;
