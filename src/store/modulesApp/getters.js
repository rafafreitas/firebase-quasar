/*
export const someGetter = (state) => {
}
*/
export const isAuth = (state) => {
  return state.auth
}

export const hasUpdatedProfile = (state) => {
  return state.hasUpdatedProfile
}

export const hasNotifcation = (state) => {
  return state.hasNotifications
}

export const getUserType = (state) => {
  return state.userType
}

// const getters = {
//   isAuth: state => state.auth,
//   getUserType: state => state.userType,
// }
//
// export default getters
