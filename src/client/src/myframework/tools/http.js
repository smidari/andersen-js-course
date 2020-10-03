class Http {
  get() {
    return sendRequest('http://localhost:3000/api/users');
  }

  post(data) {
    return sendRequest('http://localhost:3000/api/users', 'POST', data);
  }

  delete(id) {
    return sendRequest(`http://localhost:3000/api/users/${id}`, 'DELETE');
  }

  put(id, data) {
    return sendRequest(`http://localhost:3000/api/users/${id}`, 'PUT', data);
  }
}

export async function sendRequest(url, method = 'GET', data = null) {
  try {
    const headers = {};
    let body;

    if (data) {
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
