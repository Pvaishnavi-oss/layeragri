"use client";

import { Card, CardContent, Typography, CardMedia, Box } from "@mui/material";

interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  packing: string;
}

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Card sx={{ maxWidth: 600, mx: "auto", p: 2 }}>
      <CardMedia
        component="img"
        height="300"
        image={product.image}
        alt={product.title}
        sx={{ borderRadius: 2 }}
      />
      <CardContent>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          {product.title}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Packing: {product.packing}
        </Typography>
        <Typography variant="body1">{product.description}</Typography>
      </CardContent>
    </Card>
  );
}
