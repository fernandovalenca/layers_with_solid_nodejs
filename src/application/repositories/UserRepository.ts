import User from "../../domain/entities/User";

export interface UserRepository {
  save(user: User): Promise<void>;
  getByEmail(email: string): Promise<User  | undefined>;
}
