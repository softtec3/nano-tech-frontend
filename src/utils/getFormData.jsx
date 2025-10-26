export const getFormData = (form) => {
  if (!form) {
    return "e.target needed";
  }
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  return data;
};
