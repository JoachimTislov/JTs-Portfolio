import { ref } from 'vue'

export const number_of_days_in_each_month = [
  { Month: 'January', Days: 31 },
  { Month: 'February', Days: 29 } /* 2024 is a leap year */,
  { Month: 'March', Days: 31 },
  { Month: 'April', Days: 30 },
  { Month: 'May', Days: 31 },
  { Month: 'June', Days: 30 },
  { Month: 'July', Days: 31 },
  { Month: 'August', Days: 31 },
  { Month: 'September', Days: 30 },
  { Month: 'October', Days: 31 },
  { Month: 'November', Days: 30 },
  { Month: 'December', Days: 31 }
]

// Personal schedule, might store this in the database
export const schedule: Array<{ name: string; time: { Start: number; End: number } }> = [
  { name: 'Breakfast', time: { Start: 6, End: 11 } },
  { name: 'Lunch', time: { Start: 12, End: 15 } },
  { name: 'Dinner', time: { Start: 16, End: 20 } },
  { name: 'Supper', time: { Start: 21, End: 24 } },
  { name: 'Night', time: { Start: 0, End: 5 } }
]

export const days_of_the_week_with_date = ref<{ Day: string; Date: string }[]>([
  { Day: 'Monday', Date: '' },
  { Day: 'Tuesday', Date: '' },
  { Day: 'Wednesday', Date: '' },
  { Day: 'Thursday', Date: '' },
  { Day: 'Friday', Date: '' },
  { Day: 'Saturday', Date: '' },
  { Day: 'Sunday', Date: '' }
])

export const days_of_the_week = ref<string[]>([
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
])
