import { Link, useLocation } from "react-router-dom";

import Button from "../button/button.component";

import "./availability.styles.scss";

const HOURS = {
  Monday: "Contact us",
  Tuesday: "10am - 7pm",
  Wednesday: "9am - 4:30pm",
  Thursday: "10am - 7pm",
  Friday: "9am - 4pm",
  Saturday: "9am - 4pm",
  Sunday: "CLOSED",
};

const LOCATION = {
  Street: "26 Hawkes St.",
  City: "Marblehead",
  State: "MA",
  Zip: "01945",
};

const Availability = ({ setOpen }) => {
  const location = useLocation();

  if (location.pathname === "/contact")
    return (
      <div className="availability-container">
        <div className="container">
          <h3>LOCATION</h3>
          <p>{LOCATION.Street}</p>
          <p>
            {LOCATION.City} {LOCATION.State} {LOCATION.Zip}
          </p>
        </div>

        <div className="container">
          <h3>HOURS</h3>
          <p>Monday: {HOURS.Monday}</p>
          <p>Tuesday: {HOURS.Tuesday}</p>
          <p>Wednesday: {HOURS.Wednesday}</p>
          <p>Thursday: {HOURS.Thursday}</p>
          <p>Friday: {HOURS.Friday}</p>
          <p>Saturday: {HOURS.Saturday}</p>
          <p>Sunday: {HOURS.Sunday}</p>
        </div>
      </div>
    );

  if (location.pathname === "/")
    return (
      <div className="hours">
        <h5>LOCATION</h5>
        <p>26 Hawkes St.</p>
        <p>Marblehead MA 01945</p>
        <p>781.631.7603</p>
        <h5>HOURS</h5>
        <p>Monday: Contact us to check availability</p>
        <p>Tuesday: 10am - 7pm</p>
        <p>Wednesday: 9am - 4:30pm</p>
        <p>Thursday: 10am - 7pm</p>
        <p>Friday: 9am - 4pm</p>
        <p>Saturday: 9am - 4pm</p>
        <p>Sunday: CLOSED</p>
        <h4 className="covid-link-h5" onClick={() => setOpen(true)}>
          <u>READ HERE FOR COVID REGULATIONS + SAFETY</u>
        </h4>
        <p>
          <i>Need more info?</i>
        </p>
        <Link to="/contact">
          <Button type="button" buttonType="tan">
            GET IN TOUCH
          </Button>
        </Link>
      </div>
    );
};

export default Availability;
