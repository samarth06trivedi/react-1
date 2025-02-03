import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";

interface ExpenseItemProps {
  name: string;
  date: string;
  amount: string;
  positive?: boolean;
  photo: string;  // Add a photo prop
}

const ExpenseItem = ({ name, date, amount, positive, photo }: ExpenseItemProps) => {
  return (
    <ListItem>
      {/* Profile Photo */}
      <ListItemAvatar>
        <Avatar src={photo} alt={name} sx={{ width: 40, height: 40 }} />
      </ListItemAvatar>

      {/* Expense Details */}
      <ListItemText primary={name} secondary={date} />

      {/* Amount with Color */}
      <p className={positive ? "text-green-500" : "text-red-500"}>{amount}</p>
    </ListItem>
  );
};

export default ExpenseItem;
