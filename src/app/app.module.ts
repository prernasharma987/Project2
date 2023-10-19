import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
// import { CoursesRegistrationGalleryComponent } from './courses-registration-gallery/courses-registration-gallery.component';
import { CoursesComponent } from './courses/courses.component';
import { RegistrationComponent } from './registration/registration.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { MeanComponent } from './mean/mean.component';
import { MernComponent } from './mern/mern.component';
import { JavaComponent } from './java/java.component';
import { ReactiveFormsModule } from '@angular/forms'
@NgModule({
declarations: [
AppComponent,
AboutComponent,
ServicesComponent,
HomeComponentComponent,
HeaderComponent,
FooterComponent,
// CoursesRegistrationGalleryComponent,
CoursesComponent,
RegistrationComponent,
GalleryComponent,
NavComponent,
ContactComponent,
MeanComponent,
MernComponent,
JavaComponent
],
imports: [
BrowserModule,ReactiveFormsModule,
routes
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }