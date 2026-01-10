import React from "react";
import Navbar from "./navbar.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

const Section = () => {
  const animeCharacters = [
    {
      fullName: "Son Goku",
      image:
        "https://i.pinimg.com/1200x/5a/aa/2b/5aaa2b85b3ee7498a6d35a863f120d45.jpg",
      description: "The Hope of the Universe",
    },
    {
      fullName: "Naruto Uzumaki",
      image:
        "https://i.pinimg.com/736x/94/36/1e/94361e0ddf929122c5438a36235d44b5.jpg",
      description: "Outcast ninja who became Hokage",
    },
    {
      fullName: "Monkey D. Luffy",
      image:
        "https://i.pinimg.com/736x/7e/1b/af/7e1bafe413c1508858800c19ff00b633.jpg",
      description: "Freedom loving future Pirate King",
    },
    {
      fullName: "Ichigo Kurosaki",
      image:
        "https://i.pinimg.com/1200x/cd/40/32/cd4032ed5b5d3310a0bf89eea6c430c7.jpg",
      description: "Human wielding Soul Reaper powers",
    },
    {
      fullName: "Eren Yeager",
      image:
        "https://i.pinimg.com/736x/2f/53/3c/2f533c5bdf61c6b28a2f842bf861e238.jpg",
      description: "Destroyer of worlds for freedom",
    },
    {
      fullName: "Satoru Gojo",
      image:
        "https://i.pinimg.com/736x/99/6d/82/996d828ad1c8880b67cb44b4a5628a2a.jpg",
      description: "Strongest sorcerer beyond limits",
    },
    {
      fullName: "Light Yagami",
      image:
        "https://i.pinimg.com/736x/6a/03/5c/6a035c2688fa23e8bbbaa39a5d640df8.jpg",
      description: "Genius chasing godlike justice",
    },
    {
      fullName: "Levi Ackerman",
      image:
        "https://i.pinimg.com/736x/ac/0f/f6/ac0ff6b48bbf529f13b8bc9eaa00ef69.jpg",
      description: "Humanity's strongest fighter",
    },
    {
      fullName: "Sung Jin-Woo",
      image:
        "https://i.pinimg.com/736x/fd/39/e9/fd39e9216d62a093230c0299c880fc44.jpg",
      description: "Solo leveling shadow monarch",
    },
    {
      fullName: "Tanjiro Kamado",
      image:
        "https://i.pinimg.com/736x/33/87/36/3387361682804ed89f4afdcc86644d83.jpg",
      description: "Kind swordsman slaying demons",
    },
    {
      fullName: "Yorichi Tsugikuni",
      image:
        "https://i.pinimg.com/736x/ee/45/69/ee456989430d2229aeaabde838d3723c.jpg",
      description: "Fuck Muzan Kibutsuji",
    },
    {
      fullName: "Kokoshibo Tsugikuni",
      image:
        "https://imgs.search.brave.com/wC_virtMfZOhWXfGSuEF6J3E1MDrC2p2zrK5NJOfH6Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvZGVt/b24tc2xheWVyLWtv/a3VzaGliby1ra2Zk/bTZxOHphcXA1cHY0/LmpwZw",
      description: "Upper Moon 1",
    },
  ];
  return (
    <div className="bg-red-600 font-mono h-158 w-auto  truncate rounded-4xl shadow-2xl">
      <Navbar />
      <div className="flex gap-5   overflow-x-auto scroll-smooth no-scrollbar px-15 py-5 h-96 w-full ">
        {animeCharacters.map((elem, idx) => (
          <Card
            key={idx}
            fullName={elem.fullName}
            image={elem.image}
            description={elem.description}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Section;
