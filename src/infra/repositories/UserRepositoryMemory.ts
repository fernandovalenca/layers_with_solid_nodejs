import { UserRepository } from "../../application/repositories/UserRepository";
import User from "../../domain/entities/User";

export default class UserRepositoryMemory implements UserRepository {
  users: User[];

  constructor() {
    this.users = [];
  }

  async save(user: User): Promise<void> {
    this.users.push(user);
  }

  async getByEmail(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email.value === email);
  }
}
