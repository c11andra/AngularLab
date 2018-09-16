import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts:Object
  constructor(data:DataService) { 
    data.getPosts().subscribe(
      p=>this.posts = p
    );
   }

  ngOnInit() {
  }
 

}
