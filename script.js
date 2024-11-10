// Select all toggle buttons
var toggleButtons = document.querySelectorAll('.toggle-button');
// Loop through each button and add a click event listener
toggleButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        var _a;
        // Get the ID of the target section from the button's data-target attribute
        var targetId = event.target.getAttribute('data-target');
        var targetSection = (_a = document.getElementById(targetId)) === null || _a === void 0 ? void 0 : _a.querySelector('.content');
        // Check if the target section exists
        if (targetSection) {
            // Toggle visibility of the selected section: close if open, open if closed
            targetSection.classList.toggle('hidden');
        }
    });
});
