import React from "react";
import styled from "styled-components";

import mediaQuerie from "../helpers/mediaQuerie";

import knife from "../assets/icons/knife.svg";
import home from "../assets/icons/home.svg";
import hospital from "../assets/icons/hospital.svg";
import fridge from "../assets/icons/fridge.svg";
import plug from "../assets/icons/plug.svg";
import hammer from "../assets/icons/hammer.svg";
import couch from "../assets/icons/couch.svg";
import kids from "../assets/icons/kids.svg";

const Navbar = () => {
  const categoriesArr = [
    {
      link: "#Cocina",
      icon: knife,
      name: "cocina",
    },
    {
      link: "#Decoración",
      icon: home,
      name: "decoracion",
    },
    {
      link: "#Equipos_médicos",
      icon: hospital,
      name: "Equipos médicos",
    },
    {
      link: "#Electrodomésticos",
      icon: fridge,
      name: "Electrodomésticos",
    },
    {
      link: "#Electrónicos",
      icon: plug,
      name: "Electrónicos",
    },
    {
      link: "#Ferretería",
      icon: hammer,
      name: "Ferretería",
    },
    {
      link: "#Muebles",
      icon: couch,
      name: "Muebles",
    },
    {
      link: "#Niños",
      icon: kids,
      name: "Niños",
    },
  ];
  const categoriesMap = categoriesArr.map((category, i) => {
    const { link, icon, name } = category;
    return (
      <IconCont key={i}>
        <a href={link}>
          <img src={icon} alt={name} />
        </a>
      </IconCont>
    );
  });
  return <NavbarLayout>{categoriesMap}</NavbarLayout>;
};

const iconContPC = mediaQuerie(`

 :hover {
    cursor: pointer;
    background-color: blue;
  }
 img {
    width: 35px;
  }
`);
const IconCont = styled.div`
  position: relative;

  display: flex;
  flex-grow: 1;

  a {
    width: 100%;
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 20px;
  }
  ${iconContPC}
`;

const NavbarLayout = styled.nav`
  display: flex;

  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  height: ${({ theme }) => theme.nav.size.mobile};

  background-color: ${({ theme }) => theme.palette.blue};

  @media (min-width: 800px) {
    height: ${({ theme }) => theme.nav.size.pc};
  }
`;

export default Navbar;
