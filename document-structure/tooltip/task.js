const hasTooltip = document.querySelectorAll(".has-tooltip");
let activeTooltip = null;

hasTooltip.forEach((selectedHasTooltip) => {
  const tooltip = document.createElement("div");
  tooltip.className = "tooltip";
  selectedHasTooltip.after(tooltip); //после has-tooltip

  selectedHasTooltip.addEventListener("click", (event) => {
    event.preventDefault();
    const tooltipText = selectedHasTooltip.title;

    //если уже есть активный tooltip и он не текущий, убраем класс
    if (activeTooltip && activeTooltip !== tooltip) {
      activeTooltip.classList.remove("tooltip_active");
    }

    tooltip.textContent = tooltipText;
    tooltip.classList.toggle("tooltip_active");

    //позиционирование подсказки
    const { bottom, left, width } = selectedHasTooltip.getBoundingClientRect();
    tooltip.style.top = `${bottom + 5}px`;
    tooltip.style.left = `${left + width / 2 - tooltip.offsetWidth / 2}px`;

    activeTooltip = tooltip.classList.contains("tooltip_active") ? tooltip : null; //обновляем активный, если его нет то null
  });
});
