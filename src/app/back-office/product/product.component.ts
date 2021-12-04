
import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { FormControl, FormGroup,FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  my_products: Product[];
  productToAdd:Product={};
  addProductForm:FormGroup;
  productAfterUpdate:Product={};
  showAdd:boolean=true;
  showUpdate:boolean=true;

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.getAllProducts();
    this.addProductForm = new FormGroup({
      code: new FormControl(''),
      libelle: new FormControl(''),
      prixUnitaire: new FormControl(''),
      CategorieProduit: new FormControl(''),
      idstock: new FormControl(''),
      idrayon: new FormControl(''),


    });
  }
  updateProduct(product: Product) {
    this.showUpdate = true;
    this.showAdd = false ;
    this.productAfterUpdate = product ;
     this.addProductForm = new FormGroup({
      code: new FormControl(product.code),
      libelle: new FormControl(product.libelle),
      prixUnitaire: new FormControl(product.prixUnitaire),
      CategorieProduit: new FormControl(''),
      idstock: new FormControl(product.stock.idStock),
      idrayon: new FormControl(product.rayon.idRayon),

    });

  }
  update(){
    this.productAfterUpdate.code=this.addProductForm.get('code').value;
    this.productAfterUpdate.libelle=this.addProductForm.get('libelle').value;
    this.productAfterUpdate.prixUnitaire=this.addProductForm.get('prixUnitaire').value;


    this.productService.updateProduct(this.productAfterUpdate,this.addProductForm.get('idrayon').value,this.addProductForm.get('idstock').value,this.addProductForm.get('CategorieProduit').value)
    .subscribe(res=>{
      alert('product updated')
      this.getAllProducts();
    })
  }



  getAllProducts() {
    this.productService.getAllProduct().subscribe((res) => {
      this.my_products = res;
      console.log(this.my_products)
    });
  }
  showAddModal(){
    this.showAdd = true ;
    this.showUpdate = false;
    this.addProductForm = new FormGroup({
      code: new FormControl(''),
      libelle: new FormControl(''),
      prixUnitaire: new FormControl(''),
      CategorieProduit: new FormControl(''),
      idstock: new FormControl(''),
      idrayon: new FormControl(''),


    });
  }

  addProduct() {
    this.showAdd = true ;
    this.showUpdate=false ;


    this.productToAdd.code=this.addProductForm.get('code').value;
    this.productToAdd.libelle=this.addProductForm.get('libelle').value;
    this.productToAdd.prixUnitaire=this.addProductForm.get('prixUnitaire').value;

    console.log(this.productToAdd);
    this.productService.addProduct(this.productToAdd,this.addProductForm.get('idrayon').value,this.addProductForm.get('idstock').value,this.addProductForm.get('CategorieProduit').value).subscribe(
        (res)=>{
          console.log(res)
        this.getAllProducts();
      }
      )
      this.addProductForm.reset();


  }
  delete(data:Product) {
    this.productService.deleteProduct(data.idProduit).subscribe((res) => {
      alert('product deleted')
      this.getAllProducts();
    });
  }

}
