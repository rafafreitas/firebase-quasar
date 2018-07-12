/*
export const someAction = (state) => {
}
*/

import Authentication from "./../../services/Authentication";

export const getAuth = (state, user) => {
  return new Promise((resolve, reject) => {
    Authentication.doAuthentication(user.email , user.password)
      .then(
        (result) => {
          resolve(result.user)
        },
        (error) => {
          reject(error)
        }
      ).catch(
        (err) =>{
          reject(err)
        })
  })

}
