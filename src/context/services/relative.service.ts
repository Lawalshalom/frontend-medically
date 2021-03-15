import { IRelativeInfo } from './../../interfaces/RelativeInfo';
import { makeAutoObservable } from "mobx";

class RelativesService {
  constructor() {
    makeAutoObservable(this);
  }

  private relatives: IRelativeInfo[] = [];

  get allRelatives() {
    return [...this.relatives];
  }

  addRelative(info: IRelativeInfo) {
    this.relatives = [...this.relatives, info]
  }
}

const relativeServiceInstance = new RelativesService();
export default relativeServiceInstance;
