import { WMFComponent } from '../../myframework';

class NotFound extends WMFComponent {
  constructor(config) {
    super(config);
  }
}

export const notFound = new NotFound({
  selector: 'app-not-found',
  template: `
 <div style="display: flex; align-items: center; justify-content: center;">
   <div>
     <h2 class="red darken-1">Page not found</h2>
     <a href="#">Go to home page</a>
  </div>
</div>
  `,
});
