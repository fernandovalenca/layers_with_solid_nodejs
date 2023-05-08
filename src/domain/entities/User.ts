import {
  UserAgeSpecification,
  UserEmailSpecification,
  UserNameSpecification,
  UserPasswordSpecification,
} from "../specification/UserSpecification";
import Email from "./Email";
import Password from "./Password";

export default class User {
  private constructor(
    readonly name: string,
    readonly email: Email,
    readonly password: Password,
    readonly age: number
  ) {
    const userNameSpecification = new UserNameSpecification();
    const userEmailSpecification = new UserEmailSpecification();
    const userPasswordSpecification = new UserPasswordSpecification();
    const userAgeSpecification = new UserAgeSpecification();

    if (
      !userNameSpecification
        .and(userEmailSpecification)
        .and(userPasswordSpecification)
        .and(userAgeSpecification)
        .isSatisfiedBy(this)
    ) {
      throw new Error("Invalid parameter");
    }
  }

  static create(name: string, email: string, password: string, age: number) {
    return new User(name, new Email(email), new Password(password), age);
  }
}
