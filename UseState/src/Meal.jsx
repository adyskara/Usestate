import DanDan from "./image/Dan-Dan-Noodles-10.jpg";
import Bibimbap from "./image/DWELL-bibimbap.jpg";
import ChickenRamen from "./image/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg";
import Tteokbokki from "./image/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg";
import Yangzhou from "./image/Yangzhou-Fried-Rice1.jpg";
import "./Meal.css";
const mealMap = {
  DanDan: DanDan,
  Bibimbap: Bibimbap,
  ChickenRamen: ChickenRamen,
  Tteokbokki: Tteokbokki,
  Yangzhou: Yangzhou,
};
function Course({ mealsName }) {
  return (
    <div className="mealDiv">
      <img className="meal" src={mealMap[mealsName]} alt="" />
    </div>
  );
}

export default Course;
