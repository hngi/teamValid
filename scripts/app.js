const formGroup = document.getElementById('the-forms');
const signinForm = document.getElementById('sign-in-form');
const signupForm = document.getElementById('sign-up-form');

document.getElementById('sign-up-form-link').addEventListener('click', e=>{
    e.preventDefault();
    document.getElementById('title').innerText = "teamValid | Sign up";
    signinForm.classList = `${signinForm.classList} animation-signin-out`;
    signupForm.classList = `${signupForm.classList} animation-signup-in`;

});


document.getElementById('sign-in-form-link').addEventListener('click', e=>{
    e.preventDefault();
    document.getElementById('title').innerText = "teamValid | Sign in";

    signupForm.classList = `sign-up-form`;
        setTimeout(()=>{
        signinForm.classList = `sign-in-form`;
        }, 700)


});
