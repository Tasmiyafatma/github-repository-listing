import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchReposComponent } from './search-repos.component';

describe('SearchReposComponent', () => {
  let component: SearchReposComponent;
  let fixture: ComponentFixture<SearchReposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchReposComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
