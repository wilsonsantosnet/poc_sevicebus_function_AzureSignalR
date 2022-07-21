import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SampleItemPrintComponent } from './sampleitem-print.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: SampleItemPrintComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class  SampleItemPrintRoutingModule {

}