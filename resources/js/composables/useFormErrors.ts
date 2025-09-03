import { reactive } from 'vue';

const errors = reactive<Record<string, string[]>>({});

export function useFormErrors() {
  const setErrors = (serverErrors: any) => {
    Object.keys(serverErrors).forEach((field) => {
      errors[field] = serverErrors[field];
    });
  };

  const clearErrors = () => {
    Object.keys(errors).forEach(key => delete errors[key]);
  };

  const getError = (key: string): string => {
    return errors[key]?.[0] || '';
  };

  return {
    errors,
    setErrors,
    clearErrors,
    getError
  };
}
