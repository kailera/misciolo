export default async function getAllProducts() {
  const res = await fetch("http://localhost:3000/products");

  if (!res.ok) throw new Error("failed to fetch data!");

  return res.json();
}
