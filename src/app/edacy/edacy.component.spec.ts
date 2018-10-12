import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdacyComponent } from './edacy.component';

describe('ClasseEdacyComponent', () => {
  let component: EdacyComponent;
  let fixture: ComponentFixture<EdacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
