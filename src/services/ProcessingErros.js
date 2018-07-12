export default class ProcessingErros {

  constructor(code, message) {
    this.code = code
    this.message = message
  }

  getMessage(){
    switch (this.code){
      case 'auth/wrong-password':
        return 'Senha é inválida ou o usuário não possui uma senha.'
      break

      case 'auth/invalid-email':
        return 'Informe um E-mail válido!'
        break

      case 'auth/invalid-password':
        return 'Senha inválida! A senha precisa ter pelo menos 6 caracteres!'
        break

      case 'auth/user-not-found':
        return 'Usuário não encontrado!'
        break

      case 'auth/phone-number-already-exists':
        return 'O telefone fornecido já está em uso por outro usuário!'
        break

      case 'auth/internal-error':
        return 'O servidor encontrou um erro inesperado. Se o erro persistir, informe o problema ao administrador!'
        break

      default:
        return this.message

    }
  }
}

//export default ProcessingErros;
