import { Avatar, IconButton } from "@mui/material";
import { Notifications, ChatBubbleOutline } from "@mui/icons-material";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-xl font-semibold">Transactions</h1>

      {/* Notification & Messages Buttons */}
      <div className="flex items-center gap-4">
        <IconButton>
          <ChatBubbleOutline />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>

        {/* Profile Section with Image */}
        <div className="flex items-center">
          <Avatar 
            src="/src/assets/profile-pictures/Tatiana Herwitz.jpg"  // Make sure you have this image
            alt="Tatiana Herwitz"
            sx={{ width: 40, height: 40 }} // Set size
          />
          <span className="ml-2 text-sm">Tatiana Herwitz</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
