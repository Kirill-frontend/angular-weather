import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightBlockComponent } from './right-block.component';

describe('RightBlockComponent', () => {
  let component: RightBlockComponent;
  let fixture: ComponentFixture<RightBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
