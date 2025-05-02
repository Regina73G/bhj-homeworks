const book = document.getElementById("book");
const bookControls = document.querySelectorAll(".book__control");
//Ищу элемент, на который кликнули
bookControls.forEach((bookControl) => {
  const bookControlElements = bookControl.querySelectorAll("a");
  bookControlElements.forEach((bookControlElement) => {
    bookControlElement.addEventListener("click", (event) => {
      event.preventDefault();
      const clickedElement = event.target;
      if(clickedElement.closest(".book__control_font-size")) {
        getFontSize(clickedElement);
      }else if(clickedElement.closest(".book__control_color")) {
        getTextColor(clickedElement);
      }else if(clickedElement.closest(".book__control_background")) {
        getTextBackground(clickedElement);
      }

      function getFontSize(clickedElement) {
        const parent = clickedElement.parentNode;
        const Elements = parent.querySelectorAll('.font-size');
        //Смена активного элемента
        Elements.forEach((el) => {
          el.classList.remove("font-size_active");
        });

        clickedElement.classList.add("font-size_active");
        //Сменя шрифта
        book.classList.forEach(className => {
          if (className.startsWith('book_fs-')) {
            book.classList.remove(className);
          }
        });

        let selectedSize = clickedElement.dataset.size;
        if(selectedSize) {
          book.classList.add(`book_fs-${selectedSize}`);
        }
      }

      function getTextColor(clickedElement) {
        const parent = clickedElement.parentNode;
        const Elements = parent.querySelectorAll('.color');

        // Смена активного элемента
        Elements.forEach((el) => {
          el.classList.remove("color_active");
        });

        clickedElement.classList.add("color_active");
        // Смена цвета текста
        book.classList.forEach(className => {
          if (className.startsWith('book_color-')) {
            book.classList.remove(className);
          }
        });

        let selectedColor = clickedElement.dataset.textColor;
        if (selectedColor) {
          book.classList.add(`book_color-${selectedColor}`);
        }
      }

      function getTextBackground(clickedElement) {
        const parent = clickedElement.parentNode;
        const Elements = parent.querySelectorAll('.color');
      
        // Смена активного элемента
        Elements.forEach((el) => {
          el.classList.remove("color_active");
        });
      
        clickedElement.classList.add("color_active");
      
        // Смена фона
        book.classList.forEach(className => {
          if (className.startsWith('book_bg-')) {
            book.classList.remove(className);
          }
        });
      
        let selectedColor = clickedElement.dataset.bgColor;
        if (selectedColor) {
          book.classList.add(`book_bg-${selectedColor}`);
        }
      }
    });
  });
});