import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcgComponent } from './ecg.component';

describe('EcgComponent', () => {
  let component: EcgComponent;
  let fixture: ComponentFixture<EcgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EcgComponent]
    });
    fixture = TestBed.createComponent(EcgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
