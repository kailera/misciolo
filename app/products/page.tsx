import ProductCard from "@/components/ProductCard"
import { getAll } from "@/libs/endpoints"
import axios from "axios"
import { FC } from "react";

interface ProductsProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

/*const getItems = async(
  page:number,
  perItem:number,
  sort:string|boolean 
)=>{
  const data = await axios.get(getAll,{
    page:page,
    perItem:perItem,
    sort:sort
  });
  return data;
}
*/
const Products: FC<ProductsProps> = async ({searchParams}) =>{

  const page = typeof searchParams.page === "string" ? Number(searchParams.page):1;
  const sort = typeof searchParams.sort === "string" ? searchParams.sort : false;
  const itemsPerView = 5
  //const items = await getItems(page, itemsPerView, sort)

  return (<>
    <div>
      {/*<h1>Produtos encontrados: {items.size}</h1>*/}
    </div>
  </>)
}

export default Products
