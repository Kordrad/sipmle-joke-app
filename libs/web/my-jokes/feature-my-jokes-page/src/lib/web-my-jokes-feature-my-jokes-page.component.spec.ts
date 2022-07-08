import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebMyJokesFeatureMyJokesPageComponent } from './web-my-jokes-feature-my-jokes-page.component';

describe('WebJokesFeatureJokePageComponent', () => {
  let component: WebMyJokesFeatureMyJokesPageComponent;
  let fixture: ComponentFixture<WebMyJokesFeatureMyJokesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebMyJokesFeatureMyJokesPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebMyJokesFeatureMyJokesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
