import React from "react";

const About = () => {
  const info = [
    { text: "Years Experience", count: "04" },
    { text: "Completed Projects", count: "24" },
    { text: "Companies Work", count: "06" },
  ];

  return (
    <section id="#about" className="text-white py-10">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>{" "}
        </h3>
        <p className="text-gray-400 my-3 text-lg">My Introduction</p>
        <div className="my-3 text-gray-300">
          <p className="text-justify leading-7 w-11/12 font-semibold mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="flex mt-10 items-center gap-7 ">
            {info.map((content) => (
              <div key={content.count}>
                <h3 className="text-2xl md:text-4xl font-semibold text-white">
                  {content.count}
                </h3>
                <span className="text-cyan-600 text-xs md:text-base">
                  {content.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
