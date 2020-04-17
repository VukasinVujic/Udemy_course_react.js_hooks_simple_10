import {useState, useEffect} from 'react';
import axios from 'axios';

const useResources = (resource) => {
        const [resources,setResource] = useState([]);

        useEffect(()=> {
            (async(resource) =>{
                // const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
                const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
        
                // this.setState({resource: response.data})
                setResource(response.data)
            })(resource);
        }, [resource]);

        return resources;
    }

 export default useResources;   