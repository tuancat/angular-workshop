import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(public db: AngularFirestore) {
  }

  public getProducts() {
    return this.db.collection('product').snapshotChanges();
  }

  createProduct(data) {
    return new Promise<any>((resolve, reject) => {
      this.db
        .collection('product')
        .add(data)
        .then(res => {
        }, err => reject(err));
    });
  }
}
