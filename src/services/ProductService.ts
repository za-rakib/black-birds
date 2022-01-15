import { IProduct } from '../type';
import requests from './httpService';

class ProductsService {
  getProducts(): Promise<IProduct[]> {
    return requests.get('/product');
  }

  getProductById(id: string): Promise<IProduct[]> {
    return requests.get(`/product/${id}`);
  }

  addProduct(body: object): Promise<IProduct[]> {
    return requests.post(`/product`, body);
  }

  updateProduct(id: string, body: {}): Promise<IProduct[]> {
    return requests.post(`/product+ ${id}`, body);
  }

  deleteProductById(id: string): Promise<IProduct[]> {
    return requests.delete(`/product/${id}`);
  }
}
export default new ProductsService();
