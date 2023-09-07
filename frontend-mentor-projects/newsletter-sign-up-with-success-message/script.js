/* DOM Elements */
const signupSection = document.getElementById('signup');
const subscribeSuccessSection = document.getElementById('subscribeSuccess');
const subscribedEmailId = document.getElementById('subscribedEmailId');
const dismissMsgBtn = document.getElementById('dismissMsgBtn');

const emailInput = document.getElementById('emailInput');
const emailErrorEl = document.querySelector('.email-address-label').lastElementChild;
const subscribeBtn = document.getElementById('subscribeBtn');

/* Functions */
const isEmailValid = () => {
  const email = emailInput.value.trim();
  
  if (email === '') {
    return false;
  }

  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return re.test(email);
}

const displayInvalidEmailError = () => {
  emailErrorEl.classList.add('error-text');
  emailErrorEl.classList.remove('hide');
  emailInput.classList.add('validation-error');
}

const resetEmailErrors = () => {
  emailErrorEl.classList.remove('error-text');
  emailErrorEl.classList.add('hide');
  emailInput.classList.remove('validation-error');
}

const displaySubscribeSuccessSection = () => {
  signupSection.classList.add('hide');
  subscribeSuccessSection.classList.remove('hide');
  document.body.classList.add('grey-bg');
  subscribedEmailId.textContent = emailInput.value.trim();
}

const hideSubscribeSuccessSection = () => {
  signupSection.classList.remove('hide');
  subscribeSuccessSection.classList.add('hide');
  document.body.classList.remove('grey-bg');
  subscribedEmailId.textContent = '';
  emailInput.value = '';
}

const validateSubscribeBtnClick = () => {
  const isValidEmail = isEmailValid();
  if (!isValidEmail) {
    displayInvalidEmailError();
    return;
  }

  resetEmailErrors();
  displaySubscribeSuccessSection();
}

/* Event listeners */
subscribeBtn.addEventListener('click', validateSubscribeBtnClick);
dismissMsgBtn.addEventListener('click', hideSubscribeSuccessSection);
