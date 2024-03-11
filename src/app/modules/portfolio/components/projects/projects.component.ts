import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelCalss.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog)

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/vfull.png',
      alt: '',
      title: 'Vida FullStack',
      width: '100px',
      heigth: '51px',
      description: '<p>O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. </p>',
      links: [
        {
          name: 'Conheça o blog',
          href: '#'
        }
      ]
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt: '',
      title: 'Vida FullStack',
      width: '100px',
      heigth: '51px',
      description: '<p>O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. </p>',
      links: [
        {
          name: 'Conheça o blog',
          href: '#'
        }
      ]
    }
  ])
}
