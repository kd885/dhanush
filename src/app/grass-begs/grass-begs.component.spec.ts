import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrassBegsComponent } from './grass-begs.component';

describe('GrassBegsComponent', () => {
  let component: GrassBegsComponent;
  let fixture: ComponentFixture<GrassBegsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrassBegsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrassBegsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
