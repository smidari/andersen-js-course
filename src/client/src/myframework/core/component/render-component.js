import { wfm } from '../../tools/util';

export function renderComponent(component) {
  if (!wfm.isUndefined(component.onInit)) component.onInit();
  component.render();
  if (!wfm.isUndefined(component.afterInit)) component.afterInit();
}

// onInit жизнен. цикл когда компонент был проиницизоран но не наход в DOM дереве
// afterInit когда весь компонент в DOM дереве
