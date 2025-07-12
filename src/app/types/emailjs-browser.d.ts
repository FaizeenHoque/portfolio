declare module '@emailjs/browser' {
  export function send(
    serviceID: string,
    templateID: string,
    templateParams?: Record<string, any>,
    userID?: string
  ): Promise<any>;

  export function sendForm(
    serviceID: string,
    templateID: string,
    form: HTMLFormElement,
    userID?: string
  ): Promise<any>;
}
