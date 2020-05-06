import { LeafletMap, LeafletMapDescriptor } from "./leaflet-map";
import { Coast, PointOfInterest } from "./poi";
import * as L from "leaflet";

export class CoastalLeafletMap extends LeafletMap {

  constructor(descriptor: LeafletMapDescriptor) {
    super(descriptor);
  }

  populateCoast(coast: Coast, link: boolean = true) {
    let group = L.layerGroup([]);
    coast.pois.forEach((poi) => {
      let marker = L.marker([poi.coordinates.geo.lat, poi.coordinates.geo.long]);
      var newpopup = L.popup({ autoClose: false, closeOnClick: false });
      const popupTitle = link
      ? `<a href='/poi/${poi.safeName}'>${poi.name} <small>(click for details}</small></a>`
      : poi.name;
      newpopup.setContent(popupTitle);
      marker.bindPopup(newpopup);
      marker.addTo(group);
    });
    this.addLayer(coast.title, group);
    this.control.addOverlay(group, coast.title);
  }

  populateCoasts(coasts: Array<Coast>, link: boolean = true) {
    if (this.imap) {
      coasts.forEach((coast) => {
        this.populateCoast(coast, link);
      });
      this.imap.invalidateSize();
    }
  }
}
