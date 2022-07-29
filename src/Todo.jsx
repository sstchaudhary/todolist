function Todo(prop) {
    
  return (
    <>
      <li><button onClick={()=>{
              prop.del(prop.id);
           }} 
      className='delete'>
      <i className="fa fa-times" aria-hidden="true">
      </i></button>
       {prop.values}</li>
    </>
  )
}

export default Todo