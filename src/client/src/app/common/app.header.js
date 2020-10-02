import { WMFComponent } from '../../myframework';

class AppHeader extends WMFComponent {
  constructor(config) {
    super(config);
  }
}

export const appHeader = new AppHeader({
  selector: 'app-header',
  template: `
  <nav class="cyan">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo" style="margin-left: 20px;">Client-Server App</a>
      <ul class="right hide-on-med-and-down">
        <li><a href="#">Home</a></li>
        <li><a href="#tabs">Table Users</a></li>
        <li><a href="#add">Add new User</a></li>
      </ul>
    </div>
  </nav>
  `,
});
