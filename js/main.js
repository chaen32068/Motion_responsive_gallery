window.addEventListener('load', () => {
  const grid = new Isotope("section", {
    itemSelector: "article",
    columnWidth: "article",
    transitionDuration: "0.5s",
  });

  // btn filter & active
  const btns = document.querySelectorAll('main ul li');

  btns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();

      const isOn = e.currentTarget.classList.contains("on");
      if (isOn) return; //active 된 버튼은 중복으로 호출하지 않는다
      activation(e);
    });
  });

  function activation(event) {
    // btn active
    for (let btn of btns) btn.classList.remove("on");
    event.currentTarget.classList.add("on");

    //btn filter
    const btn_a = event.currentTarget.querySelector("a");
    const a_href = btn_a.getAttribute("href");

    grid.arrange({ filter: a_href });
  }
});

