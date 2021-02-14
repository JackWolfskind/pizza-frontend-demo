import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { GraphQLModule } from '../graphql.module';
import { AppComponent } from './app.component';
import { PizzaCreateComponent } from './pizza-create/pizza-create.component';
import { PizzaListWithToppingComponent } from './pizza-list-with-topping/pizza-list-with-topping.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { ToppingCreateComponent } from './topping-create/topping-create.component';



@NgModule({
  declarations: [
    AppComponent,
    PizzaListComponent,
    PizzaListWithToppingComponent,
    PizzaCreateComponent,
    ToppingCreateComponent,
  ],
  imports: [
    MatSnackBarModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    MatTableModule,
    MatSidenavModule,
    MatButtonModule,
    BrowserModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    GraphQLModule,
    BrowserModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    // // Create an http link:
    // const http = httpLink.create({
    //   uri: 'http://localhost:4000'
    // });

    // // Create a WebSocket link:
    // const ws = new WebSocketLink({
    //   uri: `ws://localhost:4000/`,
    //   options: {
    //     reconnect: true
    //   }
    // });

    // // using the ability to split links, you can send data to each link
    // // depending on what kind of operation is being sent
    // const link = split(
    //   // split based on operation type
    //   ({ query }) => {
    //     const { kind } = getMainDefinition(query);
    //     return kind === 'OperationDefinition';
    //   },
    //   ws,
    //   http,
    // );

    // apollo.create({
    //   link,
    //   cache: null
    // });
  }

}
