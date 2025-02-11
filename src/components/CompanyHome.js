import React, { useState, useEffect } from "react";
import "./CompanyHome.css";

// Company Data
const COMPANIES = [
  { id: 2, name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
  { id: 3, name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { id: 4, name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
  { id: 5, name: 'Facebook', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_(2019).png' },
  { id: 6, name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
  { id: 8, name: 'Oracle', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
  { id: 10, name: 'Tesla', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg' },
  { id: 12, name: 'Adobe', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Adobe_Corporate_Logo.png' },
];

// Events Data
const EVENTS = [
  { id: 1, name: 'Tech Innovation Hackathon', description: 'A 48-hour hackathon focusing on cutting-edge technological solutions', date: 'August 15-17, 2024', participants: 250 },
  { id: 2, name: 'AI and Machine Learning Bootcamp', description: 'Intensive training program on advanced AI and ML technologies', date: 'September 5-10, 2024', participants: 180 },
  { id: 3, name: 'Cybersecurity Challenge', description: 'Student-focused cybersecurity competition and learning event', date: 'October 20-22, 2024', participants: 200 },
  { id: 4, name: 'Cloud Computing Summit', description: 'Comprehensive conference on cloud technologies and strategies', date: 'November 12-14, 2024', participants: 220 },
  { id: 5, name: 'Data Science Symposium', description: 'Advanced conference on data science and analytics', date: 'December 8-10, 2024', participants: 190 },
];

const CompanyHome = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleNextEvent = () => {
    setCurrentEventIndex((prevIndex) =>
      prevIndex < EVENTS.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const handlePrevEvent = () => {
    setCurrentEventIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  const renderCompanyLogos = () => {
    if (isMobile) {
      // Mobile view: Single row
      return (
        <div className="scrolling-row">
          {COMPANIES.map((company) => (
            <div key={company.id} className="company-card">
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="company-logo"
              />
              <div className="company-name">{company.name}</div>
            </div>
          ))}
        </div>
      );
    } else {
      // Desktop view: Three rows
      return (
        <>
          <div className="scrolling-row row-1">
            {COMPANIES.map((company) => (
              <div key={company.id} className="company-card">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="company-logo"
                />
                <div className="company-name">{company.name}</div>
              </div>
            ))}
          </div>
          <div className="scrolling-row row-2">
            {COMPANIES.map((company) => (
              <div key={company.id} className="company-card">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="company-logo"
                />
                <div className="company-name">{company.name}</div>
              </div>
            ))}
          </div>
          <div className="scrolling-row row-3">
            {COMPANIES.map((company) => (
              <div key={company.id} className="company-card">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="company-logo"
                />
                <div className="company-name">{company.name}</div>
              </div>
            ))}
          </div>
        </>
      );
    }
  };

  return (
    <div className="main-container">
      <div className="events-container">
        <h2 className="header">Upcoming Events</h2>
        {isMobile ? (
          <div className="events-mobile-scroll">
            <button
              className="event-nav-btn prev"
              onClick={handlePrevEvent}
              disabled={currentEventIndex === 0}
            >
              &#10094;
            </button>
            <div className="event-card">
              <h3>{EVENTS[currentEventIndex].name}</h3>
              <p>{EVENTS[currentEventIndex].description}</p>
              <p>Date: {EVENTS[currentEventIndex].date}</p>
              <p>Participants: {EVENTS[currentEventIndex].participants}</p>
            </div>
            <button
              className="event-nav-btn next"
              onClick={handleNextEvent}
              disabled={currentEventIndex === EVENTS.length - 1}
            >
              &#10095;
            </button>
          </div>
        ) : (
          <div className="events-desktop-scroll">
            {EVENTS.map((event) => (
              <div key={event.id} className="event-card">
                <h3>{event.name}</h3>
                <p>{event.description}</p>
                <p>Date: {event.date}</p>
                <p>Participants: {event.participants}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="scrolling-container">
        <h2 className="header">Our Corporate Partners</h2>
        {renderCompanyLogos()}
      </div>
    </div>
  );
};

export default CompanyHome;