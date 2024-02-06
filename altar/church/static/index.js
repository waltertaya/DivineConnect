// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Fetch the dynamic schedule data from an API or database
    const scheduleData = [
      { time: "9:00 AM", event: "Worship Service" },
      { time: "10:30 AM", event: "Sunday School" },
      { time: "12:00 PM", event: "Fellowship Lunch" }
    ];
  
    // Generate the schedule list items dynamically
    const scheduleList = document.getElementById("schedule-list");
    scheduleData.forEach(function(item) {
      const li = document.createElement("li");
      li.textContent = `${item.time} - ${item.event}`;
      scheduleList.appendChild(li);
    });
  });
  