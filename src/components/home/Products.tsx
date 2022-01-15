import { Container, Row } from 'react-bootstrap';
import Product from '../common/Product';
import { IProduct } from '../../type';

// interface IProps{
//     products: IProduct[];
// }

const Products = ({ products }: { products: IProduct[] }) => {
  return (
    <div className="mt-3">
      <Container>
        <h2>Latest Products</h2>
        <Row>
          {products.map((product: IProduct) => (
            <Product key={product._id} product={product} />
          ))}

          {/* <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product /> */}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
