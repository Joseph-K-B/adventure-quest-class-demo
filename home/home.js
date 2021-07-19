import { setUser } from '../data/storage-utils.js';
import { makeUser } from './make-user.js';

// import functions and grab DOM elements
const userForm = document.getElementById('user-form');

// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

userForm.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(userForm);
    // console.log(formData.get('race'));
    // const selectedRadio = document.querySelector('input[type=radio]:checked');
    // const selectedValue = selectedRadio.value;
    // console.log(selectedValue);

    // create a new user object from the formData
    const newUser = makeUser(formData);
    console.log(newUser);
    // write that user object to localstorage
    setUser(newUser);
    // redirect to list page
    window.location.replace('./map');
});