import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgistrationComponent } from './rgistration.component';

describe('RgistrationComponent', () => {
  let component: RgistrationComponent;
  let fixture: ComponentFixture<RgistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RgistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RgistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
