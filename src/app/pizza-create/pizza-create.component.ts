import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from 'rxjs/operators';
import { AddToppingsToPizzaGQL, CreatePizza, CreatePizzaGQL, ListToppingsForPizzaCreateGQL, Topping, ToppingChangedGQL } from 'src/generated/graphql';

@Component({
  selector: 'app-pizza-create',
  templateUrl: './pizza-create.component.html',
  styleUrls: ['./pizza-create.component.scss']
})
export class PizzaCreateComponent implements OnInit {


  pizzaName = new FormControl('');
  pizzaToppings = new FormControl([]);
  pizzaCreateForm = new FormGroup({
    pizzaName: this.pizzaName,
    pizzaToppings: this.pizzaToppings,
  });

  toppings: Topping[];

  create(): void {
    if (!this.pizzaCreateForm.valid) {
      return;
    }
    const createPizzaDto: CreatePizza = {
      name: this.pizzaName.value,
    };
    this.createPizza
      .mutate({ createPizza: createPizzaDto })
      .subscribe((createPizzaRes) => {
        this.addToppingsToPizza
          .mutate({
            relation: {
              id: createPizzaRes.data.createOnePizza.id,
              relationIds: this.toppings?.map(topping => topping.id)
            }
          }).subscribe(addToppingRes => {
            this.snackBar.open(
              `created Pizza ${createPizzaRes.data.createOnePizza.name}`,
              'ok',
              {
                duration: 1000
              }
            );
          })
      });
    this.pizzaName.setValue(null);
    this.pizzaToppings.setValue([]);
  }

  ngOnInit(): void {
  }

  constructor(
    listToppings: ListToppingsForPizzaCreateGQL,
    protected addToppingsToPizza: AddToppingsToPizzaGQL,
    protected createPizza: CreatePizzaGQL,
    toppingChanged: ToppingChangedGQL,
    private snackBar: MatSnackBar
  ) {
    listToppings
      .watch()
      .valueChanges
      .pipe(map(result => result.data.toppings.edges?.map<Topping>(edge => ({ name: edge.node.name, id: edge.node.id }))))
      .subscribe(toppings => {
        this.toppings = toppings as Topping[]
      });
    toppingChanged
      .subscribe()
      .pipe(map(event => event.data.createdTopping as Topping))
      .subscribe(toppingChanged => {
        const foundTopping = this.toppings.find(topping => topping.id === toppingChanged.id)
        const foundToppingIndex = this.toppings.indexOf(foundTopping);
        this.toppings[foundToppingIndex] = toppingChanged;
      });
  }



}
