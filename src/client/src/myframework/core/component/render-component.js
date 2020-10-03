import { wfm } from '../../tools/util';

export async function renderComponent(component) {
  if (!wfm.isUndefined(component.onInit)) await component.onInit();
  component.render();
  if (!wfm.isUndefined(component.afterInit)) component.afterInit();
}
