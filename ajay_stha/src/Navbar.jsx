import React, {Component} from 'react'

class Navbar extends Component{
    constructor(props){
        super(props)
        this.state={
            color:"red",
            count:0,
        }
    }

    increment=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    changeColor=()=>{
        this.setState({
            color:"blue"
        })
    }
    render(){
        return(
            <>
            <div style={{backgroundColor:'green', height:'120px',color:'white'}}>
                <h1>Counter App</h1>
                <i style={{color:this.state.color}}>{this.props.test}-{this.state.color}</i>
                 <button onClick={()=>this.setState({
                    color:"yellow"
                 })}>  Change color to Yellow</button>

                 {/* <i style={{color:this.state.color}}>{this.props.test}-{this.state.color}</i> */}
                 <button onClick={()=>this.setState({
                    color:"blue"
                 })}>  Change color to Blue</button>
                 {/* <button style= {{textAlign:'centre', marginLeft:'1200px'}}>Project</button> */}
                 
            </div>
            <h1>Value={this.state.count}</h1>
            <button onClick={this.increment} style={{fontSize:30}}>+</button>
            </>
        )
    }
}

export default Navbar