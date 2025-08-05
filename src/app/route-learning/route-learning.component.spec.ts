import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteLearningComponent } from './route-learning.component';

describe('RouteLearningComponent', () => {
  let component: RouteLearningComponent;
  let fixture: ComponentFixture<RouteLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteLearningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
