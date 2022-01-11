export class ComboChartConfig {
  elementId: string;
  title: string;
  data: any[];

  constructor(elementId: string, title: string, data: any[]) {
    this.elementId = elementId;
    this.title = title;
    this.data = data;
  }
}
