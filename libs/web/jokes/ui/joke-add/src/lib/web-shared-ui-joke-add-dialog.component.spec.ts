import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebJokesUiJokeAddComponent } from './web-shared-ui-joke-add-dialog.component';

describe('WebJokesUiJokeAddComponent', () => {
  let component: WebJokesUiJokeAddComponent;
  let fixture: ComponentFixture<WebJokesUiJokeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebJokesUiJokeAddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebJokesUiJokeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
