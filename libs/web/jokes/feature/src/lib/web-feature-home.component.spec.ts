import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebJokesFeatureComponent } from './web-feature-home.component';

describe('WebFeatureComponent', () => {
  let component: WebJokesFeatureComponent;
  let fixture: ComponentFixture<WebJokesFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebJokesFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebJokesFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
