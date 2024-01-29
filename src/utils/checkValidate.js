export const checkValidate = (email) => {
  const isEmailValidate = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  if (isEmailValidate) return null;
};
