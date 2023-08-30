import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaryIndexComponent } from './secretary-index.component';

describe('SecretaryIndexComponent', () => {
  let component: SecretaryIndexComponent;
  let fixture: ComponentFixture<SecretaryIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecretaryIndexComponent]
    });
    fixture = TestBed.createComponent(SecretaryIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
