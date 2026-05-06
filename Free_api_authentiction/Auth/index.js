

    let isLoggedIn = localStorage.getItem('token') !== null;

    function navigate(pageName) {
      if (pageName === 'dashboard' && isLoggedIn === false) {
        pageName = 'login';
      }
      if ((pageName === 'login' || pageName === 'register') && isLoggedIn === true) {
        pageName = 'dashboard';
      }

      ['login', 'register', 'dashboard'].forEach(function(p) {
        document.getElementById('page-' + p).classList.add('hidden');
      });

      document.getElementById('page-' + pageName).classList.remove('hidden');

      if (isLoggedIn) {
        document.getElementById('nav-guest').classList.add('hidden');
        document.getElementById('nav-app').classList.remove('hidden');
      } else {
        document.getElementById('nav-guest').classList.remove('hidden');
        document.getElementById('nav-app').classList.add('hidden');
      }
    }

    async function handleLogin() {
      const username = document.getElementById('login-username').value;
      const password = document.getElementById('login-password').value;

      const res = await fetch('https://api.freeapi.app/api/v1/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();
      console.log('Login response:', data);

      if (res.ok) {
        localStorage.setItem('token', data.data.accessToken);
        localStorage.setItem('user', JSON.stringify(data.data.user));
        isLoggedIn = true;

        
        navigate('dashboard');
      } else {
        alert(data.message);
      }
    }

    async function handleRegister() {
      const body = {
        username: document.getElementById('reg-username').value,
        email:    document.getElementById('reg-email').value,
        password: document.getElementById('reg-password').value,
        role:     document.getElementById('reg-role').value
      };

      console.log('Sending:', body);

      const res = await fetch('https://api.freeapi.app/api/v1/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      const data = await res.json();
      console.log('Response from API:', data);

      if (res.ok) {
        alert('Account created! Please login.');
        navigate('login');
      } else {
        alert('Error: ' + (data.message || JSON.stringify(data)));
      }
    }

    function logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      isLoggedIn = false;
      navigate('login');
    }

    const startPage = location.hash.replace('#', '') || 'login';
    navigate(startPage);

  