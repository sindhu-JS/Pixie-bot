import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ServiceComponent implements OnInit {
  // items: MenuItem[] = [];
  constructor() {}

  ngOnInit(): void {
    // this.items = [
    //   {
    //     label: 'File',
    //     items: [
    //       {
    //         label: 'New',
    //         icon: 'pi pi-fw pi-plus',
    //         items: [{ label: 'Project' }, { label: 'Other' }],
    //       },
    //       { label: 'Open' },
    //       { label: 'Quit' },
    //     ],
    //   },
    //   {
    //     label: 'Edit',
    //     icon: 'pi pi-fw pi-pencil',
    //     items: [
    //       { label: 'Delete', icon: 'pi pi-fw pi-trash' },
    //       { label: 'Refresh', icon: 'pi pi-fw pi-refresh' },
    //     ],
    //   },
    // ];
  }
}
