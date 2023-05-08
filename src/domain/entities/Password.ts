export default class Password {
  private passwordRegex: RegExp =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  constructor(private password: string) {
    if (!password.match(this.passwordRegex)) {
      throw new Error("Invalid password");
    }
  }

  get value(): string {
    return this.password;
  }
}
