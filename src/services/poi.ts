export interface Geodetic {
  lat: number;
  long: number;
}

export interface Grid {
  sheet: string;
  eastings: number;
  northings: number;
}

export interface FullGrid {
  eastings: number;
  northings: number;
}

export interface Coordinates {
  irishGrid: Grid;
  fullIrishGrid: FullGrid;
  tmcGrid: FullGrid;
  geo: Geodetic;
}

export interface PointOfInterest {
  name: string;
  safeName: string;
  nameHtml: string;
  costalZone: string;
  coordinates: Coordinates;
  cursor: number;
  description: string;
  coast?: Coast;
}

export interface Coast {
  title: string;
  variable: string;
  identifier: string;
  geo: Geodetic;
  pois: Array<PointOfInterest>;
}

export interface Region {
  title: string;
  id: string;
  location: Geodetic;
}
