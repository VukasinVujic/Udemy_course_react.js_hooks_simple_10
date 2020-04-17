import React, {useState,useEffect} from 'react';
import axios from 'axios';

// class ResourceList extends React.Component {

    // state = { resource: [] };
    
    // async componentDidMount(){
    //     const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
    //     this.setState({resource: response.data})
    // }

    //preProps(not important name) are the props from the moment, before the componenetDidUpdate is run
    // async componentDidUpdate(preProps){
    //     if(preProps.resource !== this.props.resource){
    //         const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
    //         this.setState({resource: response.data})
    //     }
    // }

  const ResourceList = ({resource}) => {

    const [resources,setResource] = useState([]);

    const fetchResource = async(resource) =>{
        // const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)

        // this.setState({resource: response.data})
        setResource(response.data)
    }

    useEffect(()=> {
        fetchResource(resource)
    }, [resource])

    // render() { 
        return (
            <ul>
                {/* {this.state.resource.length} */}
                {resources.map(record => <li key={record.id}>{record.title}</li>)}

            </ul>
        )
    // }
}

export default ResourceList;