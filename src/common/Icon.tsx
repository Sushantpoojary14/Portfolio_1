import { faLinkedinIn, faGithub,faWhatsapp } from '@fortawesome/free-brands-svg-icons';
const icon = {
  width: "30px",
  height: "30px",
  color: "white",
  cursor:"pointer"
};
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Icon = () => {
  return (
    <div className="flex flex-row space-x-4 ">
      <a href="https://www.linkedin.com/in/sushant-poojari-72b66417a/"   target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faLinkedinIn} style={icon} /></a>
      <a href="https://github.com/Sushantpoojary14?tab=repositories"  target="_blank" rel="noreferrer noopener"> <FontAwesomeIcon icon={faGithub} style={icon} /></a>
      <a href="https://wa.me/918805778742"><FontAwesomeIcon icon={faWhatsapp} style={icon} /></a>
    </div>
  );
};

export default Icon;
