import { Component, OnInit } from '@angular/core';

type Post = {
  title: string;
  imgUrl: string;
  bodyText: string;
  date: string;
};

// en la interface no se puede crear tipos de union. Si no voy a usarlo en una clase creo un tipo. El tipo tiene un = y el interface no. Ipost tambien seria la interfaz de post.
// interface Post {
//   title: string;
//   imgUrl: string;
//   bodyText: string;
//   date: string;
// }

const InitialBlogPosts: Array<Post> = [
  {
    title: 'Primer post',
    imgUrl: 'vacio',
    bodyText: 'lorem ipsu',
    date: '04/07/2022',
  },
  {
    title: 'Segundo post',
    imgUrl: 'vacio',
    bodyText: 'lorem ipsu',
    date: '04/07/2022',
  },
];

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  nombre: string = 'Cristina Galan';
  //tipod fr inicializacion de variabled.
  // 1- asignando directamente un valor para crearlo.
  //post:Post[ =[]]
  // 2- tambien podemos declarar el campo usando el operador any.
  // post:any;
  //3 - tambien se puede usar el operador pipe de typescript.
  //post:Post[] | null | underfine =[];
  // 4- en typescript existe la notación "array<> " para denotar arreglos
  posts: Array<Post> = InitialBlogPosts;
  // 5- los corchetes dicen que ese tipo es un arreglo
  // post!:Post[] le dice ese campo de clase si tendra valor.mejor no hacerlo.

  constructor() {
    // asignando un valor en el constructor.
    // this.post = [];
  }

  ngOnInit(): void {
    //this.getPokemons
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
}
//}
