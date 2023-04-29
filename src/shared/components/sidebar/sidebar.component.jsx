import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import GroupIcon from "@mui/icons-material/Group";
import ShopIcon from "@mui/icons-material/Shop";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Sidebar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const items = [
    {
      label: "Homepage",
      icon: HomeIcon,
    },
    {
      label: "Pages",
      icon: ArticleIcon,
    },
    {
      label: "Groups",
      icon: GroupIcon,
    },
    {
      label: "Marketplace",
      icon: ShopIcon,
    },
    {
      label: "Friends",
      icon: PersonIcon,
    },
    {
      label: "Settings",
      icon: SettingsIcon,
    },
    {
      label: "Profile",
      icon: AccountBoxIcon,
    },
  ];

  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={"fixed"}>
        <List>
          {items.map(({ label, icon: ICON }) => (
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ICON />
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem>
            <ListItemIcon>
              {isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
            </ListItemIcon>
            <Switch
              edge="end"
              onChange={() => setIsDarkMode(!isDarkMode)}
              checked={isDarkMode}
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;