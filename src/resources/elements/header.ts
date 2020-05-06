import { bindable } from "aurelia-framework";
import { faGithub } from "@fortawesome/free-brands-svg-icons";;

export class Header {
  @bindable title: string;
  github = faGithub;
}
