import { LightningElement } from "lwc";

export default class App extends LightningElement {
  things = ["home"];

  currentView = "home";
  offline = false;
  hideViews = false;
  loading = false;

  async connectedCallback() {
    if (this._init) {
      return;
    }

    this._init = true;

    console.log("App Ready");
  }

  navigate(event) {
    const { name } = event.detail;

    if (name !== this.currentView) {
      this.currentView = name;
    }
  }

  setListeners() {
    window.addEventListener("load", () => window.history.pushState({}, ""));

    window.addEventListener("popstate", () => window.history.pushState({}, ""));

    window.addEventListener("online", () => this.isOnline());

    window.addEventListener("offline", () => this.isOffline());
  }

  isOnline() {
    this.offline = false;
  }
  isOffline() {
    this.offline = true;
  }
}
