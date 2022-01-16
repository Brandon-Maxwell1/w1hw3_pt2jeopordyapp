import React, {useState, useEffect} from 'react';
import axios from 'axios';

const DataFetching = () => {
    const [question, setQuestion] = useState([])

    useEffect(() => {
        axios.get('http://jservice.io/api/random')
        .then(res => this.setQuestion({
            data: res.data.collection.items
          }))
        .catch(err => {
            console.log(err)
        })
    })
    return (
        <div>
           
        </div>
    );
}

export default DataFetching;
