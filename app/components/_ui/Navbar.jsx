"use client";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export const navItems = [
  {
    name: "HOME",
    link: "/",
  },
  {
    name: "ABOUT",
    link: "/about",
  },
  {
    name: "CATALOG",
    link: "/catalog",
  },
  {
    name: "SERVICES",
    link: "/services",
  },
  {
    name: "CONTACTS",
    link: "/contacts",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box>
      {/* navbar */}
      <div
        style={{
          position: isSticky ? "fixed" : "static",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          backgroundColor: "#fff",
          boxShadow: isSticky ? "0px 2px 4px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        {/* navbar */}
        <Toolbar
          sx={{
            paddingLeft: 0,
            paddingRight: 0,
            maxWidth: "container",
          }}
        >
          {/* logo */}
          <Box
            component="div"
            sx={{
              flexGrow: 1,
              display: { sm: "block" },
            }}
          >
            <Image
              width={207}
              height={41}
              src={"/assets/immovables-logo.png"}
              alt="Immovables Logo"
              href="/"
              priority
            />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link href={`${item.link}`} key={item.name}>
                <Button
                  sx={{
                    color: "#000",
                    textTransform: "none",
                    fontSize: 16,
                    "&:hover": {
                      color: "#ffa200",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </Box>
          {/* hamburger - on mobile */}
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              display: { sm: "none" },
            }}
          >
            {/* OPEN */}
            <HiOutlineMenuAlt3 size={30} />
          </IconButton>
        </Toolbar>
      </div>
      {/* mobile navbar - drawer */}
      <nav>
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 280,
            },
          }}
        >
          <MobileNav handleDrawerToggle={handleDrawerToggle} />
        </Drawer>
      </nav>
    </Box>
  );
}
