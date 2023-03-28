import React, {Component} from "react";


class ErrorBoundry extends Component{
     constructor(props){
        super(props);
        this.state ={
            hasError : false
        }
     }

    //  if this compoment errors out this it will tribgger
     componentDidCatch(error, info){
        this.setState({hasError :true});
     }

     render(){

        // it need to retunr just one element
        if(this.state.hasError){
            return <h1>Opps that is not good!</h1>
        }
        return this.props.children;
     }
}

export default ErrorBoundry
