import React from "react";
import { Link } from "react-router-dom"; // Ensure you have react-router-dom for navigation
import "./research.css";
import Menu from "../../components/Menu/Menu"; // Import the Menu component

const Research = () => {
  const researchData = [
    {
      title: "Advancing The Science of Climate Change",
      description:
        "This paper contains how the science is affecting climate change...",
      image: "/images/climate_change.jpg",
      link: "https://books.google.com.bd/books?hl=en&lr=&id=QjlkAgAAQBAJ&oi=fnd&pg=PR1&dq=climate+change&ots=Nl9xngFLdV&sig=t5gc5Ckl2DY4saR3aATnYBUrjrM&redir_esc=y#v=onepage&q=climate%20change&f=false",
    },
    {
      title: "Are we adapting to climate change",
      description:
        "This paper contains if we are adapting climate change or how it will going to effect on you...",
      image: "/images/desert.jpg",
      link: "https://www.researchgate.net/publication/373292523_CLIMATE_CHANGE_AND_GLOBAL_WARMING_STUDYING_IMPACTS_CAUSES_MITIGATION_AND_ADAPTATION#:~:text=This%20research%20paper%20delves%20into%20the",
    },
    {
      title: "Essay on Prevention of Global Warming for Students and Children",
      description:
        "Global warming is a term you must have heard by now as it is very prevalent in today’s world.",
      image: "/images/demonstration.jpg",
      link: "https://www.toppr.com/guides/essays/essay-on-prevention-of-global-warming/#:~:text=Every%20person%20needs%20to%20contribute%20equally",
    },
    {
      title:
        "Climate change is already altering everything, from fertility choices to insuring our homes",
      description:
        "You may think the biggest impacts lie far away – in terms of time or geography. But global warming is already changing the way many of us live or think.",
      image: "/images/destroy_earth.jpg",
      link: "https://www.weforum.org/agenda/2022/06/climate-change-weather-extreme-health/#:~:text=Climate%20change%20is%20already%20affecting#:~:text=Climate%20change%20is%20already%20affecting",
    },
    {
      title:
        "Flood Research in Bangladesh and Future Direction: An Insight From Last Three Decades",
      description:
        "In Bangladesh flood occurs in every year. There are couple of reasons for this...",
      image: "/images/flood.jpg",
      link: "https://books.google.com.bd/books?hl=en&lr=&id=QjlkAgAAQBAJ&oi=fnd&pg=PR1&dq=climate+change&ots=Nl9xngFLdV&sig=t5gc5Ckl2DY4saR3aATnYBUrjrM&redir_esc=y#v=onepage&q=climate%20change&f=false",
    },
    {
      title: "Potential effects of global warming",
      description:
        "Global warming has become the biggest issue in todays world.There are some many potential elements causing global warming",
      image: "/images/gas.jpg",
      link: "https://www.britannica.com/science/global-warming/Potential-effects-of-global-warming",
    },
  ];
 

  return (
    <div className="research-container bg-gray-900 min-h-screen py-10 text-gray-200 relative">
      <div className=" absolute top-5 left-5">
        <Menu />
      </div>
      <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text mb-12 animate-float">
        Research on Climate Change and Its Effect
      </h1> 
{/* comment */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {researchData.map((research, index) => (
          <div
            className="card bg-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl animate-fade-in-delay max-w-sm mx-auto"
            key={index}
          >
            <img
              src={research.image}
              alt={research.title}
              className="card-image w-full h-48 object-cover rounded-md mb-4"
            />
            <div className="card-content">
              <h2 className="text-xl font-semibold text-gray-100 mb-2">
                {research.title}
              </h2>
              <p className="text-gray-300 mb-4">{research.description}</p>
              <a
                href={research.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link text-green-400 hover:text-green-600"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research;
