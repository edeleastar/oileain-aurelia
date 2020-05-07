import { LeafletMap } from "../services/leaflet-map";
import { Coast, PointOfInterest } from "../services/poi";
import { autoinject } from "aurelia-framework";
import { Oileain } from "../services/oileain";
import { CoastalLeafletMap } from "../services/coastal-leaflet-map";

@autoinject
export class Navigator {
  mainMapDescriptor = {
    id: "home-map-id",
    height: 650,
    location: { lat: 53.2734, long: -7.7783203 },
    zoom: 7,
    minZoom: 7,
    activeLayer: "",
  };

  islandMapDescriptor = {
    id: "island-map-id",
    height: 250,
    location: { lat: 53.2734, long: -7.7783203 },
    zoom: 8,
    minZoom: 7,
    activeLayer: "Satellite",
  };

  mainMap: CoastalLeafletMap;
  islandMap: LeafletMap;
  coasts: Array<Coast>;
  poi: PointOfInterest;

  constructor(private oileain: Oileain) {}

  async activate(params) {
    this.coasts = await this.oileain.getCoasts();
  }

  attached() {
    this.mainMap = new CoastalLeafletMap(this.mainMapDescriptor);
    this.islandMap = new LeafletMap(this.islandMapDescriptor);
    this.mainMap.populateCoasts(this.coasts, false);
  }
}
