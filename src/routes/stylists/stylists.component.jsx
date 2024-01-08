import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Footer from "../../components/footer/footer.component";
import Button from "../../components/button/button.component";

import StylistModal from "./stylists.modal";

import { scrollToTop } from "../../utils/common.utils";

import scroll_up_arrow_img from "../../assets/scroll-up.png";

import { Tooltip as ReactTooltip } from "react-tooltip";

//Karen's pictures
import cropped_karen_img from "../../assets/cropped-karen.png";
import karen_team_logo_img from "../../assets/stylist-karen-title.png";
import karen_quote_img from "../../assets/stylist-karen.png";
//Jaxson's pictures
import cropped_jaxson_img from "../../assets/cropped-jaxson.png";
import jaxson_team_logo_img from "../../assets/stylist-jaxson-title.png";
import jaxson_quote_img from "../../assets/stylist-jaxson.png";
//Allie's pictures
import cropped_allie_img from "../../assets/cropped-allie.png";
import allie_team_logo_img from "../../assets/stylist-allie-title.png";
import allie_quote_img from "../../assets/stylist-allie.png";
//Caroline's pictures
import cropped_caroline_img from "../../assets/cropped-caroline.png";
import caroline_team_logo_img from "../../assets/stylist-caroline-title.png";
import caroline_quote_img from "../../assets/stylist-caroline.png";
//Danielle's pictures
import cropped_danielle_img from "../../assets/cropped-danielle.png";
import danielle_team_logo_img from "../../assets/stylist-danielle-title.png";
import danielle_quote_img from "../../assets/stylist-danielle.png";

import "./stylists.styles.scss";

const stylists = [
  {
    id: 1,
    name: "Karen",
    profileImg: cropped_karen_img,
    teamLogoImg: karen_team_logo_img,
    quoteImg: karen_quote_img,
    bio: "<p>Karen creates a look that is special for each client, balancing their personal style with her experienced and professional flare. She is dedicated to cutting hair, and enjoys foiling and coloring that enhances each haircut. She also specializes in color effects and grey coverage. By the time she is finished with you, you'll have hair that compliments you, so <b>you</b> get the complements.</p> <br /> <p>She is educated in Wella Color, Redken, and has worked with numerous color brands throughout her career while continuing to further her knowledge and skillset in the hair industry.</p>",
  },
  {
    id: 2,
    name: "Jaxson",
    profileImg: cropped_jaxson_img,
    teamLogoImg: jaxson_team_logo_img,
    quoteImg: jaxson_quote_img,
    bio: "<p>With over ten years of experience in the industry and passion for his work, Jaxson has developed a philosophy that you can have beautiful hair and color all while maintaining healthy hair. Natural and beautiful hair is always his priority. His laid back, humble and quiet approach is welcomed by clients who seek him out.</p> <br /> <p>He specializes in precision cutting, highlighting & color. Certified in Keratin Complex Treatment by Coppola, Simply Smooth Keratin, and Redken Color. He continues his professional development by attending advanced color classes held in Boston and New York.</p>",
  },
  {
    id: 3,
    name: "Allie",
    profileImg: cropped_allie_img,
    teamLogoImg: allie_team_logo_img,
    quoteImg: allie_quote_img,
    bio: "<p>Allie has been in the hair industry since 2005, but her passion for hairstyling began very early in her life. She enthusiastically approaches her work, stays up on the latest trends, and takes pride in making her clients feel beautiful . She specializes in color formulation, balayage, foiling, cutting and keratin treatments. Her goal is always to exceed client expectations and leave each client feeling their best.</p>",
  },
  {
    id: 4,
    name: "Caroline",
    profileImg: cropped_caroline_img,
    teamLogoImg: caroline_team_logo_img,
    quoteImg: caroline_quote_img,
    bio: "<p>Caroline believes in looking good and feeling good about your hair, and can b aachieved with the right color, haircut and a style specific for you. She loves to create styles with balayage, gray coverage, root melts, highlights, and fantasy colors. Caroline listens to what you want to achieve with your hair, from your likes to your dislikes before she gives her professional opinion for the best results possible.</p> <br /> <p>She is educated in Redken Color and PulpRiot. With certifications in Evolve Systems haircutting, Wella Color and Keratin Complex Smoothing . She also specializes in treatments such as Olaplex, Keratin Express Blowout, and Kevin Murphy (Scalp + Hair).</p>",
  },
  {
    id: 5,
    name: "Danielle",
    profileImg: cropped_danielle_img,
    teamLogoImg: danielle_team_logo_img,
    quoteImg: danielle_quote_img,
    bio: "<p>After completing her education in 2013, Danielle went on to complete an apprenticeship where she learned valuable precision hair cutting, coloring, and styling skills. Since joining KSHS, she has expanded her skill set and enjoys providing her clients with custom, low-maintenance color using balayage, highlighting and root melting techniques.</p> <br /> <p>Danielle continues to learn and grow as a passionate stylist who's goal is to help you look and feel your best. Her friendly and relaxed nature will make you comfortable and confident while she creates a look that is unique to you and your lifestyle.</p>",
  },
];

const StylistsPage = () => {
  const [open, setOpen] = useState(false);
  // const [loading, setLoading] = useState(false);
  const [selectedStylist, setSelectedStylist] = useState(null);

  const selectStylistHandler = (stylist) => {
    setSelectedStylist(stylist);
    setOpen(true);
  };

  return (
    <>
      <div className="stylist-page">
        <h3>MEET OUR STYLISTS</h3>

        <div className="stylist-page-subtitle">
          Each Stylist offers different specialties suited to best meet your
          needs and create your personal style.
        </div>

        <div className="stylist-list-container">
          {stylists.map((stylist) => (
            <div key={stylist.name} className="stylist-image-container">
              <img
                className="stylist-image"
                src={stylist.profileImg}
                alt={`${stylist.name}'s profile picture`}
                onClick={() => selectStylistHandler(stylist)}
              />
              <h4 onClick={() => selectStylistHandler(stylist)}>
                {stylist?.name?.toLocaleUpperCase()}
              </h4>

              {/* {selectedStylist && ( */}
              <StylistModal
                open={open}
                setOpen={setOpen}
                id={stylist.id}
                stylists={stylists}
                stylist={selectedStylist}
                setSelectedStylist={setSelectedStylist}
              />
              {/* )} */}
            </div>
          ))}
        </div>

        <Link to="/contact">
          <Button buttonType="tan">BOOK WITH A STYLIST</Button>
        </Link>
      </div>
      <img
        onClick={scrollToTop}
        className="scroll-up-arrow-image"
        src={scroll_up_arrow_img}
        alt="scroll up arrow"
        data-tooltip-id="scroll-tooltip"
      />
      <ReactTooltip
        id="scroll-tooltip"
        place="bottom"
        content="Scroll to top"
      />
      <Footer />
    </>
  );
};

export default StylistsPage;
