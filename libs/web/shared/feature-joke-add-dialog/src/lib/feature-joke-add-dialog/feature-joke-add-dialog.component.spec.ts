import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureJokeAddDialogComponent } from './feature-joke-add-dialog.component';

describe('FeatureJokeAddDialogComponent', () => {
  let component: FeatureJokeAddDialogComponent;
  let fixture: ComponentFixture<FeatureJokeAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureJokeAddDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureJokeAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
