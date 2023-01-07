import React from "react";
import { services } from "../data";
import Title from "./Title";

const Service = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subtitle="services" />
      <div className="section-center services-center">
        {services.map((service) => {
          const { icon, title, desc, id } = service;
          return (
            <article className="service" key={id}>
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">{desc}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
