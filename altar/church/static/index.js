document.addEventListener("DOMContentLoaded", function() {
  // Fetch the dynamic schedule data from the Django view
  fetch('/api/sunday') // Assuming '/sunday' is the URL mapped to your Django view
      .then(response => response.json())
      .then(data => {
          // Generate the schedule list items dynamically
          const scheduleList = document.getElementById("schedule-list");
          data.forEach(function(item) {
              const li = document.createElement("li");
              li.textContent = `${item.time} - ${item.event}`;
              scheduleList.appendChild(li);
          });
      })
      .catch(error => {
          console.error('Error fetching data:', error);
      });
});
