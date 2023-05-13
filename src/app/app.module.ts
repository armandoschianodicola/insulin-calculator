import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TableCalculatorComponent } from './components/atoms/table-calculator/table-calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputGroupComponent } from './components/atoms/input-group/input-group.component';
import { SelectFoodComponent } from './components/atoms/select-food/select-food.component';

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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
