import { setupWorker } from "msw/browser";
import { homeHandlers } from "@/entities/home";

export const worker = setupWorker(...homeHandlers);
