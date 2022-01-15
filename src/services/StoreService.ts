import { IProduct } from '../type';
import requests from './httpService';

class StoreService {
  getStores(): Promise<IProduct[]> {
    return requests.get('/store');
  }

  getStoreById(id: string): Promise<IProduct[]> {
    return requests.get(`/store/${id}`);
  }

  addStore(body: {}): Promise<IProduct[]> {
    return requests.post(`/store`, body);
  }

  updateStore(id: string, body: {}): Promise<IProduct[]> {
    return requests.post(`/store+ ${id}`, body);
  }

  deleteStoreById(id: string): Promise<IProduct[]> {
    return requests.delete(`/store/${id}`);
  }
}
export default new StoreService();
