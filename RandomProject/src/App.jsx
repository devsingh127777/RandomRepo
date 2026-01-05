import Card from "./components/card.jsx";
import "./index.css";
const App = () => {
  const jobs = [
    {
      brandLogo: "https://cdn.simpleicons.org/google",
      company: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "San Francisco",
    },
    {
      brandLogo:
        "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazon.svg",
      company: "Amazon",
      datePosted: "2 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$42/hr",
      location: "Seattle",
    },
    {
      brandLogo: "https://cdn.simpleicons.org/meta",
      company: "Meta",
      datePosted: "1 week ago",
      post: "UI Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$48/hr",
      location: "Menlo Park",
    },
    {
      brandLogo: "https://cdn.simpleicons.org/apple",
      company: "Apple",
      datePosted: "3 days ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$46/hr",
      location: "Cupertino",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      company: "Microsoft",
      datePosted: "6 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$44/hr",
      location: "Redmond",
    },
    {
      brandLogo: "https://cdn.simpleicons.org/netflix",
      company: "Netflix",
      datePosted: "4 days ago",
      post: "UI Developer",
      tag1: "Contract",
      tag2: "Senior Level",
      pay: "$60/hr",
      location: "Los Gatos",
    },
    {
      brandLogo: "https://cdn.simpleicons.org/tesla",
      company: "Tesla",
      datePosted: "2 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$40/hr",
      location: "Austin",
    },
    {
      brandLogo: "https://cdn.simpleicons.org/nvidia",
      company: "NVIDIA",
      datePosted: "1 day ago",
      post: "Web Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$47/hr",
      location: "Santa Clara",
    },
    {
      brandLogo:
        "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/oracle.svg",
      company: "Oracle",
      datePosted: "1 week ago",
      post: "Frontend Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$35/hr",
      location: "Mumbai",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      company: "IBM",
      datePosted: "5 days ago",
      post: "Software Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$38/hr",
      location: "Bengaluru",
    },
  ];
  return (
    <div className="main">
      {jobs.map((elem, idx) => (
        <Card
          key={idx}
          brandLogo={elem.brandLogo}
          company={elem.company}
          datePosted={elem.datePosted}
          post={elem.post}
          tag1={elem.tag1}
          tag2={elem.tag2}
          pay={elem.pay}
          location={elem.location}
        />
      ))}
    </div>
  );
};

export default App;
