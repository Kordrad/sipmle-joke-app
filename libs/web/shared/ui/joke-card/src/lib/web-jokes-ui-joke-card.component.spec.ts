import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSharedUiJokeCardComponent } from './web-jokes-ui-joke-card.component';

describe('WebSharedUiJokeCardComponent', () => {
  let component: WebSharedUiJokeCardComponent;
  let fixture: ComponentFixture<WebSharedUiJokeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebSharedUiJokeCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebSharedUiJokeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
