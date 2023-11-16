export interface UserData {
    userId: string;
    salt: string;
    hashedPassword: string;
    username: string;
  }
export interface createUserParams {
    username: string;
    password: string;
};
export interface verifyLoginParams {
    username: string;
    password: string;
};