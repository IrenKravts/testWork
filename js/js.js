window.addEventListener('DOMContentLoaded', function(){
    const swiper = new Swiper('.swiper', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: ".swiper-pagination",
        },
      });
      const btn = document.querySelector('.hero__btn');
      const modalOverlay = document.querySelector('.modal-overlay ');
      const modal = document.querySelector('.modal');
      const close = document.querySelector('.modal__close');
      btn.addEventListener('click',() => {
        modalOverlay.classList.add('modal-overlay--visible');
        modal.classList.add('modal--visible');
      })
      close.addEventListener('click',() => {
        modalOverlay.classList.toggle('modal-overlay--visible');
        modal.classList.toggle('modal--visible');
      })

      const burger = document.querySelector('.header__burger');
      const menu = document.querySelector('#menu');

      burger.addEventListener('click', () => {
        menu.classList.toggle('is-active');
        burger.classList.toggle('is-active')
      })
      new window.JustValidate('.subscribe-form', {
        rules:{
            tel: {
                required: true,
                function: () => {
                  const phone = telSelector.inputmask.unmaskedvalue();
                  return Number(phone) && phone.length === 10;
                }
              }
            },
            colorWrong: '#ff0f0f',
            messages: {
              name: {
                required: 'Введите имя',
                minLength: 'Введите 3 и более символов',
                maxLength: 'Запрещено вводить более 15 символов'
              },
              email: {
                email: 'Введите корректный email',
                required: 'Введите email'
              },
              tel: {
                required: 'Введите телефон',
                function: 'Здесь должно быть 10 символов без +7'
              }
            },
      submitHandler: function(thisForm) {
        let formData = new FormData(thisForm);
    
        let xhr = new XMLHttpRequest();
    
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log('Отправлено');
            }
          }
        }
    
        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);
    
        thisForm.reset();
      }
    })
    
});