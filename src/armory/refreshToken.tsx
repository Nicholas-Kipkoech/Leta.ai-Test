import { AuthServiceClient } from "../generated/AuthServiceClientPb";
import { RefreshAccessTokenRequest } from "../generated/auth_pb";

export const getRefreshAccessToken = async (refreshToken: string) => {
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
          console.log("accessToken from endpoint========", accessToken);
          resolve(accessToken);
        }
      }
    );
  });
};
