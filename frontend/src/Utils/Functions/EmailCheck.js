import { toast } from 'sonner';

export const EmailCheck = (email) => {
  const isValidEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  if (!isValidEmail()) {
    toast.error('Please enter a valid email address');
  } else {
    return true;
  }
};
