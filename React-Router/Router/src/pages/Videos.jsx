import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const Videos = () => {
    const [text, setText] = useState("");
    const navigate = useNavigate()

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = () => {
        e.preventDefault();
        setText("");
        navigate(`/videos/${text}`)
    }
  return (
    <>
      <div>Videos page</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Video ID:"
          value={text}
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default Videos;
