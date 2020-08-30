export function save(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function load(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function createElement(tag, props, ...children) {
  const element = document.createElement(tag);

  Object.keys(props).forEach(key => {
    if (key.startsWith('data-')) {
      element.setAttribute(key, props[key]);
    } else {
      element[key] = props[key];
    }
  });

  children.forEach(child => {
    if (typeof child === 'string') {
      element.appendChild(document.createTextNode(child));
    }
    element.appendChild(child);
  });

  return element;
}

export class EventEmitter {
  constructor() {
    this.events = {};
  }

  subscribe(eventName, callback) {
    // eslint-disable-next-line no-unused-expressions
    this.events[eventName] ? this.events[eventName].push(callback) : (this.events[eventName] = []);
  }

  emit(eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(fn => {
        fn.call(null, data);
      });
    }
  }
}
