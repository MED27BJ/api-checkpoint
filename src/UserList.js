// The userlist component that get the data from API and return the card of information it contain a input for research by name
import React, { useState } from 'react'
import axios from "axios";
// declaration of the path of the data
const baseURL = "https://jsonplaceholder.typicode.com/users";
// the main function of the component
const UserList = () => {
    const [post, setPost] = React.useState(null);
    const [serach,setSearch]=useState("")
    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        setPost(response.data);
      });
    }, []);
  
    if (!post) return null;
  
  return (
    <div className='all'>
    <div className='hautpage'>
    <h1>Jsonplaceholder API</h1>
    <input placeholder='Search by name' type="text" onChange={(e)=>setSearch(e.target.value)} />
    </div>
    <div className='parent-container'>
    {post&& post.filter((el)=>(el.name.toLocaleLowerCase().includes(serach.toLocaleLowerCase())))
      .map((el)=>(
      <div className='pcontainer'>
      <div className='top-container'>
      </div>
      <div className='cercle-container'>
      <h1>{el.name[0]}</h1>
      </div>
      <div className='middle-container'>

    
      <h4>{el.name}</h4>
      </div>
      <div className='bottom-container'>
      <p><span><strong>User Name: </strong></span>{el.username}</p>
      <p><span><strong>E-mail: </strong></span>{el.email}</p>
      </div> 
      </div>
   
  ))}
    </div>
    </div>
  )
}
// the exportation of the component
export default UserList
