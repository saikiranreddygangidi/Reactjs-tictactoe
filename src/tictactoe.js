import React from 'react';
import './tictactoe.css';
class Box extends React.Component{
    constructor(props){
super(props);
    }
    render() {
        let cla ;
        if(this.props.color===-1){
            cla="green";
       }
       else
        if(this.props.color===0){
            cla="red";
        }
        else{
            cla="blue";
        }
    return (
        <button className={cla} id="button" onClick={this.props.oncheck}></button> 
    );}
}
class Tictactoe extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
        winner: "",
        choice:0,
        color:-1,
       game:0,
       nbc:0,
        board:[[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]],
        show:false
      };
      
    }
     async changechoice(index){
        
        this.setState({winner:""});
        let i=index/3;
        let j=index%3;
        i=Math.floor(i);
        let boardlist=[...this.state.board];
       
        
        boardlist[i][j]=this.state.choice === 0 ?1:0;
        let position=boardlist[i][j];
        this.setState({
            choice:this.state.choice === 0 ?1:0,
            color:this.state.choice === 0 ?1:0,
            board:boardlist});
        let postion1=this.checkstatus(index,position);
        let start=" start a new game by clicking reset button";
        if (postion1 === 1)
         {this.setState({winner:"[winner is x] "+start,game:1,nbc:0});
         
          }
         if (postion1 === 0)
         {await this.setState({winner:"[winner is o] \n"+start,game:1,nbc:0}); }
       this.setState({nbc:this.state.nbc+1}) 
       if(this.state.nbc === 8)
       {
       await this.setState({winner:"[match is draw]"+start,nbc:0});}

       let boardlist1=[[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];
        if(this.state.game === 1)
        {
            
        await this.setState({choice:0,board:boardlist1,winner:"",game:0,nbc:0},() => {
            
          });
        
        }
               
    }
    reset=()=>{
        
        let boardlist=[[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];
        this.setState({choice:0,board:boardlist,winner:"",game:0},() => {
            
          });
        
    }
    test=(i)=>{
        alert(this.state.board[i]);
    }
    checkstatus=(index,postion)=>{
        let i=index/3;
        let j=index%3;
        i=Math.floor(i);
        let boardlist=[...this.state.board];
        let count=0;
        for(let p=i,q=2;q>=0;q--){
            if(boardlist[p][q] == postion)
             count++;
             else
             break;
        }
        if (count===3)
         return postion;
        count=0;
        
        for(let p=2,q=j;p>=0;p--){
            if(boardlist[p][q] == postion)
             count++;
             else
             break;
        }
        if (count===3)
         return postion;
         count=0;
        if(i-j === 0)
        for(let p=2,q=2;q>=0 && p>=0;p--,q--){
            if(boardlist[p][q] == postion)
             count++;
            else
             break;
        }
        if(count === 3)
         return postion;
         count=0;
        for(let p=2,q=0;p>=0 && q<=2;p--,q++){
            if(boardlist[p][q] == postion)
             count++;
             else
             break;
        }

        if(count === 3)
         return postion;
         count=0;

        return -1;


    }

    
    
      
    render() {
     
        return <div>
            {this.state.winner} <br/>
           <button onClick={this.reset}>reset</button>
            <table >
            <tr>
             <td><Box color={this.state.board[0][0]} oncheck={()=>this.changechoice(0)}/></td>
             <td><Box color={this.state.board[0][1]} oncheck={()=>this.changechoice(1)}/></td>
             <td><Box color={this.state.board[0][2]} oncheck={()=>this.changechoice(2)}/></td>
            </tr>
            <tr>
            <td><Box color={this.state.board[1][0]} oncheck={()=>this.changechoice(3)}/></td>
             <td><Box color={this.state.board[1][1]} oncheck={()=>this.changechoice(4)}/></td>
             <td><Box color={this.state.board[1][2]} oncheck={()=>this.changechoice(5)}/></td>
             </tr>
             <tr>
             <td><Box color={this.state.board[2][0]} oncheck={()=>this.changechoice(6)}/></td>
             <td><Box color={this.state.board[2][1]} oncheck={()=>this.changechoice(7)}/></td>
             <td><Box color={this.state.board[2][2]} oncheck={()=>this.changechoice(8)}/></td>
            </tr>
            </table>
    
   
     </div>;
        
    }
  }
  export {Tictactoe}