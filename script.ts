// Select all toggle buttons
const toggleButtons = document.querySelectorAll('.toggle-button');

// Loop through each button and add a click event listener
toggleButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    // Get the ID of the target section from the button's data-target attribute
    const targetId = (event.target as HTMLElement).getAttribute('data-target');
    const targetSection = document.getElementById(targetId!)?.querySelector('.content') as HTMLElement;

    // Check if the target section exists
    if (targetSection) {
      // Toggle visibility of the selected section: close if open, open if closed
      targetSection.classList.toggle('hidden');
    }
  });
});
