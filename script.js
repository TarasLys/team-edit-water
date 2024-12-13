document.addEventListener('DOMContentLoaded', function() {
  // Закрытие модального окна при нажатии на крестик
  document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
  });

  // Закрытие модального окна при клике вне его
  window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
  });

  // Изменение количества воды
  function changeAmount(delta) {
    let amountElement = document.getElementById('amount');
    let currentAmount = parseInt(amountElement.textContent);
    let newAmount = currentAmount + delta;
    if (newAmount >= 0) {
        amountElement.textContent = newAmount + 'ml';
        document.getElementById('autoFillInput').value = newAmount + 'ml'; 
        document.getElementById('value').value = newAmount; 
        updateWaterEntry();
    }
  }

  // Добавление обработчиков событий для кнопок изменения количества
  document.getElementById('decrease-amount').addEventListener('click', function() {
    changeAmount(-50);
  });

  document.getElementById('increase-amount').addEventListener('click', function() {
    changeAmount(50);
  });

  // Заполнение выпадающего списка времени
  function populateTimeDropdown() {
    const timeDropdown = document.getElementById('time');
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = Math.floor(now.getMinutes() / 5) * 5;

    for (let hour = 0; hour < 24; hour++) {
        for (let minute = 0; minute < 60; minute += 5) {
            const option = document.createElement('option');
            option.value = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
            option.textContent = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
            if (hour === currentHour && minute === currentMinute) {
                option.selected = true;
            }
            timeDropdown.appendChild(option);
        }
    }
  }

  // Обновление значений при изменении поля ввода
  document.getElementById('value').addEventListener('blur', function() {
    const value = parseInt(this.value);
    if (!isNaN(value) && value >= 0) {
        document.getElementById('amount').textContent = value + 'ml';
        document.getElementById('autoFillInput').value = value + 'ml';
        updateWaterEntry();
    }
  });

  // Удаление 'ml' при фокусе на поле amount
  document.getElementById('amount').addEventListener('focus', function() {
    this.textContent = this.textContent.replace('ml', '');
  });

  // Добавление 'ml' при потере фокуса на поле amount
  document.getElementById('amount').addEventListener('blur', function() {
    if (this.textContent === '') {
        this.textContent = '0ml';
    } else {
        this.textContent += 'ml';
    }
    updateWaterEntry();
  });

  // Очистка поля value при фокусе
  document.getElementById('value').addEventListener('focus', function() {
    if (this.value === '0') {
        this.value = '';
    }
  });

  // Восстановление значения 0 при потере фокуса на поле value
  document.getElementById('value').addEventListener('blur', function() {
    if (this.value === '') {
        this.value = '0';
    }
    updateWaterEntry();
  });

  // Заполнение выпадающего списка времени при загрузке страницы
  populateTimeDropdown();

  // Обновление значений в элементах water-amount и water-time при открытии формы и изменении
  function updateWaterEntry() {
    const amount = document.getElementById('amount').textContent;
    const time = document.getElementById('time').value;
    document.querySelector('.water-amount').textContent = amount;
    document.querySelector('.water-time').textContent = time;
  }

  // Обновление значений при открытии формы
  updateWaterEntry();
});







// document.querySelector('.close').addEventListener('click', function() {
//     document.getElementById('modal').style.display = 'none';
// });

// window.addEventListener('click', function(event) {
//     if (event.target == document.getElementById('modal')) {
//         document.getElementById('modal').style.display = 'none';
//     }
// });

// function changeAmount(delta) {
//     let amountElement = document.getElementById('amount');
//     let currentAmount = parseInt(amountElement.textContent);
//     let newAmount = currentAmount + delta;
//     if (newAmount >= 0) {
//         amountElement.textContent = newAmount + 'ml';
//         document.getElementById('autoFillInput').value = newAmount + 'ml'; 
//         document.getElementById('value').value = newAmount; 
//     }
// }

// function populateTimeDropdown() {
//     const timeDropdown = document.getElementById('time');
//     const now = new Date();
//     const currentHour = now.getHours();
//     const currentMinute = Math.floor(now.getMinutes() / 5) * 5;

//     for (let hour = 0; hour < 24; hour++) {
//         for (let minute = 0; minute < 60; minute += 5) {
//             const option = document.createElement('option');
//             option.value = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
//             option.textContent = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
//             if (hour === currentHour && minute === currentMinute) {
//                 option.selected = true;
//             }
//             timeDropdown.appendChild(option);
//         }
//     }
// }

// document.getElementById('value').addEventListener('blur', function() {
//     const value = parseInt(this.value);
//     if (!isNaN(value) && value >= 0) {
//         document.getElementById('amount').textContent = value + 'ml';
//         document.getElementById('autoFillInput').value = value + 'ml';
//     }
// });

// document.getElementById('amount').addEventListener('focus', function() {
//     this.textContent = this.textContent.replace('ml', '');
// });

// document.getElementById('amount').addEventListener('blur', function() {
//     if (this.textContent === '') {
//         this.textContent = '0ml';
//     } else {
//         this.textContent += 'ml';
//     }
// });

// document.getElementById('value').addEventListener('focus', function() {
//     if (this.value === '0') {
//         this.value = '';
//     }
// });

// document.getElementById('value').addEventListener('blur', function() {
//     if (this.value === '') {
//         this.value = '0';
//     }
// });

// populateTimeDropdown();


// document.querySelector('.save-button').addEventListener('click', function() {
//   const amount = document.getElementById('value').value + ' ml';
//   const time = document.getElementById('time').value;
//   document.querySelector('.water-amount').textContent = amount;
//   document.querySelector('.water-time').textContent = time;
// });

