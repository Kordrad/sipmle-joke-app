import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebJokesUiJokeViewComponent } from './web-jokes-ui-joke-view.component';

describe('WebJokesUiJokeViewComponent', () => {
  let component: WebJokesUiJokeViewComponent;
  let fixture: ComponentFixture<WebJokesUiJokeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebJokesUiJokeViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebJokesUiJokeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
