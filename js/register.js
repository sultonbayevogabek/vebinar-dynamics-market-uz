'use strict';

(async _ => {
  const statistics = new Statistics();
  let user = JSON.parse(localStorage.getItem('user'));

  document.querySelector('#joinToChannel')?.addEventListener('click', async (e) => {
    e.target.setAttribute('disabled', 'true');
    await statistics.onClickTgBtn();
    e.target.removeAttribute('disabled');
    window.location.href = 'https://t.me/+jcN0N7kRX0ljMWIy';
  })

  if (user && user?.name && user?.phone && user?.time) {
    const formData = new FormData();

    formData.append('Ismi', user?.name);
    formData.append('Telefon raqami', user?.phone);
    formData.append(`Ro'yxatdan o'tgan vaqti`, user?.time);
    formData.append(`Foydalanuvchi ID`, statistics.userId);
    formData.append(`Timestamp`, statistics.time?.toString());

    let response = await fetch('https://script.google.com/macros/s/AKfycbxRE4sCEGe2lGLnDPXg4vJYJ0C6YfK2unf87Z20y_RuxXgSazCZUhYMKWjKZ-c5eERl/exec', {
      method: 'POST',
      body: formData
    })
    await response.json();
    await statistics.onRegister(user);
    localStorage.removeItem('user');
  } else {
    localStorage.removeItem('user');
  }
})()

