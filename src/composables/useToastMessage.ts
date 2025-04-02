import { useToast } from 'primevue/usetoast';

export const useToastMessage = () => {
  const toast = useToast();

  const showMessage = (severity: string, summary: string, detail: string, condition = true) => {
    if (condition) {
      toast.add({
        severity,
        summary,
        detail,
        life: 3000
      });
    }
  };

  return {
    showMessage
  };
};