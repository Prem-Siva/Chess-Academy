function BookingInfo({ availability, time, timezone, duration }) {
  return (
    <div className="booking-info-container">
      <h6 className="mb-2">Availability</h6>
      <ul>
        <li>{time}</li>
        <li>{timezone}</li>
        <li>Duration {duration}</li>
      </ul>
      <button className="mb-2" aria-label="Book Yoga Session Now">
        Book Now
      </button>
    </div>
  );
}

function Demo() {
  const availability = ["Monday - Friday"];
  const time = "9:00am - 5:00pm";
  const timezone = "Eastern Time";
  const duration = "1 hour";

  return (
    <div className="demo">
      
    </div>
  );
}

export default Demo;
