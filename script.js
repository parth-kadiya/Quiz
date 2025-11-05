document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(".form-row input, .form-row select")
    .forEach((field) => {
      field.addEventListener("focus", () => {
        field.style.borderBottom = "2px solid rgba(33,150,243,0.9)";
      });
      field.addEventListener("blur", () => {
        field.style.borderBottom = "2px solid rgba(0,0,0,0.25)";
      });
    });
});
