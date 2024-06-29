// Функция для логина(входа в личный кабинет)
async function login(event, apiUrl, userData,setUserAuth) {
  try {
    event.preventDefault();
    let register = await fetch(apiUrl, {
      method: 'POST',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (register.ok) {
      setUserAuth(true);
    }
  }

  catch {
    console.log('Какие то проблемы)))');
  }
}

export default login; 

