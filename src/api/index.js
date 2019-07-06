export function getDeliveries() {
  const token = localStorage.getItem('token');
  return fetch('http://localhost:5001/deliveries', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  })
}

export function createDelivery(delivery) {
  const token = localStorage.getItem('token');
  return fetch('http://localhost:5001/deliveries', {
    method: 'POST',
    body: JSON.stringify({
      description: delivery.description
    }),
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  });
}

export function login(user) {
  return fetch('http://localhost:5000/login', {
    method: 'POST',
    body: JSON.stringify({
    	"nombre": user.email,
    	"password": user.password
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

export function register(user) {
  return fetch('http://localhost:5000/register', {
    method: 'POST',
    body: JSON.stringify({
    	"nombre": user.email,
    	"password": user.password
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
