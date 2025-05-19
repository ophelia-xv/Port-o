// Slight floating bounce effect
document.querySelectorAll('.block').forEach(block => {
  block.addEventListener('mouseover', () => {
    block.style.animation = 'none';
    block.offsetHeight; // trigger reflow
    block.style.animation = '';
  });
});
