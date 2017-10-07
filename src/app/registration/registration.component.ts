import { Component, OnInit } from '@angular/core';
import { FileHolder } from "angular2-image-upload";


import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  //form
  fStudentData: FormGroup;

  //display record
  studentAllRecord: string[];

  //Image File Name
  ImageName: string;
  ImagePath: string;

  imageURL: string;



  //Validation
  ProfileImage = ['', [Validators.required]];
  Email = ['', [Validators.required, Validators.email]];
  BirthDate = ['', Validators.required];

  constructor(private DataService: DataService, private formBuilder: FormBuilder) {
  }


  ngOnInit() {
    //TODO: Add Student Form
    this.fStudentData = this.formBuilder.group({

      ProfileImage: this.ProfileImage,
      Email: this.Email,
      BirthDate: this.BirthDate

    });
  }


  private fileCounter = 0;

  // ImageUpload=------------------------------------------------>
  imageFinishedUploading(file: FileHolder) {
    console.log(JSON.stringify(file.serverResponse));
  }

  onRemoved(file: FileHolder) {
    // do some stuff with the removed file.
    console.log('Deleted');
  }

  onUploadStateChanged(state: boolean) {
    console.log(JSON.stringify(state));
  }

  onUploadFinished(file: FileHolder) {
    console.log('Finished uploading.');
    this.ImageName = file.file.name;
    this.ImagePath = file.src;

    //display image
    this.imageURL = file.src;

    console.log(this.ImageName);

    console.log(this.ImagePath);
  }
  // ImageUpload=------------------------------------------------>

  onAddDetails(fData: any) {

    // fData.value.ProfileImage = this.ImageName;
    fData.value.ProfileImage = this.ImagePath;

    console.log(fData.value);
    console.log(fData.value.ProfileImage);

    this.DataService.postStudent(fData.value).subscribe((posts) => {
      console.log(posts);

      if (posts) {
        // window.location.reload();
        this.ngOnInit();

        this.imageURL = '';
      }


    });

  }



  getImage() {
    this.DataService.getStudentById(4).subscribe((post) => {
      console.log(post);


      this.imageURL = post.profileImage;
      console.log(this.imageURL);


    });
  }

  getAllData() {
    this.DataService.getAllStudents().subscribe((post) => {
      this.studentAllRecord = post;
      console.log(this.studentAllRecord);

    });
  }


}
