import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SampleItemComponent } from './sampleitem.component';
import { SampleItemEditComponent } from './sampleitem-edit/sampleitem-edit.component';
import { SampleItemDetailsComponent } from './sampleitem-details/sampleitem-details.component';
import { SampleItemCreateComponent } from './sampleitem-create/sampleitem-create.component';
import { GlobalService } from '../../global.service';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', data : { title : "SampleItem" }, component: SampleItemComponent },
            { path: 'edit/:id', data : { title : "SampleItem" } ,component: SampleItemEditComponent },
            { path: 'details/:id', data : { title : "SampleItem" }, component: SampleItemDetailsComponent },
            { path: 'create', data : { title : "SampleItem" }, component: SampleItemCreateComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class SampleItemRoutingModule {
}