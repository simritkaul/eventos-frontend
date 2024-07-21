import { useEffect, useState } from "react";
import axios from "../lib/axios";

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
}

export default function Home() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get("/api/event");
        setEvents(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div>
      <h1>Upcoming Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p>{new Date(event.date).toLocaleDateString()}</p>
            <p>{event.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
