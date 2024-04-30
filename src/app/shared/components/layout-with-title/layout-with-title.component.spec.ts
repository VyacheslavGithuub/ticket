import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutWithTitleComponent } from './layout-with-title.component';

describe('LayoutWithTitleComponent', () => {
  let component: LayoutWithTitleComponent;
  let fixture: ComponentFixture<LayoutWithTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutWithTitleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutWithTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
