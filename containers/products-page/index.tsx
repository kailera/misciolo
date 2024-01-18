import Products from "@/app/products/page";
import Carousel from "@/components/Carousel";
import Navbar from "@/components/Navbar";
import { FC } from "react";

interface ProductsPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const ProductsPage: FC<ProductsPageProps> = ({searchParams}) => {
  return (
    <>
      <Navbar />

      <Carousel />

      <Products searchParams={searchParams} />
    </>
  );
};

export default ProductsPage;
