import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { RippleModule } from 'primeng/ripple';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { StyleClassModule } from 'primeng/styleclass';
import { ToastModule } from 'primeng/toast';
import { FileUploadModule } from 'primeng/fileupload';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ChartModule } from 'primeng/chart';
import { AccordionModule } from 'primeng/accordion';
import { ConfirmationService } from 'primeng/api';
import { InputMaskModule } from 'primeng/inputmask';
import { TableModule } from 'primeng/table';
import { ChipModule } from 'primeng/chip';
import { ProgressBarModule } from 'primeng/progressbar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BadgeModule } from 'primeng/badge';
import { PaginatorModule } from 'primeng/paginator';
import { CardModule } from 'primeng/card';
import { StepsModule } from 'primeng/steps';
import { OverlayPanelModule } from 'primeng/overlaypanel';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenuModule,
    InputTextModule,
    InputTextareaModule,
    RadioButtonModule,
    RippleModule,
    SidebarModule,
    ButtonModule,
    StyleClassModule,
    ToastModule,
    CheckboxModule,
    DialogModule,
    ConfirmDialogModule,
    ProgressSpinnerModule,
    InputSwitchModule,
    DropdownModule,
    RadioButtonModule,
    FileUploadModule,
    CalendarModule,
    ChartModule,
    SelectButtonModule,
    AccordionModule,
    InputMaskModule,
    TableModule,
    ChipModule,
    ProgressBarModule,
    AutoCompleteModule,
    BadgeModule,
    PaginatorModule,
    CardModule,
    StepsModule,
    OverlayPanelModule

  ],
  exports: [
    CommonModule,
    MenuModule,
    InputTextModule,
    InputTextareaModule,
    RadioButtonModule,
    RippleModule,
    SidebarModule,
    ButtonModule,
    StyleClassModule,
    ToastModule,
    CheckboxModule,
    DialogModule,
    ConfirmDialogModule,
    ProgressSpinnerModule,
    InputSwitchModule,
    DropdownModule,
    RadioButtonModule,
    FileUploadModule,
    CalendarModule,
    ChartModule,
    SelectButtonModule,
    AccordionModule,
    InputMaskModule,
    TableModule,
    ChipModule,
    ProgressBarModule,
    AutoCompleteModule,
    BadgeModule,
    PaginatorModule,
    CardModule,
    StepsModule,
    OverlayPanelModule
  ],
  providers: [ConfirmationService]
})
export class SharedModule { }
