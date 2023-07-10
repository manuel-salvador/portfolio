type IFormData = { [k: string]: FormDataEntryValue };

export const testContactForm = (data: IFormData) => {
  if (!data.name || !data.email || !data.message) {
    return false;
  }

  const nameRegex = /^[a-zA-Z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const messageRegex = /^[a-zA-Z0-9\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/;

  const name = data.name.toString();
  const email = data.email.toString();
  const message = data.message.toString();

  return nameRegex.test(name) && emailRegex.test(email) && messageRegex.test(message);
};
