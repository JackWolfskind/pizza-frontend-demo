import { async, ComponentFixture, TestBed } from '@angular/core/testing';


describe('PizzaListWithToppingComponent', () => {
  let component: PizzaListWithToppingComponent;
  let fixture: ComponentFixture<PizzaListWithToppingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaListWithToppingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaListWithToppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
