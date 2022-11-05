const forms = document.querySelector(".forms"),
pwShowHide = document.querySelectorAll(".eye-icon"),
links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
eyeIcon.addEventListener("click", () => {
  let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
  
  pwFields.forEach(password => {
      if(password.type === "password"){
          password.type = "text";
          eyeIcon.classList.replace("bx-hide", "bx-show");
          return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
  })
  
})
})      

links.forEach(link => {
link.addEventListener("click", e => {
 e.preventDefault(); //preventing form submit
 forms.classList.toggle("show-signup");
})
})




// const form = document.getElementsByClassName("form");
// const username = document.getElementsByClassName("username");
// const email = document.getElementsByClassName("email");
// const password = document.getElementsByClassName("password");
// const password2 = document.getElementsByClassName("password2");

// function showError(input, message) {
//   const formControl = input.parentElement;
//   formControl.className = "form-control error";
//   let small = formControl.querySelector("small");
//   small.innerText = message;
// }

// function showSuccess(input) {
//   const formControl = input.parentElement;
//   formControl.className = "form-control success";
// }

// function checkEmail(input) {
//   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   if (re.test(input.value)) {
//     showSuccess(input);
//   } else {
//     showError(input, "Email is not valid");
//   }
// }

// function checkRequired(inputArr) {
//   inputArr.forEach(function(input) {
//     if (input.value === "") {
//       showError(input, `${getFieldName(input)} is required`);
//     } else {
//       showSuccess(input);
//     }
//   });
// }

// function checkPasswordsMatch(password1, password2) {
//   if (password1.value !== password2.value) {
//     showError(password2, "Password do not match");
//   }
// }

// function checkLength(input, min, max) {
//   if (input.value.length <= min) {
//     showError(
//       input,
//       `${getFieldName(input)} must be more than ${min} characters`
//     );
//   } else if (input.value.length >= max) {
//     showError(
//       input,
//       `${getFieldName(input)} must be less than ${max} characters`
//     );
//   } else {
//     showSuccess(input);
//   }
// }

// function getFieldName(input) {
//   return input.id.charAt(0).toUpperCase() + input.id.slice(1);
// }

// form.addEventListener("submit", function(e) {
//   e.preventDefault();

//   checkRequired([username, email, password, password2]);
//   checkLength(username, 3, 15);
//   checkLength(password, 6, 25);
//   checkEmail(email);
//   if (password2.value !== "") {
//     checkPasswordsMatch(password, password2);
//   }
// });
