```js
// React Modules
import React, {useState} from "react";

// Application Modules
import Table from "table.component.jsx";

const Main = () => {
  const [state, setState] = useState({date: [], loading: false})
  const fetchData = (tableState) => {
    const {sort, filter, page, pageSize} = tableState;
    setState({...state, loading: true})
    console.log("Fetching data......", tableState)
    var url = new URL("https://jsonplaceholder.typicode.com/comments");

    // Append filter parameter
    // if(filter) Object.keys(filter).forEach(key => url.searchParams.append(key, filter[key]))
    // Append sort parameter
    // if(sort) Object.keys(sort).forEach(key => url.searchParams.append(`sort[${key}]`, sort[key]))
    // Append page parameter
    // url.searchParams.append("page", page)
    // Append limit parameter
    // url.searchParams.append("limit", pageSize)
    
    // Send request
    fetch(url, {
      method: "GET"
    })
    .then((response) => response.json())
    .then((data) => {
      if(!data || !data.length) return []
      setState({...state, data, loading: false})
    })
    .catch((err) => {
      console.log(err)
      setState({...state, data: [], loading: false})
    })
  }
  return <Table 
    data={state.data}
    loading={state.loading}
    filterable
    showIndex
    onStateChange={fetchData} />
}

export default Main;
```