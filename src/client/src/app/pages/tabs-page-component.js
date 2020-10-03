import { http, WMFComponent } from '../../myframework';

class TabsPageComponent extends WMFComponent {
  constructor(config) {
    super(config);
    this.users = [];
    this.changeUserId = '';
  }

  events() {
    return {
      'click #change-user': 'changeUserOnDB',
      'click #change-cancel': 'closeForm',
    };
  }

  async onInit() {
    this.users = await http.get();
  }

  afterInit() {
    this.createBodyTable();
  }

  createBodyTable() {
    this.users.map(item => {
      const tbody = document.querySelector('#table-body');

      const tdFullname = createElement('td', { className: `${item.fullName}` }, `${item.fullName}`);
      const tdEmail = createElement('td', {}, `${item.email}`);
      const tdMobile = createElement('td', {}, `${item.mobile}`);
      const tdCity = createElement('td', {}, `${item.city}`);
      const btnDeleteUser = createElement(
        'button',
        {
          className: 'waves-effect waves-light btn',
          type: 'button',
          'data-id': item._id,
        },
        'del'
      );
      const tdDelete = createElement('td', {}, btnDeleteUser);
      btnDeleteUser.addEventListener('click', this.removeUser.bind(this));
      const btnChangeUser = createElement(
        'a',
        {
          className: 'waves-effect waves-light btn',
          type: 'button',
          'data-id': item._id,
        },
        'change'
      );
      const tdChange = createElement('td', { 'data-id': item._id }, btnChangeUser);
      tdChange.addEventListener('click', this.changeUser.bind(this));

      const tr = createElement('tr', {}, tdFullname, tdEmail, tdMobile, tdCity, tdChange, tdDelete);

      return tbody.appendChild(tr);
    });
  }

  async removeUser({ target }) {
    const id = target.getAttribute('data-id');
    http.delete(id);
    this.render();
    this.users = [...this.users.filter(user => user._id !== id)];
    this.createBodyTable();
  }

  changeUser({ target }) {
    const id = target.getAttribute('data-id');
    this.changeUserId = id;
    const changeUser = this.users.find(user => user._id === id);
    const fullName = document.getElementById('full-name');
    const email = document.getElementById('email');
    const mobile = document.getElementById('mobile');
    const city = document.getElementById('city');
    fullName.value = changeUser.fullName;
    email.value = changeUser.email;
    mobile.value = changeUser.mobile;
    city.value = changeUser.city;

    this.openForm();
  }

  async changeUserOnDB() {
    const fullName = document.getElementById('full-name');
    const email = document.getElementById('email');
    const mobile = document.getElementById('mobile');
    const city = document.getElementById('city');
    const newUser = {
      _id: this.changeUserId,
      fullName: fullName.value,
      email: email.value,
      mobile: mobile.value,
      city: city.value,
    };
    this.render();
    this.users = this.users.map(user => {
      if (user._id === this.changeUserId) {
        user = { ...newUser };
        return user;
      }
      return user;
    });
    this.createBodyTable();
    await http.put(this.changeUserId, newUser);
    this.closeForm();
  }

  openForm() {
    const form = document.querySelector('.form-change');
    form.style.display = 'block';
  }

  closeForm() {
    const form = document.querySelector('.form-change');
    form.style.display = 'none';
  }
}

export const tabsPageComponent = new TabsPageComponent({
  selector: 'app-tabs-page',
  template: `
<div class="form-change row" style="display: none">
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
          <button type="button" class="waves-effect waves-light btn" id="change-user">Change User</button>
          <button type="button" class="waves-effect waves-light btn" id="change-cancel">Cancel</button>
        </div>
      </form>
    </div>
  </div>
  <div class="row">
    <div class="col s6 offset-s3">
      <table>
        <thead>
        <tr>
          <th>Full Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>City</th>
          <th></th>
        </tr>
        </thead>
        <tbody id="table-body"></tbody>
      </table>
    </div>
  </div>
`,
});

function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);
  Object.keys(props).forEach(key => {
    // eslint-disable-next-line no-unused-expressions
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
