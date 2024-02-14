const eventsContainer = document.getElementById('events-container');

// Function to generate event cards
function generateEventCard(event) {
  const eventCard = document.createElement('div');
  eventCard.classList.add('event-card');

  const eventImage = document.createElement('img');
  eventImage.src = event.image;
  eventImage.alt = event.title;

  const eventDate = document.createElement('h2');
  eventDate.textContent = event.date;

  const eventTitle = document.createElement('h2');
  eventTitle.textContent = event.title;

  const eventContent = document.createElement('p');
  eventContent.textContent = event.event; // Assuming the API returns 'event' field

  eventCard.appendChild(eventImage);
  eventCard.appendChild(eventDate);
  eventCard.appendChild(eventTitle);
  eventCard.appendChild(eventContent);

  return eventCard;
}

// Function to generate event cards from API data
async function generateEventCardsFromAPI() {
  try {
    const response = await fetch('/api/events/');
    const events = await response.json();

    events.forEach(event => {
      const eventCard = generateEventCard(event);
      eventsContainer.appendChild(eventCard);
    });
  } catch (error) {
    console.error('Error fetching event data:', error);
  }
}

// Generate event cards from API on page load
generateEventCardsFromAPI();
