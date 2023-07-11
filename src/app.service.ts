import { Injectable, NotFoundException } from '@nestjs/common';
import { Posts } from './app.model';
import { v1 as uuid } from 'uuid';

@Injectable()
export class AppService {
  posts: Posts[];
  create(content: string) {
    const post: Posts = {
      id: uuid(),
      content: content,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    //this.postId += 1;
    this.posts.push(post);
    return post;
  }

  findAll() {
    return this.posts;
  }

  findOne(id: number) {
    const post = this.posts.find((post) => post.id === id);
    if (!post) {
      throw new NotFoundException('존재하지 않는 post의 id');
    }
    return post;
  }
}
