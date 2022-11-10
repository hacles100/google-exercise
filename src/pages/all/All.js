import Result from "../../components/result/Result";


function All() {

    const list = [
<<<<<<< HEAD
  
        {
            url :'https://facebook.com',
            title : 'This is Meta!',
            summary : 'Face is a webpage that does this and that and etc.',
                 
        },

        {
            url :'https://google.com',
            title :'This is Google!',
            summary :'Google is the font.',
                 
        },
        {
            url :'https://hericles.com',
            title :'This is Hericles!',
            summary :'Im the best coders in the world.',
                 
        }

    ]



    return <>
        <h1>All page</h1>

       {list.map((item, i)=><Result
            key={i}
            url={item.url}
            title={item.title}
            summary={item.summary} />)} 
       
=======
        {
            url: 'https://academy.com',
            title: 'This is Academy!',
            summary: 'Academy is a webpage that does this and that and etc. Academy is a webpage that does this and that and etc',
        },
        {
            url: 'https://praia-shopping.com',
            title: 'Cinema na Praia Shopping',
            summary: 'Pão quente não tem pão quente, apenas pão frio. Academy is a webpage that does this and that and etc',
        },
        {
            url: 'https://somada.com',
            title: 'Somada',
            summary: 'Somas não tem pão quente, apenas pão frio. Academy is a webpage that does this and that and etc',
        },
        {
            url: 'https://somada.com',
            title: 'Somada',
            summary: 'Somas não tem pão quente, apenas pão frio. Academy is a webpage that does this and that and etc',
        }
    ]

    return <>
        <h1>All page</h1>

        {list.map((item, i)=><Result
            key={i}
            url={item.url}
            title={item.title}
            summary={item.summary} />)}
>>>>>>> cb28b73115e388622ddafa78830cbdb29dc8d438
    </>

 }

export default All;