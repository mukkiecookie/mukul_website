import footerContact from "../../api/footerApi.json";
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

export const Footers = () => {
  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
    FaInstagram: <FaInstagram />,
  };

  return (
    <footer>
      <div className="contact-section">
        {footerContact.map((curData, index) => {
          const { icon, title, details, link } = curData;

          return (
            <div className="footer-contact" key={index}>
              
              <div className="footer-contact-text footer-contact">
                {title === "Mail me" ? (
                  <a href={`mailto:${details}`} className="contact-text-detail">
                    <div className="footer-icon">{footerIcon[icon]}</div>
                    <p className="contact-text-head">{title}</p>
                    {details}
                  </a>
                ) : link ? (
                  <a href={link} target="_blank" rel="noopener noreferrer" className="contact-text-detail">

                    <div className="footer-icon">{footerIcon[icon]}</div>
                    <p className="contact-text-head">{title}</p>
                    {details}
                  </a>
                ) : (
                  <>
                  <div className="footer-icon">{footerIcon[icon]}</div>
                  <p className="contact-text-head">{title}</p>
                  <p className="contact-text-detail">{details}</p>
                  </>
                )}
              </div>
            </div>

          );
        })}
      </div>

      <div className="divider"></div>

      <div className="copyright-section">
        <p className="copyright-left">
          © 2025 Mukul | Pixie Studios. 
        </p>
        <p className="copyright-right">
          All Photographs Reserved. Unauthorized use is prohibited. | <a className="opensource" href="https://github.com/mukkiecookie" target="_blank">OpenSource <FaExternalLinkAlt alt="link icon"/></a> Website.
        </p>
      </div>
    </footer>
  );
};
