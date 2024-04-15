import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoComponent } from './user-info.component';

describe('UserInfoComponent', () => {
  let component: UserInfoComponent;
  let fixture: ComponentFixture<UserInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserInfoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display user information', () => {
    const userInfo = {
      name: 'John Doe',
      login: 'johndoe',
      location: 'London, UK',
      company: 'Google',
      avatar_url: 'https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
      twitter_username: '@johndoe',
      html_url: 'https://github.com/johndoe',
    };
    component.userInfo = userInfo;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.text-xl').textContent).toContain(
      'John Doe'
    );
    expect(compiled.querySelector('.text-sm').textContent).toContain(
      '@johndoe'
    );
    expect(compiled.querySelector('.text-blue-500').getAttribute('href')).toBe(
      'https://github.com/johndoe'
    );
  });
});
