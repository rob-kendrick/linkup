import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

const useDate = (date: string) => {
  dayjs.extend(advancedFormat);
  const formattedDate = dayjs(date).format('dddd, Do MMMM, H:MM');
  return formattedDate;
};

export default useDate;
