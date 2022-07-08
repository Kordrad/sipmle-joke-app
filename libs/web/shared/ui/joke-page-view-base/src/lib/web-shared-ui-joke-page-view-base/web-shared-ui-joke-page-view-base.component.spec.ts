import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSharedUiJokePageViewBaseComponent } from './web-shared-ui-joke-page-view-base.component';

describe('WebSharedUiJokePageViewBaseComponent', () => {
  let component: WebSharedUiJokePageViewBaseComponent;
  let fixture: ComponentFixture<WebSharedUiJokePageViewBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebSharedUiJokePageViewBaseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebSharedUiJokePageViewBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
