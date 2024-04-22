import { toast } from 'sonner';

export const PasswordCheck = (password) => {
  const isValidPassword = () => {
    // Regular expressions to check for at least one lowercase letter, one uppercase letter, one digit, and one special character
    const lowerCaseRegex = /[a-z]/;
    const upperCaseRegex = /[A-Z]/;
    const digitRegex = /[0-9]/;
    const specialCharRegex = /[^A-Za-z0-9]/;

    return (
      password.length >= 8 &&
      lowerCaseRegex.test(password) &&
      upperCaseRegex.test(password) &&
      digitRegex.test(password) &&
      specialCharRegex.test(password)
    );
  };

  if (!isValidPassword()) {
    toast.error(
      'Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, one digit, and one special character'
    );
  } else {
    return true;
  }
};
