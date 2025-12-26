const VERSION_PREFIX = {
  home: "/home",
};

export const homeApiEndPoint = {
  getHome: () => `${VERSION_PREFIX.home}`,
  getHomeDetail: ({ id }: { id: string }) =>
    `${VERSION_PREFIX.home}/${id}/detail`,
  deleteHome: ({ id }: { id: string }) => `${VERSION_PREFIX.home}/${id}`,
};
