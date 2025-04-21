const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach(dropdown => {
  const dropdownValue = dropdown.querySelector(".dropdown__value");
  const dropdownList = dropdown.querySelector(".dropdown__list");
  const dropdownLink = dropdown.querySelectorAll(".dropdown__link");

  dropdownValue.addEventListener("click", () => {
    dropdownList.classList.toggle("dropdown__list_active");
  });

  dropdownLink.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      dropdownValue.textContent = link.textContent;
      dropdownList.classList.remove("dropdown__list_active");
    });
  });
});