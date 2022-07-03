import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebUiNavComponent } from './web-ui-nav.component';

describe('WebUiNavComponent', () => {
  let component: WebUiNavComponent;
  let fixture: ComponentFixture<WebUiNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebUiNavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebUiNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
