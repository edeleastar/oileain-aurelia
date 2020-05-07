import { Oileain } from "../../services/oileain";
import { autoinject } from "aurelia-framework";
import { Coast } from "../../services/poi";

@autoinject
export class CoastsSidebar {
  coasts: Array<Coast>;

  constructor(private oileain: Oileain) {
    this.loadCoasts();
  }

  async loadCoasts() {
    this.coasts = await this.oileain.getCoasts();
  }
}
