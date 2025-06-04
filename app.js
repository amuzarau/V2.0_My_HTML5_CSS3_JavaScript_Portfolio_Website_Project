const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controlls");
const sectBtn = document.querySelectorAll(".control");
const allSelections = document.querySelector(".main-content");

function PageTransitions() {
  //Button click active class
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      this.className += " active-btn";
    });
  }
  //Sections active class
  allSelections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      // remove selected from the other btns
      sectBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");
      //Hide other sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });

      const element = document.getElementById(id);
      element.classList.add("active");
    }
  })
  
  //Toggle theme
  const themeBtn = document.querySelector('.theme-btn');
  themeBtn.addEventListener('click',() =>{
    let element = document.body;
    element.classList.toggle('light-mode')
  })
}

PageTransitions();

emailjs.send("service_3lp32qa", "template_t6m9c0i", {
    name: "Test User",
    email: "test@example.com",
    subject: "Test Subject",
    message: "This is a test message."
})
.then(response => console.log("Success:", response))
.catch(error => console.error("Error:", error));

