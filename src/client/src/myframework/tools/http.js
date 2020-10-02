class Http {
  get() {
    return sendRequest('http://localhost:3000/api/users');
  }

  post(url, data) {
    return sendRequest(url, 'POST', data);
  }

  delete(url) {
    return sendRequest(url, 'DELETE');
  }
}

// function sendRequest(method, url) {
//   return fetch(url, { method }).then(response => response.json());
// }

// eslint-disable-next-line consistent-return
export async function sendRequest(url, method = 'GET', data = null) {
  try {
    const headers = {};
    let body;

    if (data) {
      // @ts-ignore
      headers['Content-Type'] = 'application/json';
      body = JSON.stringify(data);
    }
    const response = await fetch(url, {
      method,
      headers,
      body,
    });
    return await response.json();
  } catch (err) {
    console.log('Error:', err.message);
  }
}
export const http = new Http();
