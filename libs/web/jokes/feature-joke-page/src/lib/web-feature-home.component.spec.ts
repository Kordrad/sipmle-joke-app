import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebJokesFeatureJokePageComponent } from './web-feature-home.component';

describe('WebFeatureComponent', () => {
  let component: WebJokesFeatureJokePageComponent;
  let fixture: ComponentFixture<WebJokesFeatureJokePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebJokesFeatureJokePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebJokesFeatureJokePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
