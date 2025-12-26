const VERSION_PREFIX = {
  auth: "/v1/auth",
};

export const authApiEndPoint = {
  signup: () => `${VERSION_PREFIX.auth}/signup`,
  login: () => `${VERSION_PREFIX.auth}/login`,
};
