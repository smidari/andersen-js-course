import { http, WMFComponent } from '../../myframework';
import { renderComponent } from '../../myframework/core/component/render-component';

class TabsPageComponent extends WMFComponent {
  constructor(config) {
    super(config);
    this.data = {
      users: [],
    };
  }

  async afterInit() {
    this.users = await http.get();
    this.createTable();
  }

  createTable() {
    this.users.map(item => {
      const tbody = document.querySelector('#table-body');

      const tdFullname = createElement('td', { className: `${item.fullName}` }, `${item.fullName}`);
      const tdEmail = createElement('td', {}, `${item.email}`);
      const tdMobile = createElement('td', {}, `${item.mobile}`);
      const tdCity = createElement('td', {}, `${item.city}`);

      const btnRemoveUser = createElement(
        'button',
        {
          className: 'delete_user waves-effect waves-light btn-small',
          type: 'button',
          'data-id': item._id,
        },
        'del'
      );
      btnRemoveUser.addEventListener('click', this.removeUser.bind(this));

      const tr = createElement('tr', {}, tdFullname, tdEmail, tdMobile, tdCity, btnRemoveUser);

      return tbody.appendChild(tr);
    });
  }

  async removeUser({ target }) {
    const id = target.getAttribute('data-id');
    http.delete(`http://localhost:3000/api/users/${id}`);
    renderComponent();
  }
}

export const tabsPageComponent = new TabsPageComponent({
  selector: 'app-tabs-page',
  template: `
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
