import { wfm } from '../../tools/util';

export class Component {
  constructor(config) {
    this.template = config.template;
    this.selector = config.selector;
    this.el = null;
  }

  render() {
    this.el = document.querySelector(this.selector);
    if (!this.el) {
      throw new Error(`Component whith selector ${this.selector} wasn't found`);
    } else {
      this.el.innerHTML = compileTemplate(this.template, this.data);

      this._initEvents();
    }
  }

  _initEvents() {
    if (wfm.isUndefined(this.events)) {
      return;
    }
    const events = this.events();
    Object.keys(events).forEach(key => {
      const listener = key.split(' ');
      this.el
        .querySelector(listener[1])
        .addEventListener(listener[0], this[events[key]].bind(this));
    });
  }
}

function compileTemplate(template, data) {
  if (wfm.isUndefined(data)) {
    return template;
  }
  const regex = /\{{(.*?)}}/g;
  // eslint-disable-next-line no-param-reassign
  template = template.replace(regex, (str, d) => {
    const key = d.trim();
    return data[key];
  });
  return template;
}
