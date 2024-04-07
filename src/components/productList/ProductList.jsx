import { Typography, Card, CardMedia, CardContent } from "@mui/material";

const ProductList = ({ products }) => {
  return (
    <div className="w-full flex flex-wrap gap-12">
      {products.map((product) => (
        <Card key={product._id} className="max-w-96">
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
      ))}
    </div>
  );
};

export default ProductList;
