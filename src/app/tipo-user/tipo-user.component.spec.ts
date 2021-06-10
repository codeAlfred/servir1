import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoUserComponent } from './tipo-user.component';

describe('TipoUserComponent', () => {
  let component: TipoUserComponent;
  let fixture: ComponentFixture<TipoUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
