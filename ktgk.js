document.getElementById('verification-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    
    // Get form values
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address-line').value;
    const city = document.getElementById('city').value;
    const zip = document.getElementById('zip').value;

     // Regular expressions for validation
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Email must contain @ and have valid format
     const phoneRegex = /^\d+$/;  // Phone number must contain only digits
 

    // Check if all fields are filled
    if (!email || !phone || !address || !city || !zip) {
        alert('Please fill out all fields.');
        return;
    }

    // Validate email format
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Validate phone format
    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }

    // Validate email format (must include @)
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address with "@" symbol.');
        return;
    }

    // Validate phone format (must be all digits)
    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid phone number.');
        return;
    }

    // If all validation passes
    document.getElementById('success-message').style.display = 'block'; // Show success message
});
