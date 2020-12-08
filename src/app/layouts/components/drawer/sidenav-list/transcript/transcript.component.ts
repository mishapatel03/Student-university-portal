import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-transcript',
  templateUrl: './transcript.component.html',
  styleUrls: ['./transcript.component.css']
})
export class TranscriptComponent implements OnInit {

  public applyNew = TRANSCRIPT_USER_CHOICE.APPLY_NEW;
  public checkStatus = TRANSCRIPT_USER_CHOICE.CHECK_STATUS;
  public selectedChoice: TRANSCRIPT_USER_CHOICE = TRANSCRIPT_USER_CHOICE.APPLY_NEW;

  public newTranscriptForm: FormGroup;
  public enrollmentNoFC: FormControl;
  public degreeLengthFC: FormControl;
  public semesterFC: FormControl;
  public numberOfCopiesFC: FormControl;

  constructor() { }

  public ngOnInit(): void {
    this.enrollmentNoFC = new FormControl(undefined);
    this.degreeLengthFC = new FormControl(undefined);
    this.semesterFC = new FormControl(undefined);
    this.numberOfCopiesFC = new FormControl(undefined);

    this.newTranscriptForm = new FormGroup({
      enrollmentNo: this.enrollmentNoFC,
      degreeLength: this.degreeLengthFC,
      semesters: this.semesterFC,
      numberOfCopies: this.numberOfCopiesFC
    });
  }

  public updateUserChoice(choice: TRANSCRIPT_USER_CHOICE): void {
    this.selectedChoice = choice;
  }
}

export enum TRANSCRIPT_USER_CHOICE {
  APPLY_NEW = 'APPLY_NEW',
  CHECK_STATUS = 'CHECK_STATUS'
}

export const DEGREE_FULL_LENGTH = {
  BACHELOR_ENGINEERING: 8
};
