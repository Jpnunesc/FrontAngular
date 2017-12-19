import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarResteuranteComponent } from './editar-resteurante.component';

describe('EditarResteuranteComponent', () => {
  let component: EditarResteuranteComponent;
  let fixture: ComponentFixture<EditarResteuranteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarResteuranteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarResteuranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
