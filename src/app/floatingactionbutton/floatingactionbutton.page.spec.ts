import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FloatingactionbuttonPage } from './floatingactionbutton.page';

describe('FloatingactionbuttonPage', () => {
  let component: FloatingactionbuttonPage;
  let fixture: ComponentFixture<FloatingactionbuttonPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatingactionbuttonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FloatingactionbuttonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
