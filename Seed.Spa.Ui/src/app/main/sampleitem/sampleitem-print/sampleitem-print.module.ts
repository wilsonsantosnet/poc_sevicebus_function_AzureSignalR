import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SampleItemPrintComponent } from './sampleitem-print.component';
import { SampleItemPrintRoutingModule } from './sampleitem-print.routing.module';

import { SampleItemService } from '../sampleitem.service';
import { ApiService } from '../../../common/services/api.service';
import { SampleItemServiceFields } from '../sampleitem.service.fields';

import { SampleItemContainerDetailsComponent } from '../sampleitem-container-details/sampleitem-container-details.component';
import { SampleItemFieldDetailsComponent } from '../sampleitem-field-details/sampleitem-field-details.component';
import { CommonSharedModule } from '../../../common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
        CommonSharedModule,
        SampleItemPrintRoutingModule,
        FormsModule
    ],
    declarations: [
        SampleItemPrintComponent,
        SampleItemContainerDetailsComponent,
        SampleItemFieldDetailsComponent
    ],
    providers: [SampleItemService, ApiService, SampleItemServiceFields],
    exports: [SampleItemContainerDetailsComponent,SampleItemFieldDetailsComponent]
})
export class SampleItemPrintModule {

}
