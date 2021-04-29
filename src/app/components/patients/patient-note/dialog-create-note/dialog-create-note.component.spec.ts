import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DialogCreateNoteComponent} from './dialog-create-note.component';

describe('DialogCreateNoteComponent', () => {
  let component: DialogCreateNoteComponent;
  let fixture: ComponentFixture<DialogCreateNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogCreateNoteComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
