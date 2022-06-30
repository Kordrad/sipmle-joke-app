import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebFeatureJokesComponent } from './web-feature-home.component';

describe('WebFeatureComponent', () => {
  let component: WebFeatureJokesComponent;
  let fixture: ComponentFixture<WebFeatureJokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebFeatureJokesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebFeatureJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
