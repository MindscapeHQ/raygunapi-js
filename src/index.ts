/** @format */
import { ApiClient } from "./api";

function createClient(clientId: string, clientSecret: string): ApiClient {
  return new ApiClient(clientId, clientSecret);
}
