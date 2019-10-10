import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenLinenComponent } from './kitchen-linen.component';

describe('KitchenLinenComponent', () => {
  let component: KitchenLinenComponent;
  let fixture: ComponentFixture<KitchenLinenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenLinenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenLinenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
