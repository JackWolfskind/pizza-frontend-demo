import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppingCreateComponent } from './topping-create.component';

describe('ToppingCreateComponent', () => {
  let component: ToppingCreateComponent;
  let fixture: ComponentFixture<ToppingCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToppingCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToppingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
