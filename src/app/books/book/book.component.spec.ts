import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';

/*
** Component: Is method called, event triggered, event payload?
*/
describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // change detection is done here manually in the test
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event for onRateUp()', () => {
    // TODO
  })
});
