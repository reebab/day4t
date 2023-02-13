import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SingleComponent } from 'src/app/single/single.component';
import { DistrictpageComponent } from './districtpage.component';

describe('DistrictpageComponent', () => {
  let component: DistrictpageComponent;
  let fixture: ComponentFixture<DistrictpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistrictpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistrictpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
