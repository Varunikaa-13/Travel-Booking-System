// Add simple interactivity
document.getElementById('booking-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Booking submitted! We’ll get back to you soon.');
  });
  
  document.getElementById('contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for contacting us!');
  });
  