import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Edacy } from './edacy';
import { EdacyService } from './edacy.service';

export enum SaveMode {
  None,
  New,
  Edit
}

@Component({
  selector: 'app-edacy',
  templateUrl: './edacy.component.html',
  styleUrls: ['./edacy.component.css']
})
export class EdacyComponent implements OnInit {
  formGroup: FormGroup;
  edacys: Edacy[];
  saveMode: SaveMode = SaveMode.None;
  headerText: string;

  constructor(private _edacyService: EdacyService, private _formBuilder: FormBuilder) {
    console.log('begin test');
    this.formGroup = _formBuilder.group({
      'id': '',
      'cohorte': '',
      'date': '',
      'etat': '',
      'description': ''});
  }

  ngOnInit() {
    console.log('--->>>> get edacy');
    this.getEdacys();
  }

  getEdacys() {
    console.log('----> get edacy 2');
    this.edacys = this._edacyService.getEdacysFromData();
  }

  saveEdacy(edacy: Edacy) {
    if (edacy.id) {
      this._edacyService.updateEdacy(edacy);
    } else {
      this._edacyService.addEdacy(edacy);
    }
    this.saveMode = SaveMode.None;
  }

  removeEdacy(edacy: Edacy) {
    this._edacyService.deleteEdacy(edacy);
  }

  cancelEditEdacy() {
    this.formGroup.reset();
    this.saveMode = SaveMode.None;
  }

  showEditForm(edacy: Edacy) {
    if (!edacy) {
      return;
    }
    this.saveMode = SaveMode.Edit;
    this.headerText = 'Edit cohorte';
    const editedEdacy = Object.assign({}, edacy, { date: this.applyLocale(edacy.date) });
    this.formGroup.setValue(editedEdacy);
  }

  showNewForm() {
    console.log('new cohorte');
    this.formGroup.reset();
    this.saveMode = SaveMode.New;
    this.headerText = 'Nouveau cohorte';
  }

  showForm() {
    return this.saveMode !== SaveMode.None;
  }

  applyLocale(due) {
    return new DatePipe(navigator.language).transform(due, 'y-MM-dd');
  }
}
