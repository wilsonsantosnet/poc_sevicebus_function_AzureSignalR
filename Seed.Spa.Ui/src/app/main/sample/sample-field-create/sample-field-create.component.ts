import { Component, OnInit, Input, ChangeDetectorRef, ViewChild } from '@angular/core';
import { SampleService } from '../sample.service';

import { ViewModel } from '../../../common/model/viewmodel';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { GlobalService, NotificationParameters } from '../../../global.service';

@Component({
    selector: 'app-sample-field-create',
    templateUrl: './sample-field-create.component.html',
    styleUrls: ['./sample-field-create.component.css']
})
export class SampleFieldCreateComponent implements OnInit {

   @Input() vm: ViewModel<any>;

   constructor(private sampleService: SampleService) { }

   ngOnInit() {}


    onSaveEnd(model: any) {
       
    }

    onBackEnd(model: any) {
       
    }

   
    public onEditorKeyupdescricao(model : any) {

        this.vm.model.descricao = model;
    }

}
