
// wait for document loaded
window.addEventListener('load', function (event) {

    let BtnForm = document.querySelector("#submitForm")

    BtnForm.addEventListener("click", (e)=> {
        e.preventDefault()
        let formBlockEmail = document.querySelector(".form-element__email")
        let formBlockPassword = document.querySelector(".form-element__password")
        let formBlockInput = document.querySelectorAll(".form-element__input")


        let InputEmail = formBlockEmail.querySelector("#email").value.trim()
        let InputPassword = formBlockPassword.querySelector("#password").value.trim()

        const checkEmail = /^\S+@\S+$/;

        if(!checkEmail.test(InputEmail)) {
            BtnForm.setAttribute("disabled", "disabled");
            formBlockEmail.querySelector(".error").classList.add("active")
        }

        if(InputPassword.length < 6) {
            BtnForm.setAttribute("disabled", "disabled");
            formBlockPassword.querySelector(".error").classList.add("active")
        }

        formBlockInput.forEach((item) => {
            item.addEventListener("input", () => {
                BtnForm.removeAttribute("disabled");
            })
        })

    })
})
