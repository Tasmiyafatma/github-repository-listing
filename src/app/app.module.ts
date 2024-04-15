import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchReposComponent } from './components/search-repos/search-repos.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { RepositoryCardComponent } from './components/repository-card/repository-card.component';
import { ShimmerUiComponent } from './components/shimmer-ui/shimmer-ui.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchReposComponent,
    UserInfoComponent,
    RepositoryCardComponent,
    ShimmerUiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
