import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOnChangeHookComponent } from './ng-on-change-hook.component';

describe('NgOnChangeHookComponent', () => {
  let component: NgOnChangeHookComponent;
  let fixture: ComponentFixture<NgOnChangeHookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgOnChangeHookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgOnChangeHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
