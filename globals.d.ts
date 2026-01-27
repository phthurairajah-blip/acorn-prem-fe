declare module "*.css";

interface Grecaptcha {
  getResponse: () => string;
  reset: () => void;
}

interface Window {
  grecaptcha?: Grecaptcha;
}
