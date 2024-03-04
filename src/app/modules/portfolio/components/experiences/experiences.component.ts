import { Component, signal } from '@angular/core';
import { IExperience } from '../../interface/IExperience.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperience[]>([
    {
      summary: {
        strong: 'Lorem ipsum 1',
        p: 'Example | Jan 2020 - Dez 2023',
      },
      text: `
        <p>
          <h3>Utilizando o <span>inner html</span> consigo adicionar o texto com as tags por aqui</h3>
          
          O <strong>Lorem Ipsum</strong> 
          é um texto modelo da indústria tipográfica e de impressão. 
          O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, 
          quando uma misturou os caracteres de um texto para criar um espécime de livro. 
          Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, 
          mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, 
          que continham passagens com Lorem Ipsum, 
          e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.
        </p>
      `
    },
    {
      summary: {
        strong: 'Lorem ipsum 2',
        p: 'Example | Jan 2020 - Dez 2023',
      },
      text: `
        <p>
          <h3>Utilizando o <span>inner html</span> consigo adicionar o texto com as tags por aqui</h3>
          
          O <strong>Lorem Ipsum</strong> 
          é um texto modelo da indústria tipográfica e de impressão. 
          O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, 
          quando uma misturou os caracteres de um texto para criar um espécime de livro. 
          Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, 
          mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, 
          que continham passagens com Lorem Ipsum, 
          e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.
        </p>
      `
    },
    {
      summary: {
        strong: 'Lorem ipsum 3',
        p: 'Example | Jan 2020 - Dez 2023',
      },
      text: `
        <p>
          <h3>Utilizando o <span>inner html</span> consigo adicionar o texto com as tags por aqui</h3>
          
          O <strong>Lorem Ipsum</strong> 
          é um texto modelo da indústria tipográfica e de impressão. 
          O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, 
          quando uma misturou os caracteres de um texto para criar um espécime de livro. 
          Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, 
          mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, 
          que continham passagens com Lorem Ipsum, 
          e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.
        </p>
      `
    }
  ]);
}
