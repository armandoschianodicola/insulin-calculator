import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TableCalculatorComponent } from './components/organisms/table-calculator/table-calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputGroupComponent } from './components/organisms/input-group/input-group.component';
import { SelectFoodComponent } from './components/atoms/select-food/select-food.component';
import { ManualFoodOption } from './entities/option';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PopupComponent } from './components/organisms/popup/popup.component';
import { EditFoodComponent } from './components/atoms/edit-food/edit-food.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableCalculatorComponent,
    InputGroupComponent,
    SelectFoodComponent,
    PopupComponent,
    EditFoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [ManualFoodOption],
  bootstrap: [AppComponent]
})
export class AppModule { }
