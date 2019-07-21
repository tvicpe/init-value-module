import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncInitialValueComponent } from './async-initial-value.component';

describe('AsyncInitialValueComponent', () => {
  let component: AsyncInitialValueComponent;
  let fixture: ComponentFixture<AsyncInitialValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncInitialValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncInitialValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
