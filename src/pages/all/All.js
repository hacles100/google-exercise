import Result from "../../components/result/Result";


function All() {

    return <>
        <h1>All page</h1>
        
        <Result
            url='https://facebook.com'
            title='This is Meta!'
            summary='Face is a webpage that does this and that and etc. 
                Face is a webpage that does this and that and etc' />

        <Result
            url='https://facebook.com'
            title='This is Meta!'
            summary='Face is a webpage that does this and that and etc. 
                Face is a webpage that does this and that and etc' />
    </>

}

export default All;