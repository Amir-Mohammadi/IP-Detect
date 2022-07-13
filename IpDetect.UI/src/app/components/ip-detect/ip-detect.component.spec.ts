import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpDetectComponent } from './ip-detect.component';

describe('IpDetectComponent', () => {
  let component: IpDetectComponent;
  let fixture: ComponentFixture<IpDetectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpDetectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpDetectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
