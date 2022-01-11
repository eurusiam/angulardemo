import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CMaterialTreeComponent } from './c-material-tree.component';

describe('CMaterialTreeComponent', () => {
  let component: CMaterialTreeComponent;
  let fixture: ComponentFixture<CMaterialTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CMaterialTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CMaterialTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
