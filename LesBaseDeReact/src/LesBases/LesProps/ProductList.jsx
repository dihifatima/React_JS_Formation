const ProductList = ({products,maxPrice=100}) =>{
   const filtered = products.filter((p) => p.price <= maxPrice);
  return(
    <>
    <ul>
    {filtered.map((p)=>(
      <li key={p.id}>
        <span>{p.name}</span>
        <span>{p.price} DH</span>

      </li>
    ))} 
    </ul>
    </>
  );
};
export default ProductList;