import { Card, CardContent } from "@mui/material";

interface ProductCardProps {
  title: string;
  category: string;
  amount: string;
}

const ProductCard = ({ title, category, amount }: ProductCardProps) => {
  return (
    <Card className="p-4 shadow-md">
      <CardContent>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-500">{category}</p>
        <p className="text-lg font-bold">{amount}</p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
