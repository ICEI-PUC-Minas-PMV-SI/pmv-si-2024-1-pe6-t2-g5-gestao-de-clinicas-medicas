import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicaComponent } from './clinica.component';

describe('ClinicaComponent', () => {
  let component: ClinicaComponent;
  let fixture: ComponentFixture<ClinicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
