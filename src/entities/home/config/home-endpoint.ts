const VERSION_PREFIX = {
  home: "/health",
};

export const homeApiEndPoint = {
  getHome: () => `${VERSION_PREFIX.home}`,
  getHomeDetail: ({ id }: { id: string }) => `${VERSION_PREFIX.home}`,
  deleteHome: ({ id }: { id: string }) => `${VERSION_PREFIX.home}`,
};
