import React from 'react';

function Awards() {
	return (  
		<div className='container mt-5'>
			{/* Added 'align-items-center' to keep the graphic and text centered vertically */}
			<div className='row align-items-center'>
				
				{/* Left Column: The Main Image */}
				<div className='col-6'>
					<img src='media/images/largestBroker.svg' alt="Largest Broker Graphic" className="img-fluid" />
				</div>
				
				{/* Right Column: All Text and Logos Content */}
				<div className='col-6 p-5 mt-3'>
					<h1>Largest stock broker in India</h1>
					<p className='mb-4'>
						2+ millions Zerodha clients contribute to over 15% of all the volumes in India daily by Trading and Investing in:
					</p>
					
					{/* Splitting the bullet list across two columns cleanly */}
					<div className='row mb-4'>
						<div className='col-6'>
							<ul className='ps-3'>
								<li><p className='mb-2'>Future and Options</p></li>
								<li><p className='mb-2'>Commodity Derivatives</p></li>
								<li><p className='mb-2'>Currency Derivatives</p></li>
							</ul>
						</div>
						<div className='col-6'>
							<ul className='ps-3'>
								<li><p className='mb-2'>Stocks & IPOs</p></li>
								<li><p className='mb-2'>Direct mutual funds</p></li>
								<li><p className='mb-2'>Bonds and Government Security</p></li>
							</ul>
						</div>
					</div>
					
					{/* Press Logos Section at the bottom of the column */}
					<div>
						<img src='media/images/pressLogos.png' style={{ width: "90%" }} alt="Press Logos" />
					</div>
				</div> {/* Right column ends here */}

			</div>
		</div>
	);
}

export default Awards;