import React from 'react';

function Stats() {
	return ( 
		<div className='container mt-5'>
			{/* Open the row here and align items vertically center */}
			<div className='row align-items-center p-5'>
				
				{/* Left Column: All Text Content */}
				<div className='col-6 p-5'>
					<h1 className='mb-4'>Trust With Confidence</h1>
					
					<h3>Customer-first Always</h3>
					<p className='text-muted mb-4'>That is Why 1.3+ crores customers trust Zerodha with $3.5+ lakh crores worth of equity investments.</p>
					
					<h3>No spam or gimmicks</h3>
					<p className='text-muted mb-4'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
					
					<h3>The Zerodha universe</h3>
					<p className='text-muted mb-4'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
					
					<h3>Do better with money</h3>
					<p className='text-muted mb-4'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
				</div>
				
				{/* Right Column: Image and Action Links */}
				<div className='col-6 text-center p-5'>
					<img src='media/images/ecosystem.png' style={{ width: "100%" }} alt="Ecosystem graphic" className="mb-4" />
					
					<div className='d-flex justify-content-center gap-4'>
						<a href='' className='text-decoration-none'>
							Explore Our Products <i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i>
						</a>
						<a href='' className='text-decoration-none'>
							Try Kite Demo <i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i>
						</a>
					</div>
				</div>

			</div> {/* Row ends here */}
		</div>
	);
}

export default Stats;