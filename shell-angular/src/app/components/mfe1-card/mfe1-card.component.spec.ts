import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mfe1CardComponent } from './mfe1-card.component';

describe('Mfe1CardComponent', () => {
  let component: Mfe1CardComponent;
  let fixture: ComponentFixture<Mfe1CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mfe1CardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mfe1CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
