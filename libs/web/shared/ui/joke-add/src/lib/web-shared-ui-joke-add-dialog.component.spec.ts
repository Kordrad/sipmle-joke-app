import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSharedUiJokeAddComponent } from './web-shared-ui-joke-add-dialog.component';

describe('WebSharedUiJokeAddComponent', () => {
  let component: WebSharedUiJokeAddComponent;
  let fixture: ComponentFixture<WebSharedUiJokeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebSharedUiJokeAddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebSharedUiJokeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
