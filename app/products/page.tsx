

import ProductModal from "@/components/ProductModal";
import getAllProducts from "@/libs/getAllProducts";
import TProduct from "@/types";
import Link from "next/link";
import { useState } from "react";

interface ProductsProps {
  products: any;
  searchParams: Record<string, string> | null | undefined;
}

export default async function ProductsPage({
  products,
  searchParams,
}: ProductsProps) {
  const productData: Promise<TProduct[]> = getAllProducts();
  const productList = await productData;

  
  const show = searchParams?.show;
  return (
    <>
      <div>
        {productList.map((product) => (
          <>
            <Link href="/?show=true">
              <br />
              <h1>{product.titulo}</h1>
              <p>{product.descricao}</p>
              <p>bordas disponiveis:</p>
              {product.bordas.map((border) => (
                <>
                  <p>{border}</p>
                </>
              ))}
              <br />
            </Link>
            {show && (
              <ProductModal
                product={product}                
              />
            )}
          </>
        ))}
      </div>
    </>
  );
}
