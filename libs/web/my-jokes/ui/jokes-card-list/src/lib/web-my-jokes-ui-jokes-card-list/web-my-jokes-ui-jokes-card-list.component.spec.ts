import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebMyJokesUiJokesCardListComponent } from './web-my-jokes-ui-jokes-card-list.component';

describe('WebMyJokesUiJokesCardListComponent', () => {
  let component: WebMyJokesUiJokesCardListComponent;
  let fixture: ComponentFixture<WebMyJokesUiJokesCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebMyJokesUiJokesCardListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebMyJokesUiJokesCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
