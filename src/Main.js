import React from 'react'
import Chester from './img/c.jpg'


class MainPage extends React.Component{
  constructor(props){
    super(props)
    this.state={
      Data1:"",
      Data2:"",
      array:[],
      array2:[]
    }
  }
  handleChange=(input)=>this.setState(input)
  handleAdd=(e)=>{
    e.preventDefault()
    const Data1=this.state.Data1
    const NewData={
FirstData:this.state.Data1,
SecondData:this.state.Data2
    }
if(Data1===''){alert('enter something')}
else{
  this.setState(
      {array:this.state.array.concat(NewData)},
      alert('Hello'),
      {Data1:''}
      )}
}
    handleClick=()=>{
      let str=''
      for(var i=0;i<19;i++)
      {str=str+i}
      console.log('str'+str);
      
    }
 
render(){
 console.log(this.state.Data1+this.state.Data2);
 console.log(this.state.array);
 
  return (
      <div>
        <div className='alert alert-primary d-none d-md-block d-lg-none' role='alert'>
     
          Bootstrap alert
        </div>
         <input type="text" onChange={(e)=>this.handleChange({Data1:e.target.value})} id='Data1' required placeholder="Data 1"></input>
         <button onClick={this.handleAdd}>Add</button>
         <div className='col-lg-2 '>
           <img src='./img/c.jpg' className='img-fluid' alt='jj'></img>
         </div>
         

         <input type="number" onChange={(e)=>this.handleChange({Data2:e.target.value})} placeholder="Data 2"></input>
         <button onClick={this.handleClick}>Add</button>
         <div className='d-flex flex-row p-2'>
            <button className='btn btn-success'>Click</button>
         </div>

      </div>
    )
}
   
  
}
export default MainPage;
