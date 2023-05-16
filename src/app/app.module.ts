import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TableCalculatorComponent } from './components/atoms/table-calculator/table-calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputGroupComponent } from './components/atoms/input-group/input-group.component';
import { SelectFoodComponent } from './components/atoms/select-food/select-food.component';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { environment } from '../env/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableCalculatorComponent,
    InputGroupComponent,
    SelectFoodComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.dbConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
