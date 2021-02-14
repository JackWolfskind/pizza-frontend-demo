import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** Cursor for paging through collections */
  ConnectionCursor: any;
};



export type Topping = {
  __typename?: 'Topping';
  id: Scalars['ID'];
  name: Scalars['String'];
  created?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  pizzas?: Maybe<ToppingPizzasConnection>;
};


export type ToppingPizzasArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<PizzaFilter>;
  sorting?: Maybe<Array<PizzaSort>>;
};


export type CursorPaging = {
  /** Paginate before opaque cursor */
  before?: Maybe<Scalars['ConnectionCursor']>;
  /** Paginate after opaque cursor */
  after?: Maybe<Scalars['ConnectionCursor']>;
  /** Paginate first */
  first?: Maybe<Scalars['Int']>;
  /** Paginate last */
  last?: Maybe<Scalars['Int']>;
};


export type PizzaFilter = {
  and?: Maybe<Array<PizzaFilter>>;
  or?: Maybe<Array<PizzaFilter>>;
  id?: Maybe<IdFilterComparison>;
  name?: Maybe<StringFieldComparison>;
};

export type IdFilterComparison = {
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<Scalars['ID']>;
  neq?: Maybe<Scalars['ID']>;
  gt?: Maybe<Scalars['ID']>;
  gte?: Maybe<Scalars['ID']>;
  lt?: Maybe<Scalars['ID']>;
  lte?: Maybe<Scalars['ID']>;
  like?: Maybe<Scalars['ID']>;
  notLike?: Maybe<Scalars['ID']>;
  iLike?: Maybe<Scalars['ID']>;
  notILike?: Maybe<Scalars['ID']>;
  in?: Maybe<Array<Scalars['ID']>>;
  notIn?: Maybe<Array<Scalars['ID']>>;
};

export type StringFieldComparison = {
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<Scalars['String']>;
  neq?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  like?: Maybe<Scalars['String']>;
  notLike?: Maybe<Scalars['String']>;
  iLike?: Maybe<Scalars['String']>;
  notILike?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
};

export type PizzaSort = {
  field: PizzaSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum PizzaSortFields {
  Id = 'id',
  Name = 'name'
}

/** Sort Directions */
export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** Sort Nulls Options */
export enum SortNulls {
  NullsFirst = 'NULLS_FIRST',
  NullsLast = 'NULLS_LAST'
}

export type Pizza = {
  __typename?: 'Pizza';
  id: Scalars['ID'];
  name: Scalars['String'];
  created?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  toppings?: Maybe<Array<Topping>>;
};


export type PizzaToppingsArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<ToppingFilter>;
  sorting?: Maybe<Array<ToppingSort>>;
};

export type OffsetPaging = {
  /** Limit the number of records returned */
  limit?: Maybe<Scalars['Int']>;
  /** Offset to start returning records from */
  offset?: Maybe<Scalars['Int']>;
};

export type ToppingFilter = {
  and?: Maybe<Array<ToppingFilter>>;
  or?: Maybe<Array<ToppingFilter>>;
  id?: Maybe<IdFilterComparison>;
  name?: Maybe<StringFieldComparison>;
};

