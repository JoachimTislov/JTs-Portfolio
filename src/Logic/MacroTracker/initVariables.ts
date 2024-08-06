import { ref } from 'vue'
import type {
  Average_macros_this_week,
  Ingredients,
  Meal_with_ingredients,
  Meals_for_time_of_day
} from './types'
import { get_meals_for_given_date } from './Ajax/getMealsForGivenDate'
import { fetchResource, getData } from './Ajax/ajax'
import { check_if_number_is_less_than_10 } from './checkLogic/check_if_number_is_less_than_10'
import user_icon from '@/assets/Icons/user-icon.png'
import { routeToPage } from './routeToPage'

// Init html div alert elements
export const login_alert = ref<HTMLElement | null>(null)

export const username = ref<string>('Peddi')
export const password = ref<string>('peder@123')

export const isUsernameValid = ref<boolean>(true)
export const isPasswordValid = ref<boolean>(true)

// login
export const username_validation_message = ref<HTMLElement | null>(null)
export const password_validation_message = ref<HTMLElement | null>(null)

// register
export const register_username_validation_message = ref<HTMLElement | null>(null)
export const register_password_validation_message = ref<HTMLElement | null>(null)
export const register_confirm_password_validation_message = ref<HTMLElement | null>(null)
export const register_name_validation_message = ref<HTMLElement | null>(null)
export const register_weight_validation_message = ref<HTMLElement | null>(null)
export const register_height_validation_message = ref<HTMLElement | null>(null)
export const register_age_validation_message = ref<HTMLElement | null>(null)
export const register_gender_validation_message = ref<HTMLElement | null>(null)
export const register_activity_lvl_validation_message = ref<HTMLElement | null>(null)
export const register_email_validation_message = ref<HTMLElement | null>(null)

export const mealName_validation_message = ref<HTMLElement | null>(null)
export const nutrient_validation_message = ref<HTMLElement | null>(null)
export const ingredientName_validation_message = ref<HTMLElement | null>(null)
export const amount_validation_message = ref<HTMLElement | null>(null)
export const hour_validation_message = ref<HTMLElement | null>(null)
export const minutes_validation_message = ref<HTMLElement | null>(null)

export function initAlertElements() {
  login_alert.value?.focus()
  profile_alert.value?.focus()

  username_validation_message.value?.focus()
  password_validation_message.value?.focus()

  register_username_validation_message.value?.focus()
  register_password_validation_message.value?.focus()
  register_confirm_password_validation_message.value?.focus()
  register_name_validation_message.value?.focus()
  register_weight_validation_message.value?.focus()
  register_height_validation_message.value?.focus()
  register_age_validation_message.value?.focus()
  register_gender_validation_message.value?.focus()
  register_activity_lvl_validation_message.value?.focus()
  register_email_validation_message.value?.focus()

  mealName_validation_message.value?.focus()
  nutrient_validation_message.value?.focus()
  ingredientName_validation_message.value?.focus()
  amount_validation_message.value?.focus()
  hour_validation_message.value?.focus()
  minutes_validation_message.value?.focus()
}

export const file = ref<File | undefined>(undefined)

export const userInfo = ref<any | undefined>(undefined)

export const average_macros_this_week = ref<Average_macros_this_week | undefined>(undefined)

export const meals = ref<Meal_with_ingredients[] | undefined>(undefined)

export const ingredients = ref<Ingredients | undefined>(undefined)

const date = new Date()
export const calender_date = ref<string>(
  `${check_if_number_is_less_than_10(date.getMonth() + 1)}-${check_if_number_is_less_than_10(date.getDate())}-${date.getFullYear()}`
)
export const zero_meals_to_show = ref<boolean>(true)

export const meals_for_given_date = ref<Meals_for_time_of_day | undefined>(undefined)

export async function initData(user_id: number) {
  userInfo.value = await getData(`/user_info/${user_id}`)

  meals_for_given_date.value = await get_meals_for_given_date()

  const ingredients_response = await getData(`/personal_ingredients/${user_id}`)
  ingredients.value = ingredients_response ? await ingredients_response.json() : undefined

  console.log(meals.value)
}

// https://www.zhenghao.io/posts/verify-image-url
function canFindImage(url: string) {
  const img = new Image()
  img.src = url
  return new Promise((resolve) => {
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)
  })
}

export const profile_alert = ref<HTMLElement | null>(null)
export const profilePictureUrl = ref<string>(user_icon)

export async function initPicture() {
  const imageUrl = localStorage.getItem('imageUrl')

  const user_id = localStorage.getItem('user_id')

  if (!user_id) return routeToPage('macroLogin')

  if (imageUrl && (await canFindImage(imageUrl))) {
    console.log('Getting image from storage')
    profilePictureUrl.value = imageUrl
  } else {
    const response = await fetchResource(
      'GET',
      '',
      `/user_picture/${user_id}`,
      profile_alert.value,
      'token'
    )

    if (response && response.ok && response.headers.get('Content-Type') == 'image/png') {
      const blob = await response.blob()
      const userPictureURL = URL.createObjectURL(blob)

      localStorage.setItem('imageUrl', userPictureURL)

      console.log(userPictureURL)
      if (userPictureURL) profilePictureUrl.value = userPictureURL ? userPictureURL : user_icon
    }
  }
}
