function Listdisplay(){
    const users =["A","B","C"];

    return(
    <>
    {users.map((user) => (
        <div>{user}</div>
    ))}
    
    </>
    );
}
export default Listdisplay;