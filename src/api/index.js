export function getDeliveries() {
  const token = localStorage.getItem('token');
  return fetch(`${process.env.REACT_APP_DELIVERIES_SERVICE_URL}/deliveries`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  })
}

export function createDelivery(delivery) {
  const token = localStorage.getItem('token');
  return fetch(`${process.env.REACT_APP_DELIVERIES_SERVICE_URL}/deliveries`, {
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
  return fetch(`${process.env.REACT_APP_USERS_SERVICE_URL}/login`, {
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
  return fetch(`${process.env.REACT_APP_USERS_SERVICE_URL}/register`, {
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
