import { Component, OnInit, Input, ChangeDetectorRef, ViewChild } from '@angular/core';
import { SampleService } from '../sample.service';

import { ViewModel } from '../../../common/model/viewmodel';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-sample-field-edit',
    templateUrl: './sample-field-edit.component.html',
    styleUrls: ['./sample-field-edit.component.css']
})
export class SampleFieldEditComponent implements OnInit {

    @Input() vm: ViewModel<any>


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
