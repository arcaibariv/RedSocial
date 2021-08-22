function textoAbout(){
    const parrafo =getElementById("parrafo")
    const userAction = async () => {
        const url='http://localhost:3000/mispublicaciones'
        const res = await fetch(url, {
          method: "GET", 
          headers: {
            "Content-Type": "application/json;charset=UTF-8"
          }
        
        });  return res
    }
    const res=userAction();
    parrafo.append(`${res}`)
  }