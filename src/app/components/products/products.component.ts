import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProductsComponent } from '../add-products/add-products.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openAddProduct(): void {
    const dialogRef = this.dialog.open(AddProductsComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
