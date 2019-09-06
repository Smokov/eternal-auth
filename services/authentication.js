const User = require("../models/user");
const { commonErrors } = require("../errors/AppError");

class AuthenticationService {
  signIn(email, password) {
    user = User.find({ email });
    if (!user)
      throw new commonErrors.ResourceNotFound("Usuário ou senha incorretos.");

    // validate user hash
    user.hash === password;

    // return JWT

    // session?
  }
  externalProviderSignIn(key, secret, provider) {
    const result = provider(key, secret).authenticate();

    if (result) {
      user = User.find({ id: result.id });
      if (user) {
        // return JWT
      }
    }
    return new commonErrors.Unauthorized(
      "Não foi possivel efetuar a autenticação."
    );
  }
}

module.exports = { AuthenticationService };
