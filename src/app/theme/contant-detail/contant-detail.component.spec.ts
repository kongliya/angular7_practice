import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContantDetailComponent } from './contant-detail.component';

describe('ContantDetailComponent', () => {
  let component: ContantDetailComponent;
  let fixture: ComponentFixture<ContantDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContantDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
