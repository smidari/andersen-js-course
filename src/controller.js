class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    view.show(model.state);
  }
}

export default Controller;
