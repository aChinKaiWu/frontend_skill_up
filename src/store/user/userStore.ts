import { createStore } from 'effector'
import { getUserProfile } from './userEvents'
import { User } from '../../model/user'

export interface UserStroe {
  profile: User | undefined
}

const initState: UserStroe = {
  profile: undefined,
}

const userStore = createStore<UserStroe>(initState).on(getUserProfile.done, (state, { result }) => {
  return {
    ...state,
    profile: result.data,
  }
})

export default userStore
