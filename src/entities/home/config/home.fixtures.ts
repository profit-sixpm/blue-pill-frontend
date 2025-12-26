import type { HomeListResponseDTO } from "../model";

export const homeListMockData: HomeListResponseDTO = {
  data: [
    { id: "1", email: "john.doe@example.com", name: "John Doe" },
    { id: "2", email: "jane.smith@example.com", name: "Jane Smith" },
    { id: "3", email: "michael.johnson@example.com", name: "Michael Johnson" },
    { id: "4", email: "sarah.wilson@example.com", name: "Sarah Wilson" },
    { id: "5", email: "david.brown@example.com", name: "David Brown" },
  ],
  message: "Success",
  code: "200",
};
