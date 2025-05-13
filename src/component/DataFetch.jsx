async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    return res.json();
    
}
const DataFetch = async() => {
    const data  = await getData();
  return (
    <div className="px-16" >
        <h1 className="text-xl text-center" >

        Data fetching fron json placeholder:
        </h1>
        <div className="grid py-10 grid-cols-4 gap-10 " >
            {
                data.map((item, index)=>(
                    <div key={index} >
                        <h1><strong>Name: </strong>{item.name}</h1>
                        <p><strong>Username: </strong>{item.username}</p>
                        <p><strong>Email: </strong>{item.email}</p>
                        <address><strong>Address: </strong>{item.address.street}</address>
                    </div>
                ))
            }
        </div>

    </div>
  )
}

export default DataFetch