import { improvesItem, mainItem } from './index';

type propsType = {
  className?: string;
  class?: string;
  alt?: string;
  src?: string;
  'data-id'?: string;
  'data-includes'?: Array<string>;
  sss?: string;
};
type childrenType = Array<HTMLElement | string>;

export function save(key: string, data: Array<mainItem> | Array<improvesItem>) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function load(key: string) {
  const data: string | null = localStorage.getItem(key);
  return JSON.parse(<string>data);
}

export function createElement(tagName: string, props: propsType, ...children: childrenType) {
  const element = document.createElement(tagName);
  Object.keys(props).forEach(key => {
    // @ts-ignore
    key === 'className' ? (element[key] = props[key]) : element.setAttribute(key, props[key]);
  });

  children.forEach(child => {
    if (typeof child === 'string') {
      element.appendChild(document.createTextNode(child));
    } else {
      element.appendChild(child);
    }
  });

  return element;
}

export class EventEmitter {
  private events: {
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
