//   const refcontainer = useRef();
//   const [market , setmarket] = useState({
//     name : "",
//   })
//   const [disable , setdisable] = useState(false)
//   const [disable1 , setdisable1] = useState(false)
//   const [error , seterror] = useState(false)
//   const [userregister , setuserregister] = useState([])
//   const [userinfo , setuserinfo] = useState({
//     firstname : "",
//     lastname : "",
//     gender : "",
//     password : "",
//     confirmpassword : "",
//     email : ""
//   });





//   const save = [
//     userinfo.firstname,
//     userinfo.lastname,
//     userinfo.gender,
//     userinfo.password,
//     userinfo.confirmpassword,
//     userinfo.email
//   ].every(Boolean)

 
  

//   const handlechange = (e)=>{
//     const name = e.target.name;
//     const value = e.target.value;
//     setuserinfo((prev)=>{
//       return {
//         ...prev,
//         [name] : value,
//     }
//     });
//   }

//   const handleclick =()=>{
//     if(!save){
//       setdisable(true);
//       alert("please fill the form");
//       return;
//     }else if(save && userinfo.password !== userinfo.confirmpassword){
//       seterror(true);
//       alert("password does not correspond");
//       return;
//     }else{
//       setuserregister((prev)=>{
//         return{
//           ...prev,
//           firstname : userinfo.firstname,
//           lastname : userinfo.lastname,
//           gender : userinfo.gender,
//           password : userinfo.password,
//           confirmpassword : userinfo.confirmpassword,
//           email : userinfo.email
//         }
//       });
//     }
//      setuserinfo({
//       firstname : "",
//       lastname : "",
//       gender : "",
//       password : "",
//       confirmpassword : "",
//       email : ""
//      });
//   }

//   useEffect(()=>{
//     if(save){
//       setdisable(false);
//     }
//   },[save])
//  return <>
//  <h1>Form Registration</h1>
//  <form onSubmit={(e)=>{e.preventDefault()}}>
//  <div>
//   <h3>Firstname</h3>
//   <input type="input" placeholder="Enter firstname" value={userinfo.firstname} name="firstname" onChange={handlechange}></input>
//  </div>
//  <div>
//   <h3>Lastname</h3>
//   <input type="input" placeholder="Enter lastname" value={userinfo.lastname} name="lastname" onChange={handlechange}></input>
//  </div>
//  <h3>Gender</h3>
//  <select value={userinfo.gender} name="gender" onChange={handlechange}>
//   <option></option>
//   <option value="Male">Male</option>
//   <option value="Female">Female</option>
//  </select>
//  <div>
//   <h3>Password</h3>
//   <input type="password" placeholder="Enter password" value={userinfo.password} name="password" onChange={handlechange}></input>
//  </div>
//  <div>
//   <h3>Confirm Password</h3>
//   <input type="password" placeholder="Enter password" value={userinfo.confirmpassword} name="confirmpassword" onChange={handlechange}></input>
//  </div>
//  <div>
//   <h3>E-mail</h3>
//   <input type="input" placeholder="Enter e-mail" value={userinfo.email} name="email" onChange={handlechange}></input>
//  </div>
//  <button type='submit' disabled={disable} onClick={handleclick}>Submit</button>
//  </form>

//  {/* <h1>Shopping List</h1>
//    <div onSubmit={(e)=>{e.preventDefault()}}>
//    <input type="input" placeholder=" enter item" ref={refcontainer} name1="name" value1={market.name}></input>
//    <button type="submit">Submit</button>
//    {market.map(list =>{
//     return(
//     <div>
//       <h2>{list}</h2>
//       <button >delete</button>
//     </div>
//    )
//     })}
//    </div> */}
//  </>
// }

// const [listItems, setlistItems] = useState([]);
// const refcontainer = useRef();

// const handlesubmit=(e)=>{
//   e.preventDefault();
//   const value = refcontainer.current.value;
//   if(value){
//   setlistItems((prev)=>[...prev, value])
//   }
// }
// const handleDelete = (item) => {
// setlistItems(prev => prev.filter((_,index) => index !== item))
// }

// console.log(listItems);
// return <>
// <div>
//   <h1>My market List</h1>
//   <form  onSubmit={handlesubmit} >
//          <input type="input" ref={refcontainer} placeholder="enter item"></input>
//           <button type='submit'>Submit</button>
//       </form>
//   <div>
//      {listItems.map((item, index) => (
//          <div key={index}>
//           <h1>{item}</h1>
//           <button onClick={() => handleDelete(index)}>delete</button>
//          </div>
     
//      ))}
//   </div>
// </div>

// </>















const [useritem , setuseritem] = useState([]);
const [fulfilled, setfulfilled] = useState("");
const inputref = useRef("");

const holdchange = (e)=>{
  e.preventDefault();
 let newvalue = inputref.current.value;
 if(newvalue){
  setuseritem((prevs)=>[...prevs,newvalue]); 
 }
 if(!newvalue){
  alert("please input item.")
 }
  inputref.current.value= "";
}
const handledelete =(item)=>{
    setuseritem(prev=> prev.filter((_,index)=> index !== item))
}

const handlefulfill = ()=>{

}
return <>

 <div style={{top:"50px", left:"100px", position:"relative"}}>
    <h1>Market list</h1>
    <form onSubmit={holdchange}>
      <input  type="input" ref={inputref} placeholder=" enter item" style={{width:"300px"}}></input><button type="submit">Submit</button>
    </form>
    
    {useritem.map((item,index)=>{
      return <div key={index}>
                  <div style={{border:"1px solid grey", margin:"30px", padding:"30px" , width:"250px", borderRadius:"10px"}}>
                      <h3>{item}</h3>
                     <button type='button' onClick={()=>handledelete(index)}>delete</button> <button type='button'>fulfilled</button>
     
                  </div>
         </div>
    })}
</div>
</>
}