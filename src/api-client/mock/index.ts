import { ApiClientInterface } from "@/models/api-client/ApiClient.interface";
import itemsApiClient from "./items";

const apiMockClient: ApiClientInterface = {
  items: itemsApiClient,
};
// export our instance
export default apiMockClient;
