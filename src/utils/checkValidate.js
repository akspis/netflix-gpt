export const checkValidate = (email, password) => {
  //   const isNameValidate = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
  const isEmailValidate = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswardValidate =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  //   if (isSignUp) if (!isNameValidate) return "Name is not Valid";
  if (!isEmailValidate) return "Email is not valid";
  if (!isPasswardValidate) return "Passwoed is not valid";

  //   if (isSignUp) {
  //     if ((isEmailValidate, isNameValidate, isPasswardValidate)) return null;
  //   }
  if ((isEmailValidate, isPasswardValidate)) return null;
};
