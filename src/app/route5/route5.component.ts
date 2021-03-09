import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { TableData } from '../model/tableData';
import { Route5Service } from '../services/route5.service';

@Component({
  selector: 'app-route5',
  templateUrl: './route5.component.html',
  styleUrls: ['./route5.component.scss']
})
export class Route5Component implements OnInit {

  headings: string[] = [];
  tableData: TableData[] = [];
  sortedData: TableData[] = [];

  constructor(private route5Service: Route5Service) { }

  ngOnInit(): void {
    this.getTableData();
  }

  getTableData(){
    this.route5Service.getTableData().subscribe(
      res => {
        if(res?.length > 0){
          const obj = res[0];
          this.headings = Object.keys(obj);
          this.tableData = res;
          this.sortedData = res.slice();
        }
      },
      error => {
        console.log(error);
      })
  }

  sortData(sort: Sort) {
    const data = this.tableData.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'class': return compare(a.class, b.class, isAsc);
        case 'section': return compare(a.section, b.section, isAsc);
        case 'sub1': return compare(a.sub1, b.sub1, isAsc);
        case 'sub2': return compare(a.sub2, b.sub2, isAsc);
        case 'sub3': return compare(a.sub3, b.sub3, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


