const [usererror,setusererror] = useState(false);
  const [info,setinfo] = useState([]);
  const [register,setregister] = useState({
    firstname : "",
    lastname : "",
    email : "",
    gender : "",
    password : "",
    confirmPassword : ""
  });
  const [disable , setdisable] = useState(false);
   const save = [
    register.firstname,
    register.lastname,
    register.email,
    register.gender,
    register.password,
    register.confirmPassword
   ].every(Boolean);
 
   const change = (e) =>{
     const value  = e.target.value;
     const name = e.target.name;
     setregister((previous) =>{
      return {
        ...previous,
        [name] : value,
      };
     });
   };

   const handlesubmit = ()=>{
    if(!save){
      setdisable(true);
      alert('please fill the space in the form')
      return;
    } else if(save && register.password !== register.confirmPassword){
      setusererror(true);
      alert('password does not correspond');
      return
    }else{
       setinfo((prev)=>[
        ...prev,
        {
          firstname : register.firstname,
          lastname : register.lastname,
          email: register.email,
          gender: register.gender,
          password: register.password,
          confirmPassword: register.confirmPassword
        }

      ]);
    }
    setregister({
      firstname : "",
      lastname : "",
      email : "",
      gender : "",
      password : "",
      confirmPassword : ""
    });
   }
  
//   const [now,later] = useState(Books);
  
//   const handleClick = (value) =>{
//     const newlist = now.filter((mybook) => mybook.num !== value);
//     later(newlist);
//   }

// const handleClick1 = () =>{
//   alert('order added successfully');
// }

 

useEffect(()=>{
  if(save){
   setdisable(false)
  }
},[save]);
  return(  
    <div className="App" style={{display:"inline-block", gap:"30px", marginLeft:"430px", background:"grey" , width:"500px", paddingLeft:"80px", marginTop:"40px", height:"750px"}} onSubmit={(e) => {e.preventDefault();}}>
    {/* {now.map((Book)=>{
      return(
        <article style={{ width:"300px" , border:"1px solid grey", paddingLeft:"30px", marginTop:"50px", marginLeft:"80px"}}>
        <h1>#{Book.num}</h1>
        <img src={Book.image} alt="image" width={200}></img>
        <h2>{Book.title}</h2>
        <h4>{Book.author}</h4>
        <h5>{Book.price}</h5>
        <button onClick={()=>handleClick(Book.num)}>remove</button>
        <button onClick={handleClick1}>add to cart</button>
        </article>
      );
    })} */}
      <h1>Form</h1>
      <div>
       <h3>First name</h3>
       <input type="text" placeholder='Enter your name' id='inp' value={ register.firstname} onChange={change} name="firstname"></input>
      </div>
      <div>
       <h3>Last name</h3>
       <input type="text" placeholder='Enter your name' id='inp' value={ register.lastname} onChange={change} name="lastname"></input>
      </div>
      <h3>Gender</h3>
      <select id='inp2' value={ register.gender} onChange={change} name="gender">
        <option value=""></option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <div>
        <h3>Password</h3>
        <input type="password" placeholder="Enter password" id='inp' value={ register.password} onChange={change} name="password"></input>
      </div>
      <div>
        <h3>Confirm Password</h3>
        <input type="password" placeholder="Enter password" id='inp' value={ register.confirmPassword} onChange={change} name="confirmPassword"></input>
      </div>
      <div>
        <h3>Email</h3>
        <input type="text" placeholder="Enter e-mail" id='inp' value={ register.email} onChange={change} name="email"></input>
      </div><br></br>
      <button type='submit' onClick={handlesubmit} disabled={disable}>Submit</button>

      <div>
     {info.map((user)=>{
      return(
       <div id='ddd'>
             <div id='dusers'>
          <h2>Firstname: {user.firstname}</h2>
          <h3>Lastname: {user.lastname}</h3>
          <h4>Gender: {user.gender}</h4>
          <h4>Password: {user.password}</h4>
          <h4>E-mail: {user.email}</h4>
      </div>
       </div>
      )
     })}
     </div>
    </div>
    
   );