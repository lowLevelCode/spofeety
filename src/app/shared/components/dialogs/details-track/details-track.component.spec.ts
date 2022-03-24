import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTrackComponent } from './details-track.component';

describe('DetailsTrackComponent', () => {
  let component: DetailsTrackComponent;
  let fixture: ComponentFixture<DetailsTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsTrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
