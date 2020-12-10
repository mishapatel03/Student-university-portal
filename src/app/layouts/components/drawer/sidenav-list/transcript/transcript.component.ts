import { LoginUserService } from './../../../../../login/login-user.service';
import { ApplicationStatus } from 'src/app/typings';
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
  public isApplyNew = true;

  public semesters = [1,2,3,4,5,6,7,8];

  public applicationStatus: ApplicationStatus;
  public isStatusPresent: boolean = false;

  public newTranscriptForm: FormGroup;
  public enrollmentNoFC: FormControl;
  public degreeLengthFC: FormControl;
  public semesterFC: FormControl;
  public numberOfCopiesFC: FormControl;

  public checkStatusForm: FormGroup;
  public applicationNoFC: FormControl;

  private enrollmentNo: string;

  constructor(
    private transcriptService: TranscriptApiService,
    private loginService: LoginUserService) { }

  public ngOnInit(): void {
    this.enrollmentNo = this.loginService.userDetails.enrollment;

    this.enrollmentNoFC = new FormControl(this.enrollmentNo);
    this.degreeLengthFC = new FormControl('partial');
    this.semesterFC = new FormControl(1);
    this.numberOfCopiesFC = new FormControl(undefined);

    this.enrollmentNoFC.disable();

    this.newTranscriptForm = new FormGroup({
      enrollmentNo: this.enrollmentNoFC,
      degreeLength: this.degreeLengthFC,
      semesters: this.semesterFC,
      numberOfCopies: this.numberOfCopiesFC
    });

    this.applicationNoFC = new FormControl(undefined);
    this.checkStatusForm = new FormGroup({
      applicationNo: this.applicationNoFC
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
    this.isApplyNew = this.selectedChoice === this.applyNew;
  }

  public submitApplication(): void {
    const body = {
      ...this.newTranscriptForm.value,
      semesters: this.semesterFC.value,
      enrollmentNo: this.enrollmentNo
    };

    this.transcriptService.submitNewTranscript(body).subscribe(result => {
      console.log(result);
      this.updateApplicationStatus(result.result);
      this.updateUserChoice(TRANSCRIPT_USER_CHOICE.CHECK_STATUS);
    });
  }

  public checkStatusSubmit(): void {
    this.resetApplicationStatus();

    this.transcriptService.checkTranscriptStatus(this.applicationNoFC.value).subscribe(result => {
      this.updateApplicationStatus(this.mapAppStatus(result.result));
      this.updateUserChoice(TRANSCRIPT_USER_CHOICE.CHECK_STATUS);
    });
  }

  public resetApplicationStatus(): void {
    this.updateApplicationStatus(undefined);
  }

  public updateApplicationStatus(data: any): void {
    if (!Utils.isNullOrUndefined(data)) {
      this.applicationStatus = data;
      console.log(this.applicationStatus);
      this.isStatusPresent = true;
    } else {
      this.applicationStatus = undefined;
      this.isStatusPresent = false;
    }
  }

  public reset(): void {
    this.checkStatusForm.reset();
    this.newTranscriptForm.reset();
    this.resetApplicationStatus();
    this.enrollmentNoFC = new FormControl(this.enrollmentNo);
    this.enrollmentNoFC.disable();
  }

  public mapAppStatus(statusData: any): ApplicationStatus {
    const submittedDate = new Date(Number(statusData.request_date) * 1000);
    const displayDate = submittedDate.toLocaleDateString();
    
    const appStatus: ApplicationStatus = {
      applicationNumber: statusData.application_no,
      degreeLength: statusData.degree_length,
      enrollmentNo: statusData.enrollment_no,
      numberOfCopies: statusData.number_of_copies,
      date: submittedDate.toString(),
      displayDate: displayDate,
      semesters: statusData.semesters,
      status: statusData.status
    };

    return appStatus;
  }
}
