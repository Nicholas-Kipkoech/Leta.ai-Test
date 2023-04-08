import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { getRefreshAccessToken } from "./refreshToken";

// This function checks if the access token is still valid
export const isAccessTokenValid = (): boolean => {
  const accessToken = Cookies.get("accessToken");
  if (!accessToken) {
    return false;
  }

  try {
    const decodedToken: any = jwt_decode(accessToken);
    const currentTime = Date.now() / 1000; // convert to seconds
    if (decodedToken.exp < currentTime) {
      // access token has expired
      return false;
    }
    return true; // access token is still valid
  } catch (err) {
    console.error(err);
    return false;
  }
};

// This function gets a new access token using the refresh token
export const getNewAccessToken = async (): Promise<string | null> => {
  const refreshToken = Cookies.get("refreshToken");
  console.log(refreshToken, "refreshToken");
  if (!refreshToken) {
    return null;
  }

  try {
    const response: any = await getRefreshAccessToken(refreshToken);
    const accessToken = response;
    Cookies.set("accessToken", accessToken);
    return accessToken;
  } catch (err) {
    console.error(err);
    return null;
  }
};

// This function is called before making an API call to check if the access token is still valid and get a new one if necessary
export const getTokenAndRefreshIfNeeded = async (): Promise<string | any> => {
  if (isAccessTokenValid()) {
    // access token is still valid
    return Cookies.get("accessToken");
  }

  // access token has expired, try to get a new one
  const newAccessToken = await getNewAccessToken();
  console.log(newAccessToken);
  if (newAccessToken) {
    return newAccessToken;
  }

  return null; // failed to get a new access token
};
