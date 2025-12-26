import type { AuthResponse } from "../model";

export const authMockResponse: AuthResponse = {
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.mock-token",
  username: "testuser",
  userId: 1,
};
