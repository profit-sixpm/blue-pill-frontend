// 로그인/회원가입 요청
export interface AuthRequest {
  username: string;
  password: string;
}

// 로그인/회원가입 응답
export interface AuthResponse {
  token: string;
  username: string;
  userId: number;
}
