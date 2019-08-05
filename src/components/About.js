import React from "react";

const About = () => {
  return (
    <div>
      <div className="back-img">
        <h1 style={{ marginBottom: "1rem" }}>About Us</h1>
        <p style={{ fontSize: "16px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          veritatis! Voluptates, accusantium nisi vel nostrum quae cumque
          corrupti sunt enim veniam tempora. Adipisci aspernatur similique minus
          recusandae atque amet esse expedita. Ipsum minima suscipit autem quas
          expedita molestias alias accusamus! Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Architecto nobis autem pariatur,
          praesentium quod fugit. Doloremque eius ipsum nihil reprehenderit.
        </p>
        <button style={btnStyle}>Contact Us</button>
      </div>
    </div>
  );
};

const btnStyle = {
  height: "40px",
  width: "120px",
  border: "1px solid #fff",
  background: "rgb(68, 136, 175)",
  borderRadius: "8px",
  color: "#fff",
  marginTop: "1rem"
};

export default About;
