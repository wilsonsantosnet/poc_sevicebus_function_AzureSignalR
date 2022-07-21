import { Component, OnInit, Input, ChangeDetectorRef, OnDestroy, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from '../../../common/model/viewmodel';
import { SampleItemService } from '../sampleitem.service';
import { LocationHistoryService } from '../../../common/services/location.history';
import { ComponentBase } from "../../../common/components/component.base";
import { GlobalService, NotificationParameters } from '../../../global.service';

@Component({
    selector: 'app-sampleitem-create',
    templateUrl: './sampleitem-create.component.html',
    styleUrls: ['./sampleitem-create.component.css'],
})
export class SampleItemCreateComponent extends ComponentBase implements OnInit, OnDestroy {

    @Input() vm: ViewModel<any>;
    @Input() parentIdValue: any;
    @Input() parentIdField: string;
    @Input() isParent: boolean;
    @Output() saveEnd = new EventEmitter<any>();
    @Output() backEnd = new EventEmitter<any>();

 
    constructor(private sampleItemService: SampleItemService, private route: ActivatedRoute, private router: Router, private ref: ChangeDetectorRef) {
        super();
        this.vm = null;
    }

    ngOnInit() {
        this.vm = this.sampleItemService.initVM();
        this.vm.actionDescription = "Cadastrar";

        this.sampleItemService.detectChanges(this.ref);  
        this.updateCulture();
    }
    
    updateCulture(culture: string = null) {
        this.sampleItemService.updateCulture(culture).then((infos: any) => {
            this.vm.infos = infos;
            this.vm.grid = this.sampleItemService.getInfoGrid(infos);
        });
    }

    onSave(model : any) {

            this.sampleItemService.save(model).subscribe((result) => {
            this.vm.model.sampleItemId = result.data.sampleItemId;
            this.saveEnd.emit();
            if (!this.vm.manterTelaAberta)
                this.router.navigate([LocationHistoryService.getLastNavigation(this.vm.key)]);
        });
    }

    onBack(e: any) {
        e.preventDefault();
        this.backEnd.emit();
    }

    ngOnDestroy() {
        this.sampleItemService.detectChangesStop();
    }
}
