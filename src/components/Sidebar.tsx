import { Drawer, List, ListItemButton, ListItemIcon, Box } from "@mui/material";
import { Home, BarChart, Book, Storage, PowerSettingsNew } from "@mui/icons-material";
import { Link } from "react-router-dom"; // ✅ Import Link for navigation

const Sidebar = () => {
  const menuItems = [
    { icon: <Home sx={{ fontSize: 32, color: "white" }} />, label: "Home", path: "/" }, // ✅ Add path for Home
    { icon: <BarChart sx={{ fontSize: 32, color: "white" }} />, label: "Analytics" },
    { icon: <Book sx={{ fontSize: 32, color: "white" }} />, label: "Library" },
    { icon: <Storage sx={{ fontSize: 32, color: "white" }} />, label: "Database" },
  ];

  return (
    <Drawer
      variant="permanent"
      className="w-16 h-full bg-black text-white flex flex-col justify-between"
      sx={{
        "& .MuiDrawer-paper": { backgroundColor: "black", color: "white" },
      }}
    >
      {/* Xai Logo with spacing */}
      <Box className="py-6 text-center text-lg font-bold">Xai</Box>

      {/* Centered Icons with Increased Spacing */}
      <Box className="flex flex-col flex-1 justify-center">
        <List className="flex flex-col items-center gap-8">
          {menuItems.map((item, index) => (
            <Link key={index} to={item.path || "#"} style={{ textDecoration: "none" }}>
              {" "}
              {/* ✅ Wrap Home in Link */}
              <ListItemButton className="flex justify-center">
                <ListItemIcon sx={{ minWidth: "auto" }}>{item.icon}</ListItemIcon>
              </ListItemButton>
            </Link>
          ))}
        </List>
      </Box>

      {/* Power Button at Bottom */}
      <Box className="pb-6 flex justify-center">
        <ListItemButton className="flex justify-center">
          <ListItemIcon sx={{ minWidth: "auto" }}>
            <PowerSettingsNew sx={{ fontSize: 32, color: "white" }} />
          </ListItemIcon>
        </ListItemButton>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
