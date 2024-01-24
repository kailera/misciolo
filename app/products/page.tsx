import getAllProducts from "@/libs/getAllProducts";
import TProduct from "@/types";
import Link from "next/link";

interface ProductsProps {
  products: any;
}

export default async function ProductsPage() {
  const productData: Promise<TProduct[]> = getAllProducts();
  const productList = await productData;

  return (
    <>
      <div>
        {productList.map((product) => (
          <>
            <Link href={`/products/${product.id}`}>
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
          </>
        ))}
      </div>
    </>
  );
}
