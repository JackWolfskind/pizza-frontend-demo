import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ListPizzaGQL, Pizza, PizzaCreatedGQL, DeletePizzaGQL, PizzaDeletedGQL } from 'src/generated/graphql';


@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {


  displayedColumns: string[] = [
    'id',
    'name',
  ];

  pizzas: Pizza[];
  $pizzas = new Subject<Pizza[]>();

  constructor(
    listPizza: ListPizzaGQL,
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
