import { UserRepository } from "../repositories/UserRepository";

export default class Login {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(input: Input): Promise<Output> {
    const user = await this.userRepository.getByEmail(input.email);

    if (!user) throw new Error("Authentication failed");
    if (input.password !== user.password.value)
      throw new Error("Authentication failed");

    return {
      name: user.name,
      token: "123456",
    };
  }
}

type Input = {
  email: string;
  password: string;
};

type Output = {
  name: string;
  token: string;
};
