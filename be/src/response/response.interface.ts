type AuthDataResponse = {
  name: string;
  username: string;
};

export interface SignupResponse {
  data: AuthDataResponse;
  access_token: string;
}

export interface SigninResponse {
  data: AuthDataResponse;
  access_token: string;
}
