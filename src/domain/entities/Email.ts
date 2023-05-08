export default class Email {
  private emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  constructor(private readonly email: string) {
    if (!this.email.toLowerCase().match(this.emailRegex)) {
      throw new Error("Invalid e-mail");
    }
  }

  get value(): string {
    return this.email;
  }
}
