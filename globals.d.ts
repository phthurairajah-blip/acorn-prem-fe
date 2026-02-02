declare module "*.css";

interface Grecaptcha {
  render?: (
    container: string | HTMLElement,
    parameters: Record<string, unknown>
  ) => number;
  getResponse?: () => string;
  reset?: () => void;
}

interface Window {
  onRecaptchaSuccess?: (token: string) => void;
  onRecaptchaExpired?: () => void;
  onRecaptchaError?: () => void;
  grecaptcha?: Grecaptcha;
}
