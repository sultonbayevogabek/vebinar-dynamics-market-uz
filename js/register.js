'use strict';

(async _ => {
  let user = JSON.parse(localStorage.getItem('user'));

  if (user && user?.name && user?.phone && user?.time) {
    const formData = new FormData();

    formData.append('Ismi', user?.name);
    formData.append('Telefon raqami', user?.phone);
    formData.append(`Ro'yxatdan o'tgan vaqti`, user?.time);

    let response = await fetch('https://script.google.com/macros/s/AKfycbyVbG2ovgz6iZReDBx2q-MYjOwCQD1eWfMgSfwlumuLB6e0WxN5WXeXGYHCaH0zxTEH/exec', {
      method: 'POST',
      body: formData
    })
    await response.json();
    localStorage.removeItem('user');
  } else {
    localStorage.removeItem('user');
  }
})()

