import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
} from '@angular/core';
import { CallbackTemplateDirective } from '../callback-template.directive';

@Component({
  selector: 'app-file-select',
  templateUrl: './file-select.component.html',
  styleUrls: ['./file-select.component.scss'],
})
export class FileSelectComponent implements OnInit {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  @ContentChild(CallbackTemplateDirective) callback!: CallbackTemplateDirective;
  @Input() accept!: string;
  @Input() multiple!: boolean;
  @Output() file = new EventEmitter();
  templateContext = {
    $implicit: {
      // this has to be a lambda or else we get `this` problems
      openFileSelectDialog: () => this.openFileSelectDialog(),
    },
  };

  openFileSelectDialog() {
    this.fileInput.nativeElement.click();
  }

  onFileSelectionChanged(event: Event): void {
    const selectedFiles = (event.target as HTMLInputElement).files;
    this.file.emit(selectedFiles);
  }

  constructor() {}

  ngOnInit(): void {}
}
