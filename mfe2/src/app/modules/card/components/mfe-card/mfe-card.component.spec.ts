import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfeCardComponent } from './mfe-card.component';

describe('MfeCardComponent', () => {
  let component: MfeCardComponent;
  let fixture: ComponentFixture<MfeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfeCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
