// The below is JUST the JS for the modal, and of course, as noted in the HTML, I would not actually be using the "Back this project" button to trigger the "Thanks..." modal; this function would belong to a different button.

// trigger "Thanks..." modal
document.getElementById('back-proj-btn').addEventListener('click', function() {
    document.querySelector('.thank-you-modal').style.display = 'block'
})


// close "Thanks..." modal
document.getElementById('got-it-btn').addEventListener('click', function() {
    document.querySelector('.thank-you-modal').style.display = 'none'
})
