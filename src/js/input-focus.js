export function inputFocus({ target }) {
  const value = target.value.trim();

  if (value.length !== 0) {
    target.classList.add('active');
  } else {
    target.classList.remove('active');
  }
}
