import { EventEmitter } from './utils/eventEmiter/EventEmiter';

export class GlobalController extends EventEmitter {
  controllerMain: any;

  constructor(controller: any) {
    super();
    this.controllerMain = controller;
  }
}
