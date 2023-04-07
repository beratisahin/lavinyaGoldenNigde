import "./Iletisim.css";
import React from "react";
import useDocumentTitle from "../../useDocumentTitle.js";
import Title from "../title/Title";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import Mail from "./ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import HomeIcon from "@material-ui/icons/Home";


function Iletisim() {
  useDocumentTitle("İletişim - Niğde Lavinya Golden Güzellik Merkezi ");
  return (
    <div className="col-12">
      <div
        className="card m-4"
        style={{
          align: "center",
          backgroundColor: "#f8f7fb",
          borderRadius: "5px",
        }}
      >
        <Title page_title="İletişim" />
      </div>

      <div class="col-lg-6s col-md-6 col-sm-12 col-12" style={{}}>
        <p className="contactInfo">İletişim Bilgilerimiz</p>

        <p style={{ fontSize: "medium", textAlign: "left" }}>
          {" "}
          <a href="mailto:lavinya.golden.Niğde@gmail.com">
            <ContactMailIcon style={{ fontSize: "x-large" }} />
          </a>
          &nbsp; lavinya.golden.nigde@gmail.com
        </p>
        <p style={{ fontSize: "medium", textAlign: "left" }}>
          {" "}
          <a
            href="tel: +905012560051"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon style={{ fontSize: "x-large", color: "#25d366" }} />
          </a>
          &nbsp; <b>0501 256 00 51</b>{" "}
          <FontAwesomeIcon icon="coffee" size="lg" />
        </p>
        <p style={{ fontSize: "14px", textAlign: "left" }}>
              <a
                href="+https://goo.gl/maps/5jSu6Q26C5mcw39S8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HomeIcon style={{ fontSize: "24px"}} />
              </a>
              &nbsp; Aşağı Kayabaşı, Kültür Plaza, Dr. Sami Yağız Cd. No:32 D:19, 51200 Niğde Merkez/Niğde
              
            </p>

            <p style={{ fontSize: "14px", textAlign: "left" }}>
              <a
                href="+https://goo.gl/maps/5jSu6Q26C5mcw39S8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LocationOnIcon style={{ fontSize: "24px" , color:"red" }} />
              </a>
              &nbsp; 
              <b>Merkez / Niğde</b>{" "}
            </p>
      </div>

      <div class="col-lg-6 col-md-6 col-sm-12 col-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12581.874185163115!2d34.672332!3d37.9661934!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1529e7ae5b4c9ef1%3A0x1c830a94250fa53e!2sLavinya%20Golden%20Ni%C4%9Fde!5e0!3m2!1str!2str!4v1680894160502!5m2!1str!2str"
          className="googleharita"
          style={{
            width: "100%",
            height: "45rem",
            frameBorder: "0",
            allowFullScreen: "",
            referrerpolicy: "no-referrer-when-downgrade",
            ariaHidden: "false",
            tabIndex: "0",
            border: "2px #E59026 solid",
            paddingBottom: "0.5rem",
            paddingTop: "0.5rem",
          }}
        >
          {" "}
        </iframe>
      </div>
      <Mail />
    </div>
  );
}

export default Iletisim;
