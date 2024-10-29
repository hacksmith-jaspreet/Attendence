
  function clockInOut(action) {
    const employeeNameInput = document.getElementById('employeeName');
    const employeeName = employeeNameInput.value.trim();
    
    if (employeeName === '') {
      alert('Please enter employee name.');
      return;
    }
  
    const timestamp = new Date().toLocaleString();
  
    // Display "Processing" message
    document.getElementById('message').textContent = 'Processing...';
  
    // Construct the URL for Google Apps Script
    const url = `https://script.google.com/macros/s/AKfycbwsM7ru7ax0yXwBwt4RQkAipB9tLNWqOTQGPKxuACmrPocdJ4UcjZE0fWCZehJCczU5/exec?employeeName=${encodeURIComponent(employeeName)}&action=${action}&timestamp=${encodeURIComponent(timestamp)}`;
  
    // Send a GET request to the Google Apps Script URL
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to save data.');
        }
        return response.text();
      })
      .then(message => {
        // Display success message
        document.getElementById('message').textContent = `${employeeName} has clocked ${action === 'clockIn' ? 'In' : 'Out'} at ${timestamp}`;
  
        // Clear the input field after submitting data
        employeeNameInput.value = '';
  
        // Reset the page after 5 seconds
        setTimeout(() => {
          location.reload();
        }, 5000);
      })
      .catch(error => {
        // Display error message
        console.error('Error:', error);
        document.getElementById('message').textContent = 'An error occurred. Please try again.';
      });
  }



// function clockInOut(action) {
//   const timestamp = new Date().toLocaleString();

//   // Display "Processing" message
//   document.getElementById('message').textContent = 'Processing...';

//   // Construct the URL for Google Apps Script (without employeeName parameter)
//   const url = `https://script.google.com/macros/s/AKfycbwifmWcapbCAgdcTgFsj9nRa0z-RK3Bwnuf6edcGwoUamxV0wGDvEarwxDkUMs0w-tY/exec?action=${action}&timestamp=${encodeURIComponent(timestamp)}`;

//   // Send a GET request to the Google Apps Script URL
//   fetch(url)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Failed to save data.');
//       }
//       return response.text();
//     })
//     .then(message => {
//       // Display success message
//       document.getElementById('message').textContent = `Clocked ${action === 'Clock In' ? 'In' : 'Out'} at ${timestamp}`;

//       // Reset the page after 5 seconds
//       setTimeout(() => {
//         location.reload();
//       }, 5000);
//     })
//     .catch(error => {
//       // Display error message
//       console.error('Error:', error);
//       document.getElementById('message').textContent = 'An error occurred. Please try again.';
//     });
// }
