import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDefaultComponent } from './page-default.component';

describe('PageDefaultComponent', () => {
  let component: PageDefaultComponent;
  let fixture: ComponentFixture<PageDefaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageDefaultComponent]
    });
    fixture = TestBed.createComponent(PageDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
