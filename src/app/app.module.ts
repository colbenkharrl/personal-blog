import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatSidenavModule,
  MatIconModule,
  MatDialogModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule } from 'angular2-markdown';
import { SimplemdeModule, SIMPLEMDE_CONFIG } from 'ng2-simplemde';


import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar.component';
import { SideNavComponent } from './sidenav.component';
import { BlogComponent } from './blog.component';
import { PostsComponent } from './posts.component';
import { NewPostComponent, NewCategoryDialogComponent } from './new-POST.component';
import { SignInComponent } from './sign-in.component';
import { FooterComponent } from './footer.component';
import { AboutComponent} from './about.component';
import { GreetingComponent } from './greeting.component';
import { AboutMeComponent } from './about-me.component';
import { ExperienceComponent} from './experience.component';
import { EducationComponent } from './education.component';
import { SkillsComponent } from './skills.component';

import { WebService } from './web.service';
import { AuthService } from './auth.service';
import { RouteService } from './route.service';

const routes = [
  {path: '', component: AboutComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'signin', component: SignInComponent},
  {path: 'posts/:id', component: PostsComponent},
  {path: 'user/:user', component: PostsComponent},
  {path: 'categories/:name', component: PostsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SideNavComponent,
    PostsComponent,
    NewPostComponent,
    NewCategoryDialogComponent,
    BlogComponent,
    SignInComponent,
    FooterComponent,
    AboutComponent,
    GreetingComponent,
    AboutMeComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MarkdownModule,
    SimplemdeModule.forRoot({
      provide: SIMPLEMDE_CONFIG,
      useValue: { }
    })
  ],
  entryComponents: [NewCategoryDialogComponent, NewPostComponent],
  providers: [WebService, AuthService, RouteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
