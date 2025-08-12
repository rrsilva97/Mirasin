import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  popupAberto: string | null = null;

  readonly emailMiraSin = 'geral@mirassin.pt';

  readonly servicos: readonly string[] = [
    'Contabilidade',
    'Auditoria',
    'Fiscalidade',
    'Salários & Segurança Social',
    'Gestão de Projetos',
    'Gestão de Condomínios'
  ];

  abrirPopup(nome: string): void {
    this.popupAberto = nome;
  }

  fecharPopup(): void {
    this.popupAberto = null;
  }

  popupEstaAberto(nome: string): boolean {
    return this.popupAberto === nome;
  }

  enviarAmigo(): void {
    alert('Esta funcionalidade será adicionada em breve!');
  }
} 