export type ToppingSort = {
  field: ToppingSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum ToppingSortFields {
  Id = 'id',
  Name = 'name'
}

export type DeleteManyResponse = {
  __typename?: 'DeleteManyResponse';
  /** The number of records deleted. */
  deletedCount: Scalars['Int'];
};

export type PizzaDeleteResponse = {
  __typename?: 'PizzaDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
};

export type UpdateManyResponse = {
  __typename?: 'UpdateManyResponse';
  /** The number of records updated. */
  updatedCount: Scalars['Int'];
};

export type PizzaEdge = {
  __typename?: 'PizzaEdge';
  /** The node containing the Pizza */
  node: Pizza;
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  /** The cursor of the first returned record. */
  startCursor?: Maybe<Scalars['ConnectionCursor']>;
  /** The cursor of the last returned record. */
  endCursor?: Maybe<Scalars['ConnectionCursor']>;
};

export type PizzaConnection = {
  __typename?: 'PizzaConnection';
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<PizzaEdge>;
};

export type PizzaCountAggregate = {
  __typename?: 'PizzaCountAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
};

export type PizzaSumAggregate = {
  __typename?: 'PizzaSumAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type PizzaAvgAggregate = {
  __typename?: 'PizzaAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type PizzaMinAggregate = {
  __typename?: 'PizzaMinAggregate';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type PizzaMaxAggregate = {
  __typename?: 'PizzaMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type ToppingDeleteResponse = {
  __typename?: 'ToppingDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
};

export type ToppingEdge = {
  __typename?: 'ToppingEdge';
  /** The node containing the Topping */
  node: Topping;
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
};

export type ToppingConnection = {
  __typename?: 'ToppingConnection';
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<ToppingEdge>;
};

export type ToppingCountAggregate = {
  __typename?: 'ToppingCountAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
};

export type ToppingSumAggregate = {
  __typename?: 'ToppingSumAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type ToppingAvgAggregate = {
  __typename?: 'ToppingAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type ToppingMinAggregate = {
  __typename?: 'ToppingMinAggregate';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type ToppingMaxAggregate = {
  __typename?: 'ToppingMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type ToppingPizzasConnection = {
  __typename?: 'ToppingPizzasConnection';
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<PizzaEdge>;
};

export type Query = {
  __typename?: 'Query';
  pizza?: Maybe<Pizza>;
  pizzas: PizzaConnection;
  topping?: Maybe<Topping>;
  toppings: ToppingConnection;
};


export type QueryPizzaArgs = {
  id: Scalars['ID'];
};


export type QueryPizzasArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<PizzaFilter>;
  sorting?: Maybe<Array<PizzaSort>>;
};


export type QueryToppingArgs = {
  id: Scalars['ID'];
};


export type QueryToppingsArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<ToppingFilter>;
  sorting?: Maybe<Array<ToppingSort>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addToppingsToPizza: Pizza;
  createOnePizza: Pizza;
  createManyPizzas: Array<Pizza>;
  updateOnePizza: Pizza;
  updateManyPizzas: UpdateManyResponse;
  deleteOnePizza: PizzaDeleteResponse;
  deleteManyPizzas: DeleteManyResponse;
  createOneTopping: Topping;
  createManyToppings: Array<Topping>;
  updateOneTopping: Topping;
  updateManyToppings: UpdateManyResponse;
  deleteOneTopping: ToppingDeleteResponse;
  deleteManyToppings: DeleteManyResponse;
};


export type MutationAddToppingsToPizzaArgs = {
  input: RelationsInput;
};


export type MutationCreateOnePizzaArgs = {
  input: CreateOnePizzaInput;
};


export type MutationCreateManyPizzasArgs = {
  input: CreateManyPizzasInput;
};


export type MutationUpdateOnePizzaArgs = {
  input: UpdateOnePizzaInput;
};


export type MutationUpdateManyPizzasArgs = {
  input: UpdateManyPizzasInput;
};


export type MutationDeleteOnePizzaArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteManyPizzasArgs = {
  input: DeleteManyPizzasInput;
};


export type MutationCreateOneToppingArgs = {
  input: CreateOneToppingInput;
};


export type MutationCreateManyToppingsArgs = {
  input: CreateManyToppingsInput;
};


export type MutationUpdateOneToppingArgs = {
  input: UpdateOneToppingInput;
};


export type MutationUpdateManyToppingsArgs = {
  input: UpdateManyToppingsInput;
};


export type MutationDeleteOneToppingArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteManyToppingsArgs = {
  input: DeleteManyToppingsInput;
};

export type RelationsInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type CreateOnePizzaInput = {
  /** The record to create */
  pizza: CreatePizza;
};

export type CreatePizza = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
};

export type CreateManyPizzasInput = {
  /** Array of records to create */
  pizzas: Array<CreatePizza>;
};

export type UpdateOnePizzaInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdatePizza;
};

