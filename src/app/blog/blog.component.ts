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

// en la interface no se puede crear tipos de union. Si no voy a usarlo en una clase creo un tipo. El tipo tiene un = y el interface no. Ipost tambien seria la interfaz de post.
// interface Post {
//   title: string;
//   imgUrl: string;
//   bodyText: string;
//   date: string;
// }

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
  //tipod fr inicializacion de variabled.
  // 1- asignando directamente un valor para crearlo.
  //post:Post[] = []
  // 2- tambien podemos declarar el campo usando el operador any.
  // post:any;
  //3 - tambien se puede usar el operador pipe de typescript.
  //post:Post[] | null | undefine = [];
  // 4- en typescript existe la notación "Array<> " para denotar arreglos
  posts: Array<Post> = INITIAL_BLOG_POSTS;
  // 5- los corchetes dicen que ese tipo es un arreglo
  // post!:Post[] le dice ese campo de clase si tendra valor.mejor no hacerlo.
  // Campos del formulario -> Template driven forms
  title: string = '';
  // Reactive forms
  postForm: FormGroup = this._fb.group({
    title: ['', [Validators.required]],
    bodyText: ['', [Validators.required]],
    date: ['', [Validators.required]],
  });

  // Usamos inyeccion de dependencias para acceder al servicio
  // FormBuilder
  constructor(private _fb: FormBuilder) {
    // asignando un valor en el constructor.
    // this.post = [];
  }

  ngOnInit(): void {
    //this.getPokemons()
  }

  handleImgSelection(alt: string, src: string): void {
    console.log({ alt, src });
    // Cuando usamos la palabra reservada "this", podemos acceder
    // a todos los campos de clase y metodos que se encuentren
    // dentro de la llave de apertura y la llave de cierre de la
    // clase donde estemos ubicados.
    this.selectedImg = { alt, src };

    // Tambien se puede asignar de la manera larga:
    // this.selectedImg = { alt: alt, src: src };
  }

  hasInvalidInputs(): boolean {
    if (this.title === '') return true;

    return false;
  }

  handleSubmit() {
    console.log({ formValues: this.postForm.value });

    if (this.postForm.valid) {
      console.log('Post creado!');
      const newPost: Post = {
        ...this.postForm.value,
        imgUrl: this.selectedImg?.src,
      };

      this.posts = [...this.posts, newPost];
    }

    // Template driven forms
    // console.log({ title: this.title });
    // if (!this.hasInvalidInputs()) {
    //   console.log('Post creado!');
    // }
  }

  // Getters para el formulario reactivo
  get getTitle() {
    return this.postForm.get('title');
  }

  get getBodyText() {
    return this.postForm.get('bodyText');
  }

  get getDate() {
    return this.postForm.get('date');
  }

  //   getPokemons(){
  //     try{
  //     const pokemons = awaits fetch('https://pokeapi.co/api/v2/pokemon');
  //     console.log ({pokemons});
  //     //mnanejar los errores...
  //     }catch(error) {
  //       console.error({error});
  //     }

  //     /*promesa, asincrono.... then y response y catch.

  //     const pokemons = fetch('https://pokeapi.co/api/v2/pokemon').then(() =>{
  //       console.log({Response: Response.json() })
  //     })
  //     catch((err) => {
  //       console.log ({err});
  //     })*/
  //}
}
