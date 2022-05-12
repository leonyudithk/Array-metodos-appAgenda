const practica =[
    {
        id: '1',
        nombre: 'Yudith Leon',
        leng: ['Css', 'Java', 'C++', 'javascript', 'Redux' ]
    },
    {
        id: '2',
        nombre: 'Juan Paredes',
        leng: ['C', 'javascript', 'Angular' ]
    },
    {
        id: '3',
        nombre: 'Alejandra Rojas',
        leng: ['PHP', 'javascript', 'C++', 'Next' ]
    }
]



//------------Desarrollar------------------/

//------------ForEach recorrer todo el array--------------------/

practica.forEach(p => console.log(p.nombre))

//---------------Map recorrer todo el array y devolver un nuevo array-----------------------/
 practica.map(p=> console.log(p.nombre))

//-----------------Find  busqueda y retorna cuando encuentre el primero que cumpla  la condicion----------------------------/
const resultado = practica.find(p => p.nombre == 'Blanca' ||  p.nombre == 'Alejandra Rojas' )
console.log(resultado)


//----------------------Filter buscar y retorna un array con todos los elementos que cumplan la condicion---------------------------/
const resulFilter = practica.filter(p => p.leng.includes('C++') )
console.log(resulFilter)

//--------------Some  devuelve si la condicion se cumple por lo menos una vez (True o False)-----------------/

const resulSome = practica.some(p => p.id == 4 )
console.log(resulSome)

const resulSome2 = practica.some(p => p.leng.includes('Next') )
console.log(resulSome2)

//----------Every es parecido al Some que se cumpla en todas-------------------------//

const resulEvery = practica.every (p => p.leng.includes('javascript') )
console.log(resulEvery )

//---------------Reduce- devuelve un array------------------------------------/
const resultsReduce = practica.reduce((allLeng, p) =>{
    return [...allLeng, ...p.leng]
}, [])
console.log(resultsReduce)


