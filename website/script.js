// Отправка форм
const forms = document.querySelectorAll('form');

forms.forEach(form => {
   form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Здесь должна быть логика отправки формы
      // Например, через Fetch API или AJAX

      const formData = new FormData(form);
      const formValues = Object.fromEntries(formData.entries());
      console.log('Форма отправлена:', formValues);

      // Показываем сообщение об успешной отправке
      alert('Ваша заявка отправлена! Мы свяжемся с вами в ближайшее время.');

      // Сбрасываем форму
      form.reset();

      // Закрываем модальное окно, если оно открыто
      if (form.id === 'modal-form') {
         modal.style.display = 'none';
         document.body.style.overflow = 'auto';
      }
   });
});