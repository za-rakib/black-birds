import React from 'react';
import { Card, Col } from 'react-bootstrap';
import headPhon from '../../assets/image/headphon.jpg';
import { IProduct } from '../../type';

const Product = ({ product }: { product: IProduct }) => {
  return (
    <Col lg={3} md={3} className="mt-3 product-card">
      <Card>
        <Card.Img variant="top" src={headPhon} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
