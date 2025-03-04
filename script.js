document.addEventListener('DOMContentLoaded', () => {
  const messages = document.querySelectorAll('.message');
  // Reveal messages one by one with a delay
  messages.forEach((msg, index) => {
    setTimeout(() => {
      msg.classList.add('visible');
    }, 500 * index);
  });
});
