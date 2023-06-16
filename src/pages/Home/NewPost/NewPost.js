import React from "react";
import { NavLink } from "react-router-dom";
import img from "../../../assets/home/dmitriy-7DD6tfTKqS4-unsplash 1.png";

const NewPost = () => {
  return (
    <section className="newpost">
      <div className="container">
        <div className="newpost__row">
          <div className="newpost__left">
            <h2 className="newpost__left-title">
              Новые поступления в этом сезоне
            </h2>
            <h3 className="newpost__left-desc">
              Утонченные сочетания и бархатные оттенки - вот то, <br />
              что вы искали в этом сезоне. Время исследовать.
            </h3>
            <div className="newpost__left-store">
              <button className="newpost__left-btn">
                <NavLink to={"/store"} className="newpost__left-btn">
                  Открыть магазин
                </NavLink>
              </button>
            </div>
          </div>

          <div className="newpost__right">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewPost;
