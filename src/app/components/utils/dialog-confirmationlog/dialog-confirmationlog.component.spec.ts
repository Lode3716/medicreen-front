import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConfirmationlogComponent } from './dialog-confirmationlog.component';

describe('DialogConfirmationlogComponent', () => {
  let component: DialogConfirmationlogComponent;
  let fixture: ComponentFixture<DialogConfirmationlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogConfirmationlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogConfirmationlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
