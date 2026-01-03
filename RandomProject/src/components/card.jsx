import { Bookmark } from "lucide-react";

const card = () => {
  return (
    <div>
      <div className="main">
        <div className="upper">
          <img
            src="https://t3.ftcdn.net/jpg/16/79/77/94/360_F_1679779401_ASmi9WB9px4q4KycnLywhxi4ZJTIHQVF.jpg"
            alt="#"
          />
          <button>
            Save <Bookmark size={14} />
          </button>
        </div>
        <div className="center"></div>
        <div className="lower"></div>
      </div>
    </div>
  );
};

export default card;
