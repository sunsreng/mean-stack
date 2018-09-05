import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PostService } from '../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent {

  constructor(public postService: PostService) { }

  onAddPost(form: NgForm) {
    if (form.invalid) { return; }
    const post: Post = {
      id: null,
      title: form.value.title,
      content: form.value.content
    };
    this.postService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }

}
