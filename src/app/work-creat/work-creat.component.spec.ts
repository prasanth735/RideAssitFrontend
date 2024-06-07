import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkCreatComponent } from './work-creat.component';

describe('WorkCreatComponent', () => {
  let component: WorkCreatComponent;
  let fixture: ComponentFixture<WorkCreatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkCreatComponent]
    });
    fixture = TestBed.createComponent(WorkCreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
