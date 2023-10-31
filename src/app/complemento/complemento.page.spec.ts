import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComplementoPage } from './complemento.page';

describe('ComplementoPage', () => {
  let component: ComplementoPage;
  let fixture: ComponentFixture<ComplementoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ComplementoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
