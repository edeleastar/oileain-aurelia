import { bindable } from "aurelia-framework";
import { faGithub } from "@fortawesome/free-brands-svg-icons";;
import { faBars, faMapMarked } from "@fortawesome/free-solid-svg-icons";
import { faMap } from "@fortawesome/free-regular-svg-icons";

export class Header {
  @bindable title: string;
  github = faGithub;
  map = faMapMarked;
  mapAlt = faMap;
  bars = faBars;
}
