import { toast } from 'sonner';

export const PasswordMatch = (password, confirmPassword) => {
  if (password !== confirmPassword) {
    toast.error('Passwords do not match');
    return false; // Return false if password does not match confirm password
  }
  return true; // Return true if password matches confirm password
};
