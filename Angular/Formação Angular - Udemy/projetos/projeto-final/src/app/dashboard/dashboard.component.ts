import { Component, OnInit } from '@angular/core';
//import { Observable } from 'rxjs/Observable';

import { DadosService } from './dados.service';

declare var google: any;//declamamos a variável google no escopo global de forma genérica

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private dados: any; //variável para guardar os dados localmente

  constructor(private dadosService: DadosService) { }

  //popular os dados que chegam pelo observable
  ngOnInit() {
    this.dadosService.obterDados().subscribe(
      dados => {
        this.dados = dados;
        this.init();
      }
    );
  }

  /**
   * Inicializa a API de gráficos com delay de 1 segundo,
   * o que permite a integração da API com o Angular.
   * @return void
   */
  init(): void {
    if(typeof(google) !== 'undefined'){//valida se a variável google foi criada corretamente
      google.charts.load('current', {'packages':['corechart']});
      setTimeout(() => {
        google.charts.setOnLoadCallback(this.exibirGraficos());
      }, 1000);//dar tempo para a API do google encontrar os dados para renderizar os gráficos
    }
  }

  /**
   * Método chamado assim que a API de gráficos é inicializada.
   * Responsável por chamar os métodos geradores dos gráficos.
   * @return void
   */
  exibirGraficos(): void {
    this.exibirPieChart();
    this.exibirAreaChart();
    this.exibirBarChart();
    this.exibirLineChart();
    this.exibirColumnChart();
    this.exibirDonutChart();
  }

  /**
   * Exibe o gráfico Pie Chart.
   * @return void
   */
  exibirPieChart(): void {
    const el = document.getElementById('pie_chart');//referência a div de exibição

    const chart = new google.visualization.PieChart(el);//criar uma instância do gráfico passando a constante de referência da div

    chart.draw(this.obterDataTable(), this.obterOpcoes());//popular o gráfico
  }

    /**
   * Exibe o gráfico Area Chart.
   * @return void
   */
  exibirAreaChart(): void {
    const el = document.getElementById('area_chart');
    const chart = new google.visualization.AreaChart(el);

    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }

    /**
   * Exibe o gráfico Bar Chart.
   * @return void
   */
  exibirBarChart(): void {
    const el = document.getElementById('bar_chart');
    const chart = new google.visualization.BarChart(el);

    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }

  /**
   * Exibe o gráfico Line Chart.
   * @return void
   */
  exibirLineChart(): void {
    const el = document.getElementById('line_chart');
    const chart = new google.visualization.LineChart(el);

    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }

    /**
   * Exibe o gráfico Column Chart.
   * @return void
   */
  exibirColumnChart(): void {
    const el = document.getElementById('column_chart');
    const chart = new google.visualization.ColumnChart(el);

    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }

  /**
   * Exibe o gráfico Donut Chart.
   * @return void
   */
  exibirDonutChart():void {
    const el = document.getElementById('donut_chart');
    const chart = new google.visualization.PieChart(el);
    const opcoes = this.obterOpcoes();

    opcoes['pieHole'] = 0.4;
    chart.draw(this.obterDataTable(), opcoes);
  }

  /**
   * Cria e retorna o objeto DataTable da API de gráficos, responsável por definir os dados do gráfico
   */
  obterDataTable(): any {
    const data = new google.visualization.DataTable();

    data.addColumn('string', 'Mês');
    data.addColumn('number', 'Quantidade');
    data.addRows(this.dados);

    return data;
  }

  /**
   * Retorna as opções do gráfico, que incluem o título e tamanho do gráfico.
   * @return any
   */
  obterOpcoes(): any {
    return {
      'title': 'Quantidade de cadastros primeiro semestre',
      'width': 400,
      'height': 300
    };
  }

}