export type UpdatePizza = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
};

export type UpdateManyPizzasInput = {
  /** Filter used to find fields to update */
  filter: PizzaUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdatePizza;
};

export type PizzaUpdateFilter = {
  and?: Maybe<Array<PizzaUpdateFilter>>;
  or?: Maybe<Array<PizzaUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  name?: Maybe<StringFieldComparison>;
};

export type DeleteOneInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteManyPizzasInput = {
  /** Filter to find records to delete */
  filter: PizzaDeleteFilter;
};

export type PizzaDeleteFilter = {
  and?: Maybe<Array<PizzaDeleteFilter>>;
  or?: Maybe<Array<PizzaDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  name?: Maybe<StringFieldComparison>;
};

export type CreateOneToppingInput = {
  /** The record to create */
  topping: CreateTopping;
};

export type CreateTopping = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
};

export type CreateManyToppingsInput = {
  /** Array of records to create */
  toppings: Array<CreateTopping>;
};

export type UpdateOneToppingInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateTopping;
};

export type UpdateTopping = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
};

export type UpdateManyToppingsInput = {
  /** Filter used to find fields to update */
  filter: ToppingUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateTopping;
};

export type ToppingUpdateFilter = {
  and?: Maybe<Array<ToppingUpdateFilter>>;
  or?: Maybe<Array<ToppingUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  name?: Maybe<StringFieldComparison>;
};

export type DeleteManyToppingsInput = {
  /** Filter to find records to delete */
  filter: ToppingDeleteFilter;
};

export type ToppingDeleteFilter = {
  and?: Maybe<Array<ToppingDeleteFilter>>;
  or?: Maybe<Array<ToppingDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  name?: Maybe<StringFieldComparison>;
};

export type Subscription = {
  __typename?: 'Subscription';
  createdPizza: Pizza;
  updatedOnePizza: Pizza;
  updatedManyPizzas: UpdateManyResponse;
  deletedOnePizza: PizzaDeleteResponse;
  deletedManyPizzas: DeleteManyResponse;
  createdTopping: Topping;
  updatedOneTopping: Topping;
  updatedManyToppings: UpdateManyResponse;
  deletedOneTopping: ToppingDeleteResponse;
  deletedManyToppings: DeleteManyResponse;
};


export type SubscriptionCreatedPizzaArgs = {
  input?: Maybe<CreatePizzaSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOnePizzaArgs = {
  input?: Maybe<UpdateOnePizzaSubscriptionFilterInput>;
};


export type SubscriptionDeletedOnePizzaArgs = {
  input?: Maybe<DeleteOnePizzaSubscriptionFilterInput>;
};


export type SubscriptionCreatedToppingArgs = {
  input?: Maybe<CreateToppingSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneToppingArgs = {
  input?: Maybe<UpdateOneToppingSubscriptionFilterInput>;
};


export type SubscriptionDeletedOneToppingArgs = {
  input?: Maybe<DeleteOneToppingSubscriptionFilterInput>;
};

export type CreatePizzaSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: PizzaSubscriptionFilter;
};

export type PizzaSubscriptionFilter = {
  and?: Maybe<Array<PizzaSubscriptionFilter>>;
  or?: Maybe<Array<PizzaSubscriptionFilter>>;
  id?: Maybe<IdFilterComparison>;
  name?: Maybe<StringFieldComparison>;
};

export type UpdateOnePizzaSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: PizzaSubscriptionFilter;
};

export type DeleteOnePizzaSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: PizzaSubscriptionFilter;
};

export type CreateToppingSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ToppingSubscriptionFilter;
};

export type ToppingSubscriptionFilter = {
  and?: Maybe<Array<ToppingSubscriptionFilter>>;
  or?: Maybe<Array<ToppingSubscriptionFilter>>;
  id?: Maybe<IdFilterComparison>;
  name?: Maybe<StringFieldComparison>;
};

export type UpdateOneToppingSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ToppingSubscriptionFilter;
};

