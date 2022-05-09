import { CATEGORIES_ACTIONS_TYPES } from './category.types'
import { createAction } from 'utils/reducer.utils'

export const setCategories = categories => {
  return createAction(CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES, categories)
}
