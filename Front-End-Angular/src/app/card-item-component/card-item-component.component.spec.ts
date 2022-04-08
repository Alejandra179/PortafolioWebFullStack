import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemComponentComponent } from './card-item-component.component';

describe('CardItemComponentComponent', () => {
  let component: CardItemComponentComponent;
  let fixture: ComponentFixture<CardItemComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardItemComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
