import { PLATFORM } from "aurelia-pal";
import { Router, RouterConfiguration } from "aurelia-router";

export class App {
  title = "Oileain";
  constructor() {}

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = "Oileain";
    config.options.pushState = true;
    config.map([
      {
        route: [""],
        moduleId: PLATFORM.moduleName("./components/home"),
        title: "All Islands",
      },
      {
        route: "poi/:id",
        moduleId: PLATFORM.moduleName("./components/poi-detail"),
        name: "pois",
        title: "Island",
      },
    ]);
  }
}
