import "../css/header.css";
import chefIcon from "../images/chef-icon.svg";

export default function Header() {
  return (
    <div className="main-section-header">
      <img src={chefIcon} />
      <h4>Welcome to Chef AI</h4>
    </div>
  );
}
