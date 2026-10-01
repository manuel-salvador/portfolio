export const NAME_MAX_LENGTH = 80;
export const EMAIL_MAX_LENGTH = 254;
export const MESSAGE_MAX_LENGTH = 2000;

export type ContactField = "name" | "email" | "message";

export type ContactValues = Record<ContactField, string>;

export type ContactFieldErrors = Partial<Record<ContactField, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/u;
const NAME_PATTERN = /^(?=.*\p{L})[\p{L}\p{M}\s.'’·-]+$/u;
const TAB_CODE = 9;
const NEWLINE_CODE = 10;
const RETURN_CODE = 13;
const DELETE_CODE = 127;
const FIRST_PRINTABLE_CODE = 32;

function hasDisallowedControl(value: string): boolean {
  for (const char of value) {
    const code = char.codePointAt(0) ?? 0;
    const isAllowedWhitespace =
      code === TAB_CODE || code === NEWLINE_CODE || code === RETURN_CODE;

    if (isAllowedWhitespace) {
      continue;
    }

    if (code < FIRST_PRINTABLE_CODE || code === DELETE_CODE) {
      return true;
    }
  }

  return false;
}

const FIELD_ORDER = ["name", "email", "message"] as const;

export function validateContactFields(
  values: ContactValues
): ContactFieldErrors {
  const errors: ContactFieldErrors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const message = values.message.trim();

  if (name.length === 0) {
    errors.name = "Enter your name.";
  } else if (name.length > NAME_MAX_LENGTH) {
    errors.name = `Keep your name under ${NAME_MAX_LENGTH} characters.`;
  } else if (!NAME_PATTERN.test(name)) {
    errors.name =
      "Use letters in your name. Apostrophes, hyphens, and periods are fine.";
  }

  if (email.length === 0) {
    errors.email = "Enter your email so I can reply.";
  } else if (email.length > EMAIL_MAX_LENGTH || !EMAIL_PATTERN.test(email)) {
    errors.email = "Enter an email like name@example.com.";
  }

  if (message.length === 0) {
    errors.message = "Write a message.";
  } else if (message.length > MESSAGE_MAX_LENGTH) {
    errors.message = `Keep the message under ${MESSAGE_MAX_LENGTH} characters.`;
  } else if (hasDisallowedControl(message)) {
    errors.message = "Remove hidden characters and try again.";
  }

  return errors;
}

export function firstInvalidField(
  errors: ContactFieldErrors
): ContactField | null {
  for (const field of FIELD_ORDER) {
    if (errors[field]) {
      return field;
    }
  }

  return null;
}
