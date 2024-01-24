import GetProduct from "@/libs/getProduct"
import TProduct from "@/types"

// o que a página precisa para renderizar
interface ProductParams{
    params: {
        productId:string
    }
}

export default async function ProductPage({params:{productId}}:ProductParams){

    const productData: Promise<TProduct> = GetProduct(productId);
    
    const product = await productData
    

    return (
        <>
                <h1>{product.titulo}, id numero {product.id}</h1>
                <h3>{product.preco}</h3>
        </>
    )
}
