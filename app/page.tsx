import Navbar from "@/components/Navbar";
import ProductsPage from "@/containers/products-page";
import Link from "next/link";


export default function Home() {
  
  return (
    <>

    

    <h1>Hello to Misciolo</h1>
    <Link href='/products'>Produtos</Link>
    </>
  );
}
