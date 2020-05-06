import { autoinject } from "aurelia-framework";
import { HttpClient } from "aurelia-fetch-client";

@autoinject
export class Oileain {
  coasts: any[];

  constructor(private http: HttpClient) {}

  async getCoasts() {
    if (!this.coasts) {
      const response = await this.http.fetch("https://edeleastar.github.io/oileain-api/all-slim.json");
      this.coasts = await response.json();
    }
    return this.coasts;
  }
}
