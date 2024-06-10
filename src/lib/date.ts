import { DAYS_ENUM } from '@/constants/date';

export const findNextDay = (
  targetDay: DAYS_ENUM,
  date: Date = new Date()
): Date => {
  const currentDay = date.getDay();
  const daysUntilNextTargetDay = (targetDay - currentDay + 7) % 7 || 7;
  const nextTargetDay = new Date(date);
  nextTargetDay.setDate(date.getDate() + daysUntilNextTargetDay);
  return nextTargetDay;
};
