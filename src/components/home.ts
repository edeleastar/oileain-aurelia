import { autoinject } from "aurelia-framework";
import { CoastalLeafletMap } from "services/coastal-leaflet-map";
import { Coast } from "services/poi";
import { Oileain } from "services/oileain";

@autoinject
export class Home {
  mapDescriptor = {
    id: "home-map-id",
    height: 1200,
    location: { lat: 53.2734, long: -7.7783203 },
    zoom: 8,
    minZoom: 7,
    activeLayer: "",
  };

  map: CoastalLeafletMap;
  coasts: Array<Coast>;

  constructor(private oileain: Oileain) {}

  async activate(params: any) {
    this.coasts = await this.oileain.getCoasts();
  }

  attached() {
    this.map = new CoastalLeafletMap(this.mapDescriptor);
    if (this.coasts) {
      this.map.populateCoasts(this.coasts);
    }
  }
}
