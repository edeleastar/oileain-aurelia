import { LeafletMap } from "services/leaflet-map";

export class Home {

  mapDescriptor = {
    id: "home-map-id",
    height: 1200,
    location: { lat: 53.2734, long: -7.7783203 },
    zoom: 8,
    minZoom: 7,
    activeLayer: "",
  };

  map: LeafletMap;

  attached() {
    this.map = new LeafletMap(this.mapDescriptor);
  }
}
