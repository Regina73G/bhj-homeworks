const xhr = new XMLHttpRequest();
const loader = document.getElementById("loader");
const itemsContainer = document.getElementById("items");

function createCurrencyItem(charCode, value) {
  const item = document.createElement("div");
  item.classList.add("item");
  item.innerHTML = `
    <div class="item__code">
      ${charCode}
    </div>
    <div class="item__value">
      ${value}
    </div>
    <div class="item__currency">
      руб.
    </div>
  `;

  return item;
}

function loadCurrencies() {
  xhr.addEventListener("load", () => {
    if(xhr.readyState === xhr.DONE) {
      loader.classList.remove("loader_active");
    }

    if(xhr.status >= 200 && xhr.status < 300) {
      try {
        const data = JSON.parse(xhr.responseText);
        const valuteData = data.response.Valute;
        itemsContainer.innerHTML = "";

        for (const currencyCode in valuteData) {
          if (valuteData.hasOwnProperty(currencyCode)) {
            const currency = valuteData[currencyCode];
            const itemElement = createCurrencyItem(currency.CharCode, currency.Value);
            itemsContainer.appendChild(itemElement);
          }
        }
      } catch (error) {
        console.error("Ошибка при обработке JSON:", error);
        itemsContainer.innerHTML = "<p>Ошибка при загрузке данных. Пожалуйста, обновите страницу</p>";
      }
    }
  });

  xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
  xhr.send();
}

loadCurrencies();