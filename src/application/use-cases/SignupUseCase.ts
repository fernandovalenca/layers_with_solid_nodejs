import User from "../../domain/entities/User";
import { UserRepository } from "../repositories/UserRepository";

export default class Signup {
  constructor(private readonly userRepository: UserRepository) {}
  async execute(input: Input): Promise<void> {
    const user = User.create(input.name, input.email, input.password, input.age);
    this.userRepository.save(user);
  }
}

type Input = {
  name: string;
  email: string;
  password: string;
  age: number;
};
