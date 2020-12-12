import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-geo-upload',
  templateUrl: './geo-upload.component.html',
  styleUrls: ['./geo-upload.component.scss']
})
export class GeoUploadComponent implements OnInit {
  @Output() public uploadedFile: EventEmitter<File> = new EventEmitter<File>();

  public files: NgxFileDropEntry[] = [];
  constructor() { }

  ngOnInit() {
  }

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          // Here you can access the real file
          console.log(droppedFile.relativePath, file);
          this.uploadedFile.emit(file);

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event) {
    console.log(event);
  }

  public fileLeave(event) {
    console.log(event);
  }
}
