import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebMyJokesUiJokesViewComponent } from './web-my-jokes-ui-jokes-view.component';

describe('WebMyJokesUiJokesViewComponent', () => {
  let component: WebMyJokesUiJokesViewComponent;
  let fixture: ComponentFixture<WebMyJokesUiJokesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebMyJokesUiJokesViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebMyJokesUiJokesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
