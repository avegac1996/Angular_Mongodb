import { RouterModule, Routes } from '@angular/router';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { PrivateTasksComponent } from './components/private-tasks/private-tasks.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { DescripcionComponent } from './components/descripcion/descripcion.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { FooterComponent } from './components/footer/footer.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';

import { FourZeroFourComponent } from './components/four-zero-four/four-zero-four.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NavComponent } from './components/nav/nav.component';
import { PostComponent } from './components/post/post.component';
import { RandomQuoteComponent } from './components/random-quote/random-quote.component';


const routes: Routes = [

  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },

  { path: 'tasks', component: TasksComponent },
  { path: 'private-tasks', component: PrivateTasksComponent },






  { path: 'nosotros', component: NosotrosComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'buscar', component: BuscarComponent },
  { path: 'descripcion', component: DescripcionComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    TasksComponent,
    PrivateTasksComponent,
    EncabezadoComponent,
    BuscarComponent,
    DescripcionComponent,
    EventosComponent,
    FooterComponent,
    NosotrosComponent,
    AllPostsComponent,

    FourZeroFourComponent,
    LandingPageComponent,
    NavComponent,
    PostComponent,
    RandomQuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    [RouterModule.forRoot(routes)],
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
