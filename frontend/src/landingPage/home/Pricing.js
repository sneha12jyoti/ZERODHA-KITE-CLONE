import React from 'react';
function Pricing() {
	return ( 
		<div className='container'>
			<div className='row'>
				<div className='col-4'>
					<h1 className='mb-3'>Unbeatable Pricing</h1>
					<p mb-3> We pioneered the concept of discount broking and price transparency in india.Flat fess and no hidden charges.</p>
					<a href='' className='text-decoration-none'>
							See Pricing <i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i>
						</a>
				</div>

                 <div className='col-2'></div>
				 <div className='col-6'>
				 <div className='row'text-center>
				<div className='col p-3  border'>
					<h1 className='mb-3'>Rs 0</h1>
					<p>Free equity delivery and <br></br>direct mutual funds</p>
					</div>
					
				<div className='col p-3 border'>
					<h1 className='mb-3'>Rs 20</h1>
					<p>Intraday and F&O</p>
				</div>

			</div>
		</div>
		</div>
		</div>
	 );
}

export default Pricing;