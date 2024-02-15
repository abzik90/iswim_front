/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/iswim_logo.png";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GroupsIcon from '@mui/icons-material/Groups';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      link: "/",
      text: "О школе",
      icon: <HomeIcon />,
    },
    {
      link: "/",
      text: "События",
      icon: <CommentRoundedIcon />,
    },
    {
      link: "/",
      text: "Команда",
      icon: <GroupsIcon />,
    },
    {
      link: "/",
      text: "Локации",
      icon: <ShoppingCartRoundedIcon />,
    },
    {
      link: "/",
      text: "Стоимость занятий",
      icon: <AttachMoneyIcon />,
    },
    {
      link: "/",
      text: "Магазин",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="">О школе</a>
        <a href="">Команда</a>
        <a href="">Магазин</a>
        <a href="">Локации</a>
        <a href="tel:+7(701)5378886">+7(701)537 88 86</a>
        <a href="https://wa.me/77015378886"><WhatsAppIcon/></a>
        <a href="https://www.instagram.com/iswimastana/"><InstagramIcon/></a>
        <a href="/kz">Қазақша</a>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer 
        PaperProps={{
          sx: {
            backgroundColor: "#d9592c;",
            color: "white;",
          }
        }}
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        anchor="right">

        <Box
         className="menu-side"
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem className="menu-icons" key={item.text} disablePadding>
                <ListItemButton component="a" href={item.link}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
            <br/>
            <div className="socialIcons">
              <a href="https://wa.me/77015378886"><WhatsAppIcon/></a>
              <a href="https://www.instagram.com/iswimastana/"><InstagramIcon/></a>
              <a href="https://2gis.kz/astana/branches/70000001067766886?m=71.524591%2C51.118281%2F13.12"><LocationOnIcon/></a>
            </div>
            <div className="kzLang"><a href="/kz">Қазақша</a></div>
            </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
