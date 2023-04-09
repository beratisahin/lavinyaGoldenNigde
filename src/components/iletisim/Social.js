import "./Iletisim.css";
import React from "react";
import useDocumentTitle from "../../useDocumentTitle.js";
import Title from "../title/Title";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import HomeIcon from "@material-ui/icons/Home";
import i1 from "./1.webp";
import i2 from "./2.webp";
import i3 from "./3.webp";
import i4 from "./4.webp";
import i5 from "./5.webp";
import i6 from "./6.webp";

function Iletisim() {
  useDocumentTitle("İletişim - Niğde Lavinya Golden Güzellik Merkezi ");
  return (
    <div className="row">
      <div class="col-lg-2s col-md-2 col-sm-12 col-12 p-5">
        <a
          href="https://goo.gl/maps/5jSu6Q26C5mcw39S8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={i1} className="contactIcons" title="Adres"></img>
        </a>
        <p className="contactText">
          <b>Adres:</b>
          <br />
          Aşağı Kayabaşı, Kültür Plaza, Dr. Sami Yağız Cd. No:32 D:19, 51200
          Niğde Merkez/Niğde
        </p>
      </div>
      <div class="col-lg-2s col-md-2 col-sm-12 col-12 p-5">
        <a
          href="tel: +905012560051"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={i2} className="contactIcons" title="Rezervasyon"></img>
        </a>
        <p className="contactText">
          <b>Rezervasyon:</b> <br />
          0501 256 00 51
        </p>
      </div>
      <div class="col-lg-2s col-md-2 col-sm-12 col-12 p-5">
        <img src={i3} className="contactIcons" title="Çalışma Saatleri"></img>
        <p className="contactText">
          <b>Çalışma Saatleri:</b> <br />
          Her Gün: 09:00 – 19:00
        </p>
      </div>
      <div class="col-lg-2s col-md-2 col-sm-12 col-12 p-5">
      <a href="https://wa.me/+905012560051" target="_blank">
          <img src={i4} className="contactIcons" title="WhatsApp"></img>
        </a>
        <p className="contactText">
          <b>WhatsApp:</b> <br />
          0501 256 00 51
        </p>
      </div>
      <div class="col-lg-2s col-md-2 col-sm-12 col-12 p-5">
        <a href="https://www.instagram.com/lavinyagoldennigde/" target="_blank">
          <img src={i5} className="contactIcons" title="Instagram"></img>
        </a>
        <p className="contactText">
          <b>Instagram:</b> <br />
          @lavinyagoldennigde
        </p>
      </div>
      <div class="col-lg-2s col-md-2 col-sm-12 col-12 p-5">
        <a
          href="https://www.facebook.com/lavinyanigde?mibextid=ZbWKwL"
          target="_blank"
        >
          <img src={i6} className="contactIcons" title="Facebook "></img>
        </a>
        <p className="contactText">
          <b>Facebook:</b> <br />
          @lavinyagoldennigde
        </p>
      </div>
    </div>
  );
}

export default Iletisim;
