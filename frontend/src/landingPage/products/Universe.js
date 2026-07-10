import React from 'react'
function Universe(){
  const logoStyle = {
    width: "200px",
    height: "60px",
    objectFit: "contain",
  };

  return(
   
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>Extend your trading and investment experience even further with our partner Platforms. </p>
       
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" style={logoStyle}/>
          <p className='text-small text-muted'>Thematic investment platform</p>
        </div>
         <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" style={logoStyle}/>
           <p className='text-small text-muted'>Algo & strategy platform</p>

        </div>
         <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" style={logoStyle}/>
           <p className='text-small text-muted'>Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/zerodhaFundhouse.png" style={logoStyle}/>
          <p className='text-small text-muted'>Assest Management </p>
        </div>
         <div className="col-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png" style={logoStyle}/>
           <p className='text-small text-muted'>Bonds trading platform</p>
        </div>
         <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" style={logoStyle}/>
           <p className='text-small text-muted'>Insurance</p>
        </div>
        <button className='p-2 btn btn-primary mt-5 fs-5 mb-5'style={{width:"20%", margin: "0 auto",}}>
                      Signup now
			   </button>

      </div>
    </div>
  );
    

     
 
}


export default Universe
