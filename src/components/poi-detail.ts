import { autoinject } from "aurelia-framework";
import { LeafletMap } from "../services/leaflet-map";
import { Oileain } from "../services/oileain";

@autoinject
export class PoiDetail {
  title = "Olieain POI View";

  mapDescriptor = {
    id: "poi-map-id",
    height: 300,
    location: { lat: 53.2734, long: -7.7783203 },
    zoom: 8,
    minZoom: 7,
    activeLayer: "Satellite",
  };
  map: LeafletMap;

  constructor(private oileain: Oileain) {}

  async activate(params: any) {
  }

  attached() {
    this.map = new LeafletMap(this.mapDescriptor);
  }
}
