import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoComponent } from './edicao.component';

describe('EdicaoComponent', () => {
  let component: EdicaoComponent;
  let fixture: ComponentFixture<EdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
