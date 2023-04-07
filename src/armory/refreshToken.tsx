import { AuthServiceClient } from "../generated/AuthServiceClientPb";
import { RefreshAccessTokenRequest } from "../generated/auth_pb";

export const refreshAccessToken = async (refreshToken: string) => {
  const authService = new AuthServiceClient("http://localhost:8080");

  const refreshAccessTokenRequest = new RefreshAccessTokenRequest();
  refreshAccessTokenRequest.setRefreshtoken(refreshToken);

  return new Promise((resolve, reject) => {
    authService.refreshAccessToken(
      refreshAccessTokenRequest,
      {},
      (err, response) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          const accessToken = response.toObject().accesstoken;
          console.log("new accessToken", accessToken);
          resolve(accessToken);
        }
      }
    );
  });
};
