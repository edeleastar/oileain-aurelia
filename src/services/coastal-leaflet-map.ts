import { LeafletMap, LeafletMapDescriptor } from "./leaflet-map";
import { Coast, PointOfInterest } from "./poi";
import * as L from "leaflet";
import Marker = L.Marker;

export interface PoiSelect {
  onSelect(id: string): any;
}

export class CoastalLeafletMap extends LeafletMap {

  markerMap = new Map<Marker, PointOfInterest>();
  constructor(descriptor: LeafletMapDescriptor) {
    super(descriptor);
  }

  populateCoast(coast: Coast, link: boolean = true, poiSelect: PoiSelect = null) {
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
      if (poiSelect) {
        this.markerMap.set(marker, poi);
        marker.addTo(group).on("popupopen", (event) => {
          const marker = event.popup._source;
          const shortPoi = this.markerMap.get(marker);
          poiSelect.onSelect(shortPoi.safeName);
        });
      }
    });
    this.addLayer(coast.title, group);
    this.control.addOverlay(group, coast.title);
  }

  populateCoasts(coasts: Array<Coast>, link: boolean = true,  poiSelect: PoiSelect = null) {
    if (this.imap) {
      coasts.forEach((coast) => {
        this.populateCoast(coast, link, poiSelect);
      });
      this.imap.invalidateSize();
    }
  }
}
