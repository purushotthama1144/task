import { Component, ViewChild , OnInit , AfterViewInit} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { tableData } from './table-data';

@Component({
  selector: 'app-popup-table',
  templateUrl: './popup-table.component.html',
  styleUrls: ['./popup-table.component.css']
})
export class PopupTableComponent implements OnInit , AfterViewInit {
  displayedColumns: string[] = [
    'number',
    'name',
    'symbol',
    'sector',
    'closeprice',
    'gain',
    'healthscore',
  ];

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.refreshDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  refreshDataSource(){
    this.dataSource = new MatTableDataSource(tableData);
    console.log(tableData)
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
}
