import { http, WMFComponent } from '../../myframework';

class AddNewUserPageComponent extends WMFComponent {
  constructor(config) {
    super(config);
  }

  events() {
    return {
      'click #add': 'createNewUser',
    };
  }

  createNewUser() {
    const fullName = document.getElementById('full-name');
    const email = document.getElementById('email');
    const mobile = document.getElementById('mobile');
    const city = document.getElementById('city');
    const newUser = {
      fullName: fullName.value,
      email: email.value,
      mobile: mobile.value,
      city: city.value,
    };
    http.post(newUser);
    this.render();
  }
}

export const addNewUserPageComponent = new AddNewUserPageComponent({
  selector: 'app-home-page',
  template: `
  <div class="row">
    <div class="col s6 offset-s3">
      <form>
        <div>
          <input
            id="full-name"
            type="text"
            name="fullName"
            placeholder="Full Name"
          />
        </div>
        <div>
          <input id="email" type="text" name="email" placeholder="Email" />
        </div>
        <div >
          <div>
            <input
              id="mobile"
              type="text"
              name="mobile"
              placeholder="Mobile"
            />
          </div>
          <div>
            <input id="city" type="text" name="city" placeholder="City" />
          </div>
        </div >
        <div >
          <button type="button" class="waves-effect waves-light btn" id="add">Add User</button>
        </div>
      </form>
    </div>
  </div>
`,
});
