const eventsContainer = document.getElementById('events-container');

// Sample data for events
const events = [
  {
    date: '2022-10-15',
    title: 'Tech Conference',
    content: 'Join us for an exciting tech conference showcasing the latest innovations in the industry.',
    image: 'images/event1.jpeg'
  },
  {
    date: '2022-11-05',
    title: 'Music Festival',
    content: 'Experience a weekend filled with live music performances from top artists around the world.',
    image: 'images/event.jpeg'
  },
  // Add more events here
];

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
  eventContent.textContent = event.content;

  eventCard.appendChild(eventImage);
  eventCard.appendChild(eventDate);
  eventCard.appendChild(eventTitle);
  eventCard.appendChild(eventContent);

  return eventCard;
}

// Function to generate event cards for all events
function generateEventCards() {
  events.forEach(event => {
    const eventCard = generateEventCard(event);
    eventsContainer.appendChild(eventCard);
  });
}

// Generate event cards on page load
generateEventCards();