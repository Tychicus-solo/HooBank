import React from "react";
import { clients } from "../constants";
import Fade from "react-reveal/Fade";
import styles from "../styles";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <Fade bottom>
      <div className={`${styles.flexCenter} flex-wrap w-full `}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px]min-w-[120px]`}
          >
            <img
              src={client.logo}
              alt=""
              className="sm:w-[192px] w-[100px] object-contain"
            />
          </div>
        ))}
      </div>
    </Fade>
  </section>
);

export default Clients;
