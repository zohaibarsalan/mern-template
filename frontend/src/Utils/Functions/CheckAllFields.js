import { toast } from 'sonner';

export const CheckAllFields = (fields) => {
  for (const field of fields) {
    if (!field.trim()) {
      toast.error('Please fill in all fields');
      return false; // Return false if any field is empty or contains only whitespace
    }
  }
  return true;
};
