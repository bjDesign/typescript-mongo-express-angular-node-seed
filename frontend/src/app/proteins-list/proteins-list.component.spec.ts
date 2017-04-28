import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProteinsListComponent } from './proteins-list.component';

describe('ProteinsListComponent', () => {
  let component: ProteinsListComponent;
  let fixture: ComponentFixture<ProteinsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProteinsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProteinsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
