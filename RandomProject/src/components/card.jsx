import { Bookmark } from "lucide-react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="upper">
        <div className="img">
          <img src={props.brandLogo} alt="#" />
        </div>

        <button>
          Save
          <Bookmark size={16} stroke-width={2} />
        </button>
      </div>
      <div className="center">
        <span>
          <strong>{props.company}</strong> <span>{props.datePosted}</span>
        </span>

        <h2>{props.post}</h2>
        <h4>
          <span>{props.tag1}</span>
          <span>{props.tag2}</span>
        </h4>
      </div>

      <div className="lower">
        <hr className="divider" />
        <div className="lower2">
          <h6>
            <strong>{props.pay}</strong>
            <p>{props.location}</p>
          </h6>
          <button>Apply now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
