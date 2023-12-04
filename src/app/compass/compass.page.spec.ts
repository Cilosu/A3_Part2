import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';


import { CompassPage } from './compass.page';
import {CompassPageModule} from "./compass.module";

describe('CompassPage', () => {
  let component: CompassPage;
  let fixture: ComponentFixture<CompassPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompassPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
