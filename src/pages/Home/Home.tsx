import { useEffect, useState } from 'react';
import Banner from '../../components/home/Banner';
import Products from '../../components/home/Products';
import { IProduct } from '../../type';
import ProductService from '../../services/ProductService';
const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([] as IProduct[]);

  useEffect(() => {
    ProductService.getProducts().then((res) => setProducts(res));
  }, []);

  return (
    <div>
      <Banner />
      <Products products={products} />
    </div>
  );
};

export default Home;
