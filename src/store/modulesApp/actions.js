import Authentication from "./../../services/Authentication"
import ProcessingError from './../../services/ProcessingErros'

export const getAuth = (state, user) => {
  return new Promise((resolve, reject) => {
    Authentication.doAuthentication(user.email , user.password)
      .then(
        (result) => {
          if (!result.user.emailVerified){
            Authentication.sendVerificationEmail(result.user)
          }
          resolve(result.user)
        },
        (error) => {
          const messageError = new ProcessingError(error.code, error.message)
          reject(messageError.getMessage())
        }
      ).catch(
        (err) =>{
          const messageError = new ProcessingError(err.code, err.message)
          reject(messageError.getMessage())
        })
  })
}

export const getUserConnected = (state) => {
  return new Promise((resolve, reject) => {
    Authentication.checkUserFirebase()
      .then(
        (result) => {
          resolve(result)
        }
      ).catch(
      (err) =>{
        const messageError = new ProcessingError(err.code, err.message)
        reject(messageError.getMessage())
      })
  })
}
