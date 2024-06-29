// Функция для проверки что пользователь вошел!
async function authMe(apiUrl) {
  try {
    let register = await fetch(apiUrl, {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    });

    if (register.ok) {
      console.log('Пользователь залогинен!!');
    }
  }

  catch {
    console.log('Какие то проблемы)))');
  }
}

export default authMe;

