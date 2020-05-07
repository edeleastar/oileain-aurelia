import { autoinject } from "aurelia-framework";
import { LeafletMap } from "../services/leaflet-map";
import { Oileain } from "../services/oileain";
import { PointOfInterest } from "services/poi";

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

  poi: PointOfInterest;

  constructor(private oileain: Oileain) {}

  renderPoi(poi) {
    this.poi = poi;
    this.title = poi.name;
  }

  async activate(params) {
    await this.oileain.getCoasts();
    const poi = await this.oileain.getIslandById(params.id);
    this.renderPoi(poi);
  }

  attached() {
    this.map = new LeafletMap(this.mapDescriptor);
  }
}
