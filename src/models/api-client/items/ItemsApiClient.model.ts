import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import { ItemsApiClientUrlsInterface } from "./ItemsApiClientUrls.interface";
import { ItemsApiClientInterface } from "./ItemsApiClient.interface";
import { ItemInterface } from "@/models/items/Item.interface";

export class ItemsApiClientModel implements ItemsApiClientInterface {
  private readonly urls!: ItemsApiClientUrlsInterface;

  constructor(urls: ItemsApiClientUrlsInterface) {
    this.urls = urls;
  }

  fetchItems(): Promise<ItemInterface[]> {
    return new Promise<ItemInterface[]>((resolve) => {
      const url = this.urls.fetchItems;

      const options: AxiosRequestConfig = {
        headers: {},
      };
      axios
        .get(url, options)
        .then((response: AxiosResponse) => {
          resolve(response.data as ItemInterface[]);
        })
        .catch((error: unknown) => {
          console.error("ItemsApiClient: HttpClient: Get: error", error);
        });
    });
  }
}
