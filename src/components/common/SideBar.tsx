"use client";

import { Box, List, Drawer, Divider, Toolbar, ListItem, ListItemText, ListItemButton } from "@mui/material";
import { useRouter } from "next/navigation";

const sideBarMenus = [
  {
    showName: "アルゴリズム予約",
    path: "/reservation",
  },
];

type Props = {
  sideBarWidth: number;
};

export default function SideBar({ sideBarWidth }: Props) {
  const router = useRouter();

  return (
    <Box component="nav" sx={{ width: { sm: sideBarWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: sideBarWidth },
        }}
        open
      >
        <Toolbar />
        <Divider />
        <List>
          {sideBarMenus.map((menu, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={() => {
                  router.push(menu.path);
                }}
              >
                <ListItemText primary={menu.showName} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}
