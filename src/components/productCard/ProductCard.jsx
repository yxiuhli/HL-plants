import { Typography, Card, CardMedia, CardContent } from "@mui/material";

const ProductCard = ({product}) => {
  return (
    <Card className="max-w-96 snap-center">
      <CardMedia
        component="img"
        height="450"
        image={product.img}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h5">{product.name}</Typography>
        <p>{product.price}$</p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
