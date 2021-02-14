import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { DeletePizzaGQL, ListPizzaGQL, ListPizzaWithToppingGQL, Pizza, PizzaCreatedGQL, PizzaDeletedGQL, Topping } from 'src/generated/graphql';


@Component({
  selector: 'app-pizza-list-with-topping',
  templateUrl: './pizza-list-with-topping.component.html',
  styleUrls: ['./pizza-list-with-topping.component.scss']
})
export class PizzaListWithToppingComponent implements OnInit {


  displayedColumns: string[] = [
    'id',
    'name',
    'toppings'
  ];

  pizzas: Pizza[];
  $pizzas = new Subject<Pizza[]>();

  constructor(
    listPizza: ListPizzaWithToppingGQL,
    pizzaCreated: PizzaCreatedGQL,
    pizzaDeleted: PizzaDeletedGQL,
    protected deletePizza: DeletePizzaGQL,
    private snackBar: MatSnackBar
  ) {

    listPizza
      .watch()
      .valueChanges
      .pipe(
        map(result => result.data.pizzas.edges
          ?.map<Pizza>(
            edge => ({
              id: edge.node.id,
              name: edge.node.name,
              toppings: edge.node.toppings as Topping[]
            }
            )
          )
        )
      )
      .subscribe((pizzas => {
        this.pizzas = pizzas
        this.$pizzas.next(this.pizzas);
      }
      ));
    pizzaCreated.subscribe().pipe(map(event => event.data.createdPizza as Pizza))
      .subscribe((pizzaChanged => {
        this.pizzas.push(pizzaChanged);
        this.$pizzas.next(this.pizzas);
      }));


    pizzaDeleted.subscribe().pipe(map(event => (
      { name: event.data.deletedOnePizza.name, id: event.data.deletedOnePizza.id } as Pizza)))
      .subscribe((pizzaDeleted => {
        this.$pizzas.next(this.pizzas.filter(pizza => pizza.id !== pizzaDeleted.id));
      }));
  }

  ngOnInit(): void {
  }

  getToppingListString(toppings: Topping[]): string {
    if (toppings?.length) {
      return toppings?.map(topping => topping.name).join(', ');
    }
    return '';
  }

  // delete(id: string) {
  //   this.deletePizza.mutate({ pizzaId: id }).subscribe(res => {
  //     this.snackBar.open(
  //       `Deleted Pizza ${res.data.deleteOnePizza.name}`,
  //       'ok',
  //       {
  //         duration: 1000
  //       }
  //     );
  //   })
  // }
}
