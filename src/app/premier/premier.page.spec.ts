import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PremierPage } from './premier.page';

describe('PremierPage', () => {
  let component: PremierPage;
  let fixture: ComponentFixture<PremierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremierPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PremierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
