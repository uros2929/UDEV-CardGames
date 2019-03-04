import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablicComponent } from './tablic.component';

describe('TablicComponent', () => {
  let component: TablicComponent;
  let fixture: ComponentFixture<TablicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
