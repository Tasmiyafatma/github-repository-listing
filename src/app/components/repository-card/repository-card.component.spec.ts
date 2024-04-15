import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryCardComponent } from './repository-card.component';

describe('RepositoryCardComponent', () => {
  let component: RepositoryCardComponent;
  let fixture: ComponentFixture<RepositoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepositoryCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryCardComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display repository information', () => {
    const repoInfo = {
      name: 'MyRepo',
      description: 'A sample repository',
      topics: ['Angular', 'JavaScript', 'Tailwind CSS']
    };
    component.repo = repoInfo;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.text-lg').textContent).toContain('MyRepo');
    expect(compiled.querySelector('.text-sm').textContent).toContain(
      'A sample repository'
    );
    // Add expectations for other properties as needed
  });
});
