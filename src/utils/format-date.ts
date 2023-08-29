import { format, isValid } from 'date-fns';

export function formatDate(date: Date, pattern = 'dd-MM-y h:mm a') {
  if (isValid(date)) {
    return format(date, pattern);
  }
  return format(new Date(), pattern);
}
