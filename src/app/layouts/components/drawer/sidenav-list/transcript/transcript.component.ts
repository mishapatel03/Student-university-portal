import { Utils } from 'src/app/services/utils.service';
import { TranscriptApiService } from 'src/app/services/transcript-api.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DEGREE_FULL_LENGTH, TRANSCRIPT_USER_CHOICE } from 'src/app/constants';

@Component({
  selector: 'app-transcript',
  templateUrl: './transcript.component.html',
  styleUrls: ['./transcript.component.css']
})
export class TranscriptComponent implements OnInit {

  public applyNew = TRANSCRIPT_USER_CHOICE.APPLY_NEW;
  public checkStatus = TRANSCRIPT_USER_CHOICE.CHECK_STATUS;
  public selectedChoice: TRANSCRIPT_USER_CHOICE = TRANSCRIPT_USER_CHOICE.APPLY_NEW;

  public semesters = [1,2,3,4,5,6,7,8];

  public newTranscriptForm: FormGroup;
  public enrollmentNoFC: FormControl;
  public degreeLengthFC: FormControl;
  public semesterFC: FormControl;
  public numberOfCopiesFC: FormControl;

  constructor(private transcriptService: TranscriptApiService) { }

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

    this.degreeLengthFC.valueChanges.subscribe(value => {
      if (!Utils.isNullOrUndefined(value) && value === 'full') {
        this.semesterFC.setValue(DEGREE_FULL_LENGTH.BACHELOR_ENGINEERING);
        this.semesterFC.disable();
      } else {
        this.semesterFC.enable();
      }
    });
  }

  public updateUserChoice(choice: TRANSCRIPT_USER_CHOICE): void {
    this.selectedChoice = choice;
  }

  public submitApplication(): void {
    const body = {
      ...this.newTranscriptForm.value
    };

    this.transcriptService.submitNewTranscript(body).subscribe(result => {
      console.log(result);
    });
  }
}
