import { useState, FormEvent } from "react";
import axios from "../lib/axios";

const CreateEvent = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/event/create", {
        title,
        description,
        date,
        location,
      });
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location"
      />
      <button type="submit">Create Event</button>
    </form>
  );
};

export default CreateEvent;
