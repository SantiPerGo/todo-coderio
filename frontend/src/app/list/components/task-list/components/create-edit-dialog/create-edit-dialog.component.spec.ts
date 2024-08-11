import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditDialogComponent } from './create-edit-dialog.component';

describe('CreateEditDialogComponent', () => {
  let component: CreateEditDialogComponent;
  let fixture: ComponentFixture<CreateEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEditDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
