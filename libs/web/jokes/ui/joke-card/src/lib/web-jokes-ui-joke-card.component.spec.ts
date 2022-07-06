import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebJokesUiJokeCardComponent } from './web-jokes-ui-joke-card.component';

describe('WebJokesUiJokeCardComponent', () => {
  let component: WebJokesUiJokeCardComponent;
  let fixture: ComponentFixture<WebJokesUiJokeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebJokesUiJokeCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebJokesUiJokeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
