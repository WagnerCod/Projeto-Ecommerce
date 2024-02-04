import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesafiolucasPage } from './desafiolucas.page';

describe('DesafiolucasPage', () => {
  let component: DesafiolucasPage;
  let fixture: ComponentFixture<DesafiolucasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DesafiolucasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
