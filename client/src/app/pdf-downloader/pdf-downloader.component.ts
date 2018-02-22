import { Component, Input } from '@angular/core';
import { BrowserXhr } from '@angular/http';
import { environment } from '../../environments/environment';
//import * as fileSaver from 'file-saver';

const BASEURL = environment.BASEURL;


    @Component({
      selector: 'app-pdf-downloader',
      template: `
        <button
           class="btn btn-secondary-outline btn-sm "
          (click)="download()">
            <span class="fa fa-download" *ngIf="!pending"></span>
            <span class="fa fa-refresh fa-spin" *ngIf="pending"></span>
        </button>
        `
   })

   export class PdfDownloaderComponent  {

       @Input() number: any;

       public pending = false;

       constructor() {}

       public download() {

        // Xhr creates new context so we need to create reference to this
        const self = this;

        // Status flag used in the template.
        this.pending = true;

        // Create the Xhr request object
        const xhr = new XMLHttpRequest();
        const url =  `/api/pdf/ticket/${this.number}?lang=en`;
        // const url =  `${BASEURL}/api/tickets`;
        xhr.open('GET', url, true);
        xhr.responseType = 'blob';

        // Xhr callback when we get a result back
        // We are not using arrow function because we need the 'this' context
        xhr.onreadystatechange = function() {

            // We use setTimeout to trigger change detection in Zones
            setTimeout( () => { self.pending = false; }, 0);

            // If we get an HTTP status OK (200), save the file using fileSaver
            if (xhr.readyState === 4 && xhr.status === 200) {
                const blob = new Blob([this.response], {type: 'application/pdf'});
              //  fileSaver.saveAs(blob, 'ticket.pdf');
            }
        };

        // Start the Ajax request
        xhr.send();
    }
}