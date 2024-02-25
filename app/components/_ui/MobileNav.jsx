import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { navItems } from "./Navbar";
import Link from "next/link";
import { Button } from "@mui/material";

export default function MobileNav({ handleDrawerToggle }) {
  return (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "right", paddingRight: 2 }}
    >
      <Box sx={{ my: 2 }} onClick={handleDrawerToggle}>
        CLOSE
      </Box>
      <Divider />
      <List sx={{ paddingTop: 8 }}>
        {navItems.map((item) => (
          <Link
            href={`${item.link}`}
            key={item.name}
            style={{ textDecoration: "none" }}
          >
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "left" }}>
                <Button
                  sx={{
                    color: "#000",
                    textTransform: "none",
                    fontSize: 20,
                    "&:hover": {
                      color: "hsl(5, 85%, 63%)",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {item.name}
                </Button>
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
}
