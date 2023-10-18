import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VahicleInfoComponent } from './vahicle-info.component';

describe('VahicleInfoComponent', () => {
  let component: VahicleInfoComponent;
  let fixture: ComponentFixture<VahicleInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VahicleInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VahicleInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
