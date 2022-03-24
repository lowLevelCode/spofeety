import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarWithSearchComponent } from './toolbar-with-search.component';

describe('ToolbarWithSearchComponent', () => {
  let component: ToolbarWithSearchComponent;
  let fixture: ComponentFixture<ToolbarWithSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarWithSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarWithSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
