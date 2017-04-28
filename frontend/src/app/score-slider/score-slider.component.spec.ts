import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreSliderComponent } from './score-slider.component';

describe('ScoreSliderComponent', () => {
  let component: ScoreSliderComponent;
  let fixture: ComponentFixture<ScoreSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
