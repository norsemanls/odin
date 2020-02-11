import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

import Panel from "../panel";
import Separator from "../utils/separator";
import "./panel-contact.scss";

const ContactPanel = ({ children, loud, brand }) => {
  return (
    <Panel loud>
      <span className="contact-info">
        <span>
          <PhoneIcon className="icon" fontSize="small" />{" "}
          <a href="tel:18477215308">(847) 721-5308</a>
        </span>
        <Separator />
        <span>
          <i class="fa fa-envelope"></i>
          <EmailIcon className="icon" fontSize="small" />{" "}
          <a href="mailto:steve@norsemanls.com">steve@norsemanls.com</a>
        </span>
      </span>
    </Panel>
  );
};

export default ContactPanel;
