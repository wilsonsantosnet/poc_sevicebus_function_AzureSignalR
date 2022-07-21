import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { SampleItemComponent } from './sampleitem.component';

import { SampleItemContainerFilterComponent } from './sampleitem-container-filter/sampleitem-container-filter.component';
import { SampleItemFieldFilterComponent } from './sampleitem-field-filter/sampleitem-field-filter.component';

import { SampleItemEditComponent } from './sampleitem-edit/sampleitem-edit.component';
import { SampleItemCreateComponent } from './sampleitem-create/sampleitem-create.component';
import { SampleItemDetailsComponent } from './sampleitem-details/sampleitem-details.component';

import { SampleItemFieldCreateComponent } from './sampleitem-field-create/sampleitem-field-create.component';
import { SampleItemFieldEditComponent } from './sampleitem-field-edit/sampleitem-field-edit.component';
import { SampleItemFieldGridComponent } from './sampleitem-field-grid/sampleitem-field-grid.component';

import { SampleItemContainerCreateComponent } from './sampleitem-container-create/sampleitem-container-create.component';
import { SampleItemContainerEditComponent } from './sampleitem-container-edit/sampleitem-container-edit.component';

import { SampleItemPrintModule } from './sampleitem-print/sampleitem-print.module';
import { SampleItemRoutingModule } from './sampleitem.routing.module';

import { SampleItemService } from './sampleitem.service';
import { SampleItemServiceFields } from './sampleitem.service.fields';

import { ApiService } from '../../common/services/api.service';
import { CommonSharedModule } from '../../common/common-shared.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule.forRoot(),
        CommonSharedModule,
        SampleItemRoutingModule,
        SampleItemPrintModule,

    ],
    declarations: [
        SampleItemComponent,
        SampleItemContainerFilterComponent,
        SampleItemFieldFilterComponent,
        SampleItemEditComponent,
        SampleItemCreateComponent,
        SampleItemDetailsComponent,
        SampleItemFieldCreateComponent,
        SampleItemFieldEditComponent,
        SampleItemContainerCreateComponent,
        SampleItemContainerEditComponent,
        SampleItemFieldGridComponent
    ],
    providers: [SampleItemService,SampleItemServiceFields, ApiService],
	exports: [SampleItemComponent, SampleItemEditComponent, SampleItemCreateComponent]
})
export class SampleItemModule {


}
