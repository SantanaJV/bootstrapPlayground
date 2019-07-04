import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameProducerComponent } from './game-producer.component';

describe('GameProducerComponent', () => {
  let component: GameProducerComponent;
  let fixture: ComponentFixture<GameProducerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameProducerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameProducerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
