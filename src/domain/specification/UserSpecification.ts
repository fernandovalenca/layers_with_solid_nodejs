import User from "../entities/User";
import { AbstractSpecification } from "./Specification";

const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex: RegExp =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export class UserNameSpecification extends AbstractSpecification<User> {
  isSatisfiedBy(user: User): boolean {
    return user.name.split(" ").length >= 2;
  }
}

export class UserEmailSpecification extends AbstractSpecification<User> {
  isSatisfiedBy(user: User): boolean {
    return !!user.email.value.toLowerCase().match(emailRegex);
  }
}

export class UserPasswordSpecification extends AbstractSpecification<User> {
  isSatisfiedBy(user: User): boolean {
    return !!user.password.value.match(passwordRegex);
  }
}

export class UserAgeSpecification extends AbstractSpecification<User> {
  isSatisfiedBy(user: User): boolean {
    return user.age >= 18;
  }
}
