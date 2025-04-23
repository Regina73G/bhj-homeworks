const tabGroups = document.querySelectorAll(".tabs");
tabGroups.forEach(tabGroup => {
  const tabs = tabGroup.querySelectorAll(".tab");
  const tabContents = tabGroup.querySelectorAll(".tab__content");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      const activeTab = tabGroup.querySelector(".tab_active");
      const activeTabContent = tabGroup.querySelector(".tab__content_active");
      if(activeTab) {
        activeTab.classList.remove("tab_active");
      }

      if(activeTabContent) {
        activeTabContent.classList.remove("tab__content_active");
      }

      tab.classList.add("tab_active");
      tabContents[index].classList.add("tab__content_active");
    });
  });
});