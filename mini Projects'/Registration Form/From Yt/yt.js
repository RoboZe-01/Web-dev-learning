// script.js - Registration Form Handling

// Wait for DOM to load before executing script
document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const registrationForm = document.querySelector('form');
    
    // Add submit event listener to the form
    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission
        
        // Get all form input values
        const fullName = document.querySelector('input[placeholder="Enter your name"]').value;
        const userName = document.querySelector('input[placeholder="Enter your username"]').value;
        const email = document.querySelector('input[placeholder="Enter your email"]').value;
        const mobile = document.querySelector('input[placeholder="Enter your number"]').value;
        const password = document.querySelector('input[placeholder="Enter your Password"]').value;
        const confirmPassword = document.querySelector('input[placeholder="Confirm your password"]').value;
        
        // Get selected gender
        let gender = '';
        if (document.getElementById('dot-1').checked) {
            gender = 'Male';
        } else if (document.getElementById('dot-2').checked) {
            gender = 'Female';
        } else if (document.getElementById('dot-3').checked) {
            gender = 'Prefer not to say';
        }
        
        // Validate password match
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        
        // Validate email format
        if (!validateEmail(email)) {
            alert('Please enter a valid email address!');
            return;
        }
        
        // Prepare the data to be sent
        const formData = {
            fullName,
            userName,
            email,
            mobile,
            password,
            gender
        };
        
        // In a real application, you would send this data to your server
        // For demo purposes, we'll log it and show a success message
        console.log('Registration Data:', formData);
        
        // Simulate sending email (in production, use a backend service)
        simulateEmailSend(formData);
        
        // Show success message
        alert('Registration successful! Details will be sent to mechanicalbhau01@gmail.com');
        
        // Reset the form
        registrationForm.reset();
    });
    
    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Function to simulate email sending (replace with actual API call in production)
    function simulateEmailSend(data) {
        // In a real application, you would:
        // 1. Use a backend service (Node.js, PHP, etc.)
        // 2. Or use a third-party service like EmailJS, Formspree, etc.
        // 3. Or connect to an SMTP server
        
        console.log('Sending email to mechanicalbhau01@gmail.com with data:', data);
        
        // Example of how you might structure an actual email sending request:
        /*
        fetch('https://your-backend-endpoint.com/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                to: 'mechanicalbhau01@gmail.com',
                subject: 'New Registration',
                text: `New user registered:\n\nName: ${data.fullName}\nUsername: ${data.userName}\nEmail: ${data.email}\nPhone: ${data.mobile}\nGender: ${data.gender}`
            })
        })
        .then(response => response.json())
        .then(data => console.log('Email sent:', data))
        .catch(error => console.error('Error sending email:', error));
        */
    }
});