import { WMFComponent } from '../../myframework';

class HomePageComponent extends WMFComponent {
  constructor(config) {
    super(config);
    this.data = {
      title: 'DADAD !!!',
      ip: 'loading',
    };
  }

  // async afterInit() {
  //   // http.get('https://api.ipify.org/?format=json').then(({ ip }) => {
  //   //   this.data.ip = ip;
  //   //   this.render();
  //   // });
  //   const sda = await http.get();
  //   console.log('asdas', sda);
  // }
}

export const homePageComponent = new HomePageComponent({
  selector: 'app-home-page',
  template: `
   <div class="row">
    <div class="col s6 offset-s3" style="margin-top: 20px;">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Home page</span>
        </div>
        <div class="card-action">
          <a href="#add" class="waves-effect waves-light btn"><i class="material-icons left">add</i>Create New User</a>
          <a href="#tabs" class="waves-effect waves-light btn">View All Users</a>
        </div>
      </div>
    </div>
  </div>`,
});
