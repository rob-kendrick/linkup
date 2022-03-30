import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

const useDateLong = (date: string) => {
  dayjs.extend(advancedFormat);
  const formattedDate = dayjs(date).format('dddd, Do MMMM, h:mm A');
  return formattedDate;
};

const useDateShort = (date: string) => {
  dayjs.extend(advancedFormat);
  const formattedDate = dayjs(date).format('ddd Do MMM, h:mm A');
  return formattedDate;
};

export {
  useDateShort,
  useDateLong,
};
