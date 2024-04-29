import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutFullScreenComponent } from './layout-full-screen.component';

describe('LayoutFullScrinComponent', () => {
  let component: LayoutFullScreenComponent;
  let fixture: ComponentFixture<LayoutFullScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutFullScreenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutFullScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
