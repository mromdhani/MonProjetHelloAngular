export class ProductModel {

  code: string;
  title: string;
  unitPrice: number;
  constructor(paramCode: string, paramTitle: string, paramPrice: number, private category: string) {
this.code = paramCode;
  }
}
