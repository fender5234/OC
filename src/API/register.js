// Функция отправки данных на регистрацию
async function registrationSend(event, apiUrl, setResponseState, setResponseFinally, userData) {
  try {
    event.preventDefault();
    let register = await fetch(apiUrl, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    setResponseFinally(true);

    if (register.ok) {
      setResponseState(register.ok);
    } 
  }

  catch {
    console.log('Че то там с бекендами!');
  }
}

export default registrationSend;

