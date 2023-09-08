import { Component } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import {  MatTreeNestedDataSource } from '@angular/material/tree';

interface FoodNode {
  name: string;
  desc?: string;
  id?:number;
  selected?: boolean;
  indeterminate?:boolean;
  parent?:FoodNode
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: "Fruit",
    desc:"Test Fruit",
    children: [
      { name: "Apple", id: 1 },
      { name: "Banana", id: 2 },
      { name: "Fruit loops", id: 3 }
    ]
  },
  {
    name: "Vegetables",
    desc:"Test Fruit",
    children: [
      {
        name: "Green",
        id:1,
        children: [
          { name: "Broccoli", id: 4 ,
            children: [
              { name: "Broccoli", id: 4 },
              { name: "Brussel sprouts", id: 5 }
            ]
          },
          { name: "Brussel sprouts", id: 5 }
        ]
      },
      {
        name: "Orange",
        children: [{ name: "Pumpkins", id: 6 }, { name: "Carrots", id: 7 }]
      }
    ]
  }
];



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  setParent(data:any, parent:any) {
    data.parent = parent;
    if (data.children) {
      data.children.forEach((x:any) => {
        this.setParent(x, data);
      });
    }
  }

  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
    Object.keys(this.dataSource.data).forEach((x:any) => {
      this.setParent(this.dataSource.data[x], null);
    });
  }

  hasChild = (_: number, node: FoodNode) =>
    !!node.children && node.children.length > 0;

  checkAllParents(node:any) {
    if (node.parent) {
      const descendants = this.treeControl.getDescendants(node.parent);
      node.parent.selected=descendants.every(child => child.selected);
      node.parent.indeterminate=descendants.some(child => child.selected);
      this.checkAllParents(node.parent);
    }
  }

  todoItemSelectionToggle(checked:any, node:any) {
    node.selected = checked;
    if (node.children) {
      node.children.forEach((x:any) => {
        this.todoItemSelectionToggle(checked, x);
      });
    }
    this.checkAllParents(node);
  }

  addSubTask(node:any) {
    console.log(node)
  }
}