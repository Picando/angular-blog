import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

type Post = {
  title: string;
  imgUrl: string;
  bodyText: string;
  date: string;
};

type Image = {
  alt: string;
  src: string;
};

const INITIAL_BLOG_POSTS: Array<Post> = [
  {
    title: 'Primer post',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
    bodyText:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa aspernatur nemo vel cupiditate qui expedita, recusandae optio perferendis doloremque ipsa dicta id quam quia delectus autem perspiciatis consequatur cumque eveniet.',
    date: '04/07/2022',
  },
  {
    title: 'Segundo post',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
    bodyText:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa aspernatur nemo vel cupiditate qui expedita, recusandae optio perferendis doloremque ipsa dicta id quam quia delectus autem perspiciatis consequatur cumque eveniet.',
    date: '04/07/2022',
  },
];

const DEFAULT_IMAGES: Array<Image> = [
  {
    alt: 'Angular',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
  },
  {
    alt: 'React',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/800px-React.svg.png',
  },
];

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  nombre: string = 'Cristina Galan';
  defaultImgs: Array<Image> = DEFAULT_IMAGES;

  private selectedImg: Image = DEFAULT_IMAGES[0];
  posts: Array<Post> = INITIAL_BLOG_POSTS;
  postForm: FormGroup = this._fb.group({
    title: ['', [Validators.required]],
    bodyText: ['', [Validators.required]],
    date: ['', [Validators.required]],
  });

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {}

  handleImgSelection(alt: string, src: string): void {
    this.selectedImg = { alt, src };
  }

  handleSubmit() {
    if (this.postForm.valid) {
      const newPost: Post = {
        ...this.postForm.value,
        imgUrl: this.selectedImg?.src,
      };

      this.posts = [...this.posts, newPost];
    }
  }

  // Getters
  get getTitle() {
    return this.postForm.get('title');
  }

  get getBodyText() {
    return this.postForm.get('bodyText');
  }

  get getDate() {
    return this.postForm.get('date');
  }
}
