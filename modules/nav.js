const navLinks = document.querySelectorAll("a");
const listSection = document.getElementById("booksList");
const newForm = document.getElementById("book-form");
const contactInfo = document.getElementById("contact");
export default function nav() {
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });
  if (this.id === "listLink") {
    listSection.className = "";
    newForm.className = "hide";
    contactInfo.className = "hide";
    this.classList.add("active");
  } else if (this.id === "newLink") {
    listSection.className = "hide";
    newForm.className = "";
    contactInfo.className = "hide";
    this.classList.add("active");
  } else {
    listSection.className = "hide";
    newForm.className = "hide";
    contactInfo.className = "";
    this.classList.add("active");
  }
}
