
 export const HOC =(Newcomponent)=>{

    return function (props){
 if(props.isloding){
    return <h1>....loding data.....</h1>
 }
 return <Newcomponent {...props}/>
    }
}