export type DeleteOneToppingSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ToppingSubscriptionFilter;
};

export type ToppingChangedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ToppingChangedSubscription = (
  { __typename?: 'Subscription' }
  & { createdTopping: (
    { __typename?: 'Topping' }
    & Pick<Topping, 'id' | 'name'>
  ) }
);

export type ListToppingsForPizzaCreateQueryVariables = Exact<{ [key: string]: never; }>;


export type ListToppingsForPizzaCreateQuery = (
  { __typename?: 'Query' }
  & { toppings: (
    { __typename?: 'ToppingConnection' }
    & { edges: Array<(
      { __typename?: 'ToppingEdge' }
      & { node: (
        { __typename?: 'Topping' }
        & Pick<Topping, 'id' | 'name'>
      ) }
    )> }
  ) }
);

export type CreatePizzaMutationVariables = Exact<{
  createPizza: CreatePizza;
}>;


export type CreatePizzaMutation = (
  { __typename?: 'Mutation' }
  & { createOnePizza: (
    { __typename?: 'Pizza' }
    & Pick<Pizza, 'id' | 'name'>
  ) }
);

export type AddToppingsToPizzaMutationVariables = Exact<{
  relation: RelationsInput;
}>;


export type AddToppingsToPizzaMutation = (
  { __typename?: 'Mutation' }
  & { addToppingsToPizza: (
    { __typename?: 'Pizza' }
    & Pick<Pizza, 'id' | 'name'>
  ) }
);

export type ListPizzaWithToppingQueryVariables = Exact<{ [key: string]: never; }>;


export type ListPizzaWithToppingQuery = (
  { __typename?: 'Query' }
  & { pizzas: (
    { __typename?: 'PizzaConnection' }
    & { edges: Array<(
      { __typename?: 'PizzaEdge' }
      & { node: (
        { __typename?: 'Pizza' }
        & Pick<Pizza, 'id' | 'name'>
        & { toppings?: Maybe<Array<(
          { __typename?: 'Topping' }
          & Pick<Topping, 'name'>
        )>> }
      ) }
    )> }
  ) }
);

export type DeletePizzaMutationVariables = Exact<{
  pizzaId: Scalars['ID'];
}>;


export type DeletePizzaMutation = (
  { __typename?: 'Mutation' }
  & { deleteOnePizza: (
    { __typename?: 'PizzaDeleteResponse' }
    & Pick<PizzaDeleteResponse, 'id' | 'name'>
  ) }
);

export type PizzaCreatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type PizzaCreatedSubscription = (
  { __typename?: 'Subscription' }
  & { createdPizza: (
    { __typename?: 'Pizza' }
    & Pick<Pizza, 'id' | 'name'>
    & { toppings?: Maybe<Array<(
      { __typename?: 'Topping' }
      & Pick<Topping, 'id' | 'name'>
    )>> }
  ) }
);

export type PizzaUpdatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type PizzaUpdatedSubscription = (
  { __typename?: 'Subscription' }
  & { updatedOnePizza: (
    { __typename?: 'Pizza' }
    & Pick<Pizza, 'id' | 'name'>
    & { toppings?: Maybe<Array<(
      { __typename?: 'Topping' }
      & Pick<Topping, 'id' | 'name'>
    )>> }
  ) }
);

export type PizzaDeletedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type PizzaDeletedSubscription = (
  { __typename?: 'Subscription' }
  & { deletedOnePizza: (
    { __typename?: 'PizzaDeleteResponse' }
    & Pick<PizzaDeleteResponse, 'id' | 'name'>
  ) }
);

export type ListPizzaQueryVariables = Exact<{ [key: string]: never; }>;


export type ListPizzaQuery = (
  { __typename?: 'Query' }
  & { pizzas: (
    { __typename?: 'PizzaConnection' }
    & { edges: Array<(
      { __typename?: 'PizzaEdge' }
      & { node: (
        { __typename?: 'Pizza' }
        & Pick<Pizza, 'id' | 'name'>
      ) }
    )> }
  ) }
);

