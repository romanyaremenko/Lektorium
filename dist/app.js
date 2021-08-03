(() => {
  // src/app.js
  window.addEventListener("load", function(event) {
    let BtnForm = document.querySelector("#submitForm");
    BtnForm.addEventListener("click", (e) => {
      e.preventDefault();
      let formBlockEmail = document.querySelector(".form-element__email");
      let formBlockPassword = document.querySelector(".form-element__password");
      let InputEmail = formBlockEmail.querySelector("#email").value.trim();
      let InputPassword = formBlockPassword.querySelector("#password").value.trim();
      const checkEmail = /^\S+@\S+$/;
      if (!checkEmail.test(InputEmail)) {
        BtnForm.setAttribute("disabled", true);
        formBlockEmail.querySelector(".error").classList.add("active");
      }
      if (InputPassword.length < 6) {
        BtnForm.setAttribute("disabled", true);
        formBlockPassword.querySelector(".error").classList.add("active");
      }
    });
  });
})();
//# sourceMappingURL=app.js.map
