import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginalnotedialogComponent } from './originalnotedialog.component';

describe('OriginalnotedialogComponent', () => {
  let component: OriginalnotedialogComponent;
  let fixture: ComponentFixture<OriginalnotedialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OriginalnotedialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginalnotedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
