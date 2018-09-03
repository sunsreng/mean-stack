import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [
    // {title: 'First Post', content: 'This is the first post.'},
    // {title: 'Second Post', content: 'This is the second post.'},
    // {title: 'Third Post', content: 'This is the third post.'}
  ];
  private postsSub: Subscription;

  constructor(public postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.postService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
  }
}
