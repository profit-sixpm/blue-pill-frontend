const VERSION_PREFIX = {
  announcements: "/announcements",
};

export const announcementsApiEndPoint = {
  getAnnouncements: () => `${VERSION_PREFIX.announcements}`,
  getAnnouncementsDetail: ({ id }: { id: string }) =>
    `${VERSION_PREFIX.announcements}/${id}`,
};
