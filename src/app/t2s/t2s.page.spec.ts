import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { T2sPage } from './t2s.page';

describe('T2sPage', () => {
  let component: T2sPage;
  let fixture: ComponentFixture<T2sPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [T2sPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(T2sPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
