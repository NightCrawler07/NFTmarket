import Home from "../pages";
import Displaylist from "./list";
import styles from "../styles/Home.module.css";
import Socialmedia from "./tinyicons";
import vector1 from "../public/images/vector1.svg";
import vector2 from "../public/images/vector2.svg";
import vector3 from "../public/images/vector3.svg";
import vector4 from "../public/images/vector4.svg";
import vector5 from "../public/images/vector5.svg";
import displayicons from "./tinyicons";
const Listmain = () => {
  var list1 = [
    { name: "ALL NFTs", link: "#" },
    { name: "solana NFTs", link: "#" },
    { name: "Art", link: "#" },
    { name: "Collectibles", link: "#" },
    { name: "Domain Names", link: "#" },
    { name: "Music", link: "#" },
    { name: "Photography", link: "#" },
    { name: "Sports", link: "#" },
    { name: "Trading Cards", link: "#" },
    { name: "Utility", link: "#" },
    { name: "Virtual Worlds", link: "#" },
  ];

  return (
    <div className={styles.footcontainer}>
      <footerup className={styles.footerup}>
        <getupdate className="updates">
          <h4>Get Updates</h4>
          <input className={styles.field} type="text"></input>
          <button>I'm in</button>
        </getupdate>
        <icons className={styles.tinyicons}>
          {displayicons(vector1, vector2, vector3, vector4, vector5)}
        </icons>
      </footerup>
      <footerdown>
          
        <listcontainer className={styles.Listcontainer}>
        <desc className={styles.logodis}>
          <h1>LOGO</h1>
          <p>
            Lörem ipsum sogijävis ässade. Pitas suprarade saning anticentrism,
            popp protopi men fade för laska. Del lyr fast sagire, plapodissade
            och segt. Polyvis voning inte fal foling som immersiv kvasidisorat
            om nösat, och geotonade teng bästsäljerism att gigagt preböktiga
            bebelt laning.
          </p>
        </desc>

          <list className={styles.Lists}>
            <h2>Marketplace</h2>
            {Displaylist(list1)}
          </list>
          <list className={styles.Lists}>
            <h2>My Account</h2>
            {Displaylist(list1)}
          </list>
          <list className={styles.Lists}>
            <h2>Resource</h2>
            {Displaylist(list1)}
          </list>
          <list className={styles.Lists}>
            <h2>Company</h2>
            {Displaylist(list1)}
          </list>
        </listcontainer>
      </footerdown>
    </div>
  );
};
export default Listmain;
