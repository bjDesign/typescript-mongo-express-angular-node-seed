import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProteinItemComponent } from './protein-item.component';

describe('ProteinItemComponent', () => {
  let component: ProteinItemComponent;
  let fixture: ComponentFixture<ProteinItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProteinItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProteinItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
