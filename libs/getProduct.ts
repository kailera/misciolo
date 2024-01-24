export default async function GetProduct(productId: string) {
  const res = await fetch(`http://localhost:3000/products/${productId}`);

  if (!res.ok) throw new Error(`Failed to get product ${productId}`);

  return res.json();
}
