"use client";
import React, { useState, useEffect } from "react";
import "@/app/font/bootstrap-icons.css";
import { Button, Icon, List, ListItem } from "@mui/material";
import Typo from "../MuiComponents/Typo";

const Navbar = () => {
  const [open, setOpen] = useState({
    ticket: false,
    accommodation: false,
    more: false,
  });

  const handleToggle = (type, event) => {
    event.stopPropagation();
    setOpen((prev) => ({
      ...Object.keys(prev).reduce((acc, key) => ({ ...acc, [key]: false }), {}),
      [type]: !prev[type],
    }));
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest(".menu-button")) {
      setOpen({
        ticket: false,
        accommodation: false,
        more: false,
      });
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <List
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "start",
      }}
    >
      <ListItem className="menu-item" sx={{ position: "relative" }}>
        <Button
          className="menu-button"
          sx={{ backgroundColor: "transparent", color: "black" }}
          onClick={(e) => handleToggle("ticket", e)}
        >
          <Typo>بلیط</Typo>
          <Icon
            className="bi bi-chevron-down"
            sx={{
              fontSize: "14px",
              marginRight: "10px",
            }}
          ></Icon>
        </Button>
        <List
          sx={{
            position: "absolute",
            top: "100%",
            right: "20%",
            color: "gray",
            backgroundColor: "white",
            padding: "5px",
            boxShadow: "0px 0px 5px 1px rgba(0, 0, 0, 0.3)",
            borderRadius: "10px",
            maxHeight: open.ticket ? "300px" : 0,
            opacity: open.ticket ? 1 : 0,
            overflow: "hidden",
            width: "120%",
            transition: "0.3s",
          }}
        >
          <ListItem
            sx={{
              borderBottom: "1px solid #d0d0d0",
              textAlign: "right",
            }}
          >
            پرواز داخلی
          </ListItem>
          <ListItem
            sx={{ borderBottom: "1px solid #d0d0d0", textAlign: "right" }}
          >
            پرواز خارجی
          </ListItem>
          <ListItem
            sx={{ borderBottom: "1px solid #d0d0d0", textAlign: "right" }}
          >
            قطار
          </ListItem>
          <ListItem>اتوبوس</ListItem>
        </List>
      </ListItem>

      <ListItem className="menu-item" sx={{ position: "relative" }}>
        <Button
          className="menu-button"
          sx={{ backgroundColor: "transparent", color: "black" }}
          onClick={(e) => handleToggle("accommodation", e)}
        >
          <Typo>اقامت</Typo>
          <Icon
            className="bi bi-chevron-down"
            sx={{
              fontSize: "14px",
              marginRight: "10px",
              pointerEvents: "none",
            }}
          ></Icon>
        </Button>
        <List
          sx={{
            position: "absolute",
            top: "100%",
            right: "20%",
            color: "gray",
            backgroundColor: "white",
            padding: "5px",
            boxShadow: "0px 0px 5px 1px rgba(0, 0, 0, 0.3)",
            borderRadius: "10px",
            width: "120%",
            maxHeight: open.accommodation ? "200px" : 0,
            opacity: open.accommodation ? 1 : 0,
            overflow: "hidden",
            transition: "0.3s",
          }}
        >
          <ListItem
            sx={{ borderBottom: "1px solid #d0d0d0", textAlign: "right" }}
          >
            هتل
          </ListItem>
          <ListItem sx={{ textAlign: "right" }}>ویلا و اقامتگاه</ListItem>
        </List>
      </ListItem>

      <ListItem className="menu-item" sx={{ position: "relative" }}>
        <Button
          className="menu-button"
          sx={{
            backgroundColor: "transparent",
            color: "black",
          }}
        >
          <Typo>تور</Typo>
        </Button>
      </ListItem>

      <ListItem className="menu-item" sx={{ position: "relative" }}>
        <Button
          className="menu-button"
          sx={{
            backgroundColor: "transparent",
            color: "black",
          }}
        >
          <Typo>ویزا</Typo>
        </Button>
      </ListItem>

      <ListItem sx={{ position: "relative" }}>
        <Button
          className="menu-button"
          sx={{ backgroundColor: "transparent", color: "black" }}
          onClick={(e) => handleToggle("more", e)}
        >
          <Typo>بیشتر</Typo>
          <Icon
            className="bi bi-chevron-down"
            sx={{ fontSize: "14px", marginRight: "10px" }}
          ></Icon>
        </Button>
        <List
          sx={{
            position: "absolute",
            top: "100%",
            right: "20%",
            color: "gray",
            backgroundColor: "white",
            padding: "5px",
            boxShadow: "0px 0px 5px 1px rgba(0, 0, 0, 0.3)",
            borderRadius: "10px",
            maxHeight: open.more ? "200px" : 0,
            opacity: open.more ? 1 : 0,
            overflow: "hidden",
            transition: "0.3s",
            width: "120%",
          }}
        >
          <ListItem
            sx={{ borderBottom: "1px solid #d0d0d0", textAlign: "right" }}
          >
            علی بابا پلاس
          </ListItem>
          <ListItem
            sx={{ borderBottom: "1px solid #d0d0d0", textAlign: "right" }}
          >
            مجله علی بابا
          </ListItem>
          <ListItem sx={{ textAlign: "right" }}>بیمه مسافرتی</ListItem>
        </List>
      </ListItem>

      <style jsx global>{`
        .menu-item:not(:last-child) {
          position: relative;
        }

        .menu-item:not(:last-child)::after {
          content: "";
          position: absolute;
          left: -1%;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 50%;
          background-color: #d0d0d0;
        }
      `}</style>
    </List>
  );
};

export default Navbar;
