type propsType = {
  className?: string;
  class?: string;
  alt?: string;
  src?: string;
  'data-id'?: string;
  'data-includes'?: Array<string>;
  value?: string;
  placeholder?: string;
  'data-tooltip'?: string;
  draggable?: boolean;
};
type childrenType = Array<HTMLElement | string>;

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
