export class EventEmitter {
  events: {
    [key: string]: Array<Function>;
  };

  constructor() {
    this.events = {};
  }

  subscribe(type: string, listener: any) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
  }

  emit(type: string, arg: any) {
    if (this.events[type]) {
      this.events[type].forEach(listener => listener(arg));
    }
  }
}
