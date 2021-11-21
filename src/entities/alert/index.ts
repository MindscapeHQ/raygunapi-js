/** @format */
import { IAlert } from "./models";

export class Alerts {
  baseUrl: string = "alerts/";

  get(id?: string): IAlert | IAlert[] {
    return {
      id: "1",
      name: "Test",
    };
  }
}