export type CreateToppingMutationVariables = Exact<{
  createTopping: CreateTopping;
}>;


export type CreateToppingMutation = (
  { __typename?: 'Mutation' }
  & { createOneTopping: (
    { __typename?: 'Topping' }
    & Pick<Topping, 'id' | 'name'>
  ) }
);

export const ToppingChangedDocument = gql`
    subscription ToppingChanged {
  createdTopping {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ToppingChangedGQL extends Apollo.Subscription<ToppingChangedSubscription, ToppingChangedSubscriptionVariables> {
    document = ToppingChangedDocument;
    
  }
export const ListToppingsForPizzaCreateDocument = gql`
    query ListToppingsForPizzaCreate {
  toppings {
    edges {
      node {
        id
        name
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ListToppingsForPizzaCreateGQL extends Apollo.Query<ListToppingsForPizzaCreateQuery, ListToppingsForPizzaCreateQueryVariables> {
    document = ListToppingsForPizzaCreateDocument;
    
  }
export const CreatePizzaDocument = gql`
    mutation CreatePizza($createPizza: CreatePizza!) {
  createOnePizza(input: {pizza: $createPizza}) {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatePizzaGQL extends Apollo.Mutation<CreatePizzaMutation, CreatePizzaMutationVariables> {
    document = CreatePizzaDocument;
    
  }
export const AddToppingsToPizzaDocument = gql`
    mutation AddToppingsToPizza($relation: RelationsInput!) {
  addToppingsToPizza(input: $relation) {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddToppingsToPizzaGQL extends Apollo.Mutation<AddToppingsToPizzaMutation, AddToppingsToPizzaMutationVariables> {
    document = AddToppingsToPizzaDocument;
    
  }
export const ListPizzaWithToppingDocument = gql`
    query ListPizzaWithTopping {
  pizzas {
    edges {
      node {
        id
        name
        toppings {
          name
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ListPizzaWithToppingGQL extends Apollo.Query<ListPizzaWithToppingQuery, ListPizzaWithToppingQueryVariables> {
    document = ListPizzaWithToppingDocument;
    
  }
export const DeletePizzaDocument = gql`
    mutation DeletePizza($pizzaId: ID!) {
  deleteOnePizza(input: {id: $pizzaId}) {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeletePizzaGQL extends Apollo.Mutation<DeletePizzaMutation, DeletePizzaMutationVariables> {
    document = DeletePizzaDocument;
    
  }
export const PizzaCreatedDocument = gql`
    subscription PizzaCreated {
  createdPizza {
    id
    name
    toppings {
      id
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PizzaCreatedGQL extends Apollo.Subscription<PizzaCreatedSubscription, PizzaCreatedSubscriptionVariables> {
    document = PizzaCreatedDocument;
    
  }
export const PizzaUpdatedDocument = gql`
    subscription PizzaUpdated {
  updatedOnePizza {
    id
    name
    toppings {
      id
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PizzaUpdatedGQL extends Apollo.Subscription<PizzaUpdatedSubscription, PizzaUpdatedSubscriptionVariables> {
    document = PizzaUpdatedDocument;
    
  }
export const PizzaDeletedDocument = gql`
    subscription PizzaDeleted {
  deletedOnePizza {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PizzaDeletedGQL extends Apollo.Subscription<PizzaDeletedSubscription, PizzaDeletedSubscriptionVariables> {
    document = PizzaDeletedDocument;
    
  }
export const ListPizzaDocument = gql`
    query ListPizza {
  pizzas {
    edges {
      node {
        id
        name
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ListPizzaGQL extends Apollo.Query<ListPizzaQuery, ListPizzaQueryVariables> {
    document = ListPizzaDocument;
    
  }
export const CreateToppingDocument = gql`
    mutation CreateTopping($createTopping: CreateTopping!) {
  createOneTopping(input: {topping: $createTopping}) {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateToppingGQL extends Apollo.Mutation<CreateToppingMutation, CreateToppingMutationVariables> {
    document = CreateToppingDocument;
    
  }