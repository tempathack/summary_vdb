import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  stockSymbol = 'AAPL';
  stockData: any[] = [];

  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.getStockData();
  }

  getStockData() {
    this.stockService.getStockData(this.stockSymbol).subscribe(
      (data) => {
        this.stockData = data;
      },
      (error) => {
        console.error('Error fetching stock data:', error);
      }
    );
  }
}
