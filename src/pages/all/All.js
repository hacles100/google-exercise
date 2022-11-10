import Result from "../../components/result/Result";


function All() {

    const list = [
  
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
       
    </>

 }

export default All;