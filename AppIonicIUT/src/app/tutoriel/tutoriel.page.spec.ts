import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TutorielPage } from './tutoriel.page';

describe('TutorielPage', () => {
  let component: TutorielPage;
  let fixture: ComponentFixture<TutorielPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorielPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TutorielPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
