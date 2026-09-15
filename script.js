const filters = Array.from(document.querySelectorAll("[data-filter]"));
const projects = Array.from(document.querySelectorAll("[data-category]"));
const resultCount = document.querySelector("#result-count");

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;
    let visible = 0;

    filters.forEach((filter) => {
      const active = filter === button;
      filter.classList.toggle("is-active", active);
      filter.setAttribute("aria-pressed", String(active));
    });

    projects.forEach((project) => {
      const categories = project.dataset.category.split(" ");
      const show = selected === "all" || categories.includes(selected);
      project.hidden = !show;
      if (show) visible += 1;
    });

    resultCount.textContent = String(visible);
  });
});

