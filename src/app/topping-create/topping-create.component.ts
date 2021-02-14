import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateTopping, CreateToppingGQL, Exact } from 'src/generated/graphql';

@Component({
  selector: 'app-topping-create',
  templateUrl: './topping-create.component.html',
  styleUrls: ['./topping-create.component.scss']
})
export class ToppingCreateComponent implements OnInit {

  toppingName = new FormControl('');
  toppingCreateForm = new FormGroup({
    toppingName: this.toppingName,
  });


  create(): void {
    if (!this.toppingCreateForm.valid) {
      return;
    }
    const createToppingDto: CreateTopping
      = {
      name: this.toppingName.value,
    };
    this.createToping
      .mutate({ createTopping: createToppingDto })
      .subscribe((res) => {
        this.snackBar.open(
          `created Topping ${res.data.createOneTopping.name}`,
          'ok',
          {
            duration: 1000
          }
        );
      });
    this.toppingName.setValue(null);
  }

  ngOnInit(): void {
  }

  constructor(
    protected createToping: CreateToppingGQL,
    private snackBar: MatSnackBar
  ) {
  }

}
