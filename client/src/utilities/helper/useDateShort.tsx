import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

const useDateShort = (date: string) => {
  dayjs.extend(advancedFormat);
  const formattedDate = dayjs(date).format('ddd, Do MMM, H:MM');
  return formattedDate;
};

const useDateLong = (date: string) => {
  dayjs.extend(advancedFormat);
  const formattedDate = dayjs(date).format('dddd, Do MMMM, H:MM');
  return formattedDate;
};

export {
  useDateShort,
  useDateLong,
};
