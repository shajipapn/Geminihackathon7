import { useContext, useState } from "react";
import BlinkingHeadlights from "./BlinkingHeadlights.jsx";
import TaxiAssistant from "../taxi/TaxiAssistant";
import { assets } from "../../assets/assets";
import "./main.css";
import { Context } from "../../context/Context";

import FoodAssistant from "../food/FoodAssistant";

const Main = () => {
       const {
	       onSent,
	       recentPrompt,
	       showResults,
	       loading,
	       resultData,
	       setInput,
	       input,
       } = useContext(Context);

	// Taxi assistant modal state
	const [showTaxi, setShowTaxi] = useState(false);
	const [taxiPickup, setTaxiPickup] = useState("");
	const [taxiDropoff, setTaxiDropoff] = useState("");
	// Food assistant modal state
	const [showFood, setShowFood] = useState(false);
	// Finance modal state
	const [showFinance, setShowFinance] = useState(false);

	       const handleCardClick = (promptText) => {
		       if (promptText.toLowerCase().includes("finance")) {
			       setShowFinance(true);
			       return;
		       }
		       setInput(promptText);
		       if (promptText.toLowerCase().includes("taxi")) {
			       setShowTaxi(true);
			       setTaxiPickup("Current location");
			       setTaxiDropoff("Airport");
		       } else if (promptText.toLowerCase().includes("food")) {
			       setShowFood(true);
		       }
	       };

	       // Helper to check if input is only whitespace
	       const isInputEmpty = !input.trim();

	       // Handler for keydown in input
	       const handleInputKeyDown = (e) => {
		       if (e.key === ' ' && isInputEmpty) {
			       e.preventDefault();
		       }
	       };

	       return (
		       <div className="main">
			<div className="nav">
				   <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1 }}>
					   <p
						   className="headline-gradient"
						   style={{ cursor: 'pointer', fontWeight: 800, fontSize: 44, letterSpacing: '-1px', margin: 0, background: 'linear-gradient(90deg, #4b90ff 10%, #00e6ff 50%, #a259ff 90%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', textFillColor: 'transparent', filter: 'drop-shadow(0 2px 12px #00e6ff44)' }}
						   onClick={() => {
							   setInput("");
							   if (showResults) window.location.reload();
							   setShowTaxi(false);
						   }}
					   >
						   <span style={{ fontSize: 26, fontWeight: 800, verticalAlign: 'middle', marginRight: 6 }}>എന്റെ</span><span style={{ fontSize: 44, fontWeight: 800, verticalAlign: 'middle' }}>Gemini</span>
					   </p>
					   <span style={{ fontSize: 15, color: '#b3b3b3', marginLeft: 2, marginTop: 2, fontWeight: 500, letterSpacing: '0.2px' }}>my Assistant</span>
				   </div>
				<img src={assets.user} alt="" />
			</div>
			<div className="main-container">
				{!showResults ? (
					<>
						<div className="greet">
							<p>
								<span>Hello , <span className="headline-gradient" style={{fontSize: '1em', fontWeight: 800, letterSpacing: '0.5px', verticalAlign: 'middle'}}>Jakku</span> </span>
							</p>
							<p>What are we doing today?</p>
						</div>
						<div className="cards">
														<div
															className="card"
															style={{ position: 'relative', overflow: 'hidden' }}
															onClick={() =>
																handleCardClick("Book a taxi from my current location to the airport.")
															}
														>
															<p>Book a taxi to the airport</p>
															<img
																src={assets.car_blinking_beam}
																alt="Taxi Animated"
																style={{ width: '100%', height: '120px', display: 'block', objectFit: 'cover', borderRadius: '12px', marginTop: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }}
																draggable={false}
															/>
														</div>
							<div
								className="card"
								style={{ position: 'relative', overflow: 'hidden' }}
								onClick={() =>
									handleCardClick("Suggest Some Place To Visit In Kerala")
								}
							>
								<p>Suggest Some Place To Visit In Kerala </p>
								<img
									src={assets.kerala_nature}
									alt="Kerala Nature"
									style={{ width: '100%', height: '120px', display: 'block', objectFit: 'cover', borderRadius: '12px', marginTop: '1rem' }}
									draggable={false}
								/>
							</div>
							<div
								className="card"
								style={{ position: 'relative', overflow: 'hidden' }}
								onClick={() =>
									handleCardClick(
										"Brainstorm team bonding activities for our work retreat"
									)
								}
							>
								<p>Brainstorm team bonding activities for our work retreat </p>
								<img
									src={assets.team_bonding}
									alt="Team Bonding"
									style={{ width: '100%', height: '120px', display: 'block', objectFit: 'cover', borderRadius: '12px', marginTop: '1rem' }}
									draggable={false}
								/>
							</div>
							<div
								className="card"
								style={{ position: 'relative', overflow: 'hidden' }}
								onClick={() =>
									handleCardClick("How to Create a Gyroscope using Disc?")
								}
							>
								<p>How to Create a Gyroscope using Disc?</p>
								<img
									src={assets.gyroscope_3d}
									alt="Gyroscope 3D"
									style={{ width: '100%', height: '120px', display: 'block', objectFit: 'cover', borderRadius: '12px', marginTop: '1rem' }}
									draggable={false}
								/>
							</div>
								       <div
									       className="card"
									       style={{ position: 'relative', overflow: 'hidden' }}
									       onClick={() => {
										       handleCardClick(
											       "Create a Script for the youtube video about coding "
										       );
									       }}
								       >
									       <p>Create a Script for the youtube video about coding </p>
										       <img
											       src={assets.code_lines}
											       alt="Code Lines Effect"
												   style={{ width: '100%', height: '120px', display: 'block', objectFit: 'cover', borderRadius: '12px', marginTop: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }}
											       draggable={false}
										       />
								       </div>


													   {/* Food Ordering App Tile */}
													   <div
														   className="card"
														   style={{ position: 'relative', overflow: 'hidden' }}
														   onClick={() => {
															   handleCardClick(
																   "Order food from a nearby restaurant."
															   );
														   }}
													   >
														   <p>Order food from a nearby restaurant</p>
																	   <img
																		   src={assets.food_bun}
																		   alt="Food Icon"
																		   style={{ width: '100%', height: '120px', display: 'block', objectFit: 'cover', borderRadius: '12px', marginTop: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }}
																		   draggable={false}
																	   />
													   </div>

													   {/* My Finance Tile */}
													   <div
														   className="card"
														   style={{ position: 'relative', overflow: 'hidden' }}
														   onClick={() => {
															   handleCardClick(
																   "Open my finance dashboard"
															   );
														   }}
													   >
														   <p>My finance</p>
														   <img
															   src={assets.credit_card}
															   alt="Credit Card Animated"
															   style={{ width: '100%', height: '120px', display: 'block', objectFit: 'contain', borderRadius: '12px', marginTop: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }}
															   draggable={false}
														   />
														   <img
															   src={assets.currency_symbols}
															   alt="Currency Symbols Animated"
															   style={{ width: '100%', height: '40px', display: 'block', objectFit: 'contain', marginTop: '0.2rem' }}
															   draggable={false}
														   />
													   </div>
	       {/* Finance 3D Modal */}
	       {showFinance && (
		       <div className="taxi-modal-bg" onClick={e => { if (e.target.classList.contains('taxi-modal-bg')) setShowFinance(false); }}>
			       <div className="taxi-modal" style={{ maxWidth: 480, minHeight: 340, background: 'linear-gradient(135deg, #e3f2fd 0%, #fffde7 100%)', boxShadow: '0 8px 32px rgba(0,0,0,0.18)', borderRadius: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
				       <button className="taxi-modal-close" onClick={() => setShowFinance(false)} style={{ position: 'absolute', top: 12, right: 18, fontSize: 28, background: 'none', border: 'none', cursor: 'pointer' }}>×</button>
				       <div style={{ width: 320, height: 220, perspective: 800, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
					       <div style={{ width: 220, height: 140, background: 'linear-gradient(120deg, #1976d2 60%, #43a047 100%)', borderRadius: 18, boxShadow: '0 4px 24px rgba(25, 118, 210, 0.18)', transform: 'rotateY(18deg) rotateX(8deg)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
						       <img src={assets.credit_card} alt="Credit Card" style={{ width: 120, position: 'absolute', top: 18, left: 50, filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.10))' }} />
						       <img src={assets.currency_symbols} alt="Currency Symbols" style={{ width: 90, position: 'absolute', bottom: 18, left: 65 }} />
						       <div style={{ position: 'absolute', bottom: 10, right: 18, color: '#fff', fontWeight: 700, fontSize: 18, textShadow: '0 2px 8px rgba(0,0,0,0.10)' }}>Bank 3D</div>
					       </div>
				       </div>
									   <div style={{ marginTop: 18, color: '#1976d2', fontWeight: 600, fontSize: 18 }}>Credit & Debt Charts</div>
									   <div style={{ display: 'flex', gap: '18px', marginTop: '12px', justifyContent: 'center' }}>
										   <div style={{ width: 80, height: 80, background: 'linear-gradient(135deg,#fffde7,#e3f2fd)', borderRadius: '50%', boxShadow: '0 2px 8px rgba(0,0,0,0.10)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
											   <div style={{ color: '#1976d2', fontWeight: 700, fontSize: 16 }}>Credit</div>
											   <div style={{ color: '#43a047', fontWeight: 600, fontSize: 14 }}>₹ 1,20,000</div>
										   </div>
										   <div style={{ width: 80, height: 80, background: 'linear-gradient(135deg,#fffde7,#e3f2fd)', borderRadius: '50%', boxShadow: '0 2px 8px rgba(0,0,0,0.10)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
											   <div style={{ color: '#1976d2', fontWeight: 700, fontSize: 16 }}>Debt</div>
											   <div style={{ color: '#ff3d00', fontWeight: 600, fontSize: 14 }}>₹ 45,000</div>
										   </div>
										   <div style={{ width: 80, height: 80, background: 'linear-gradient(135deg,#fffde7,#e3f2fd)', borderRadius: '50%', boxShadow: '0 2px 8px rgba(0,0,0,0.10)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
											   <div style={{ color: '#1976d2', fontWeight: 700, fontSize: 16 }}>Balance</div>
											   <div style={{ color: '#1976d2', fontWeight: 600, fontSize: 14 }}>₹ 75,000</div>
										   </div>
									   </div>
			       </div>
		       </div>
	       )}

									       {/* Box Icon Tile */}
									       <div
										       className="card"
										       style={{ position: 'relative', overflow: 'hidden' }}
										       onClick={() => {
												   window.alert("Your package IN458300 is on the way and expected delivery by Monday.");
												   handleCardClick(
													   "Track my package or delivery box."
												   );
										       }}
									       >
										       <p>Track my package or delivery box</p>
											   <img
												   src={assets.delivery_guy}
												   alt="Delivery Guy Icon"
												   style={{ width: '100%', height: '140px', display: 'block', objectFit: 'cover', borderRadius: '12px', marginTop: '0.5rem', boxShadow: '0 2px 12px rgba(0,0,0,0.13)' }}
												   draggable={false}
											   />
								       </div>
						</div>
					</>
				) : (
					<div className="result">
						<div className="result-title">
							<img src={assets.user} alt="" />
							<p>{recentPrompt}</p>
						</div>
						<div className="result-data">
							<img src={assets.gemini_icon} alt="" />
							{loading ? (
								<div className="loader">
									<hr />
									<hr />
									<hr />
								</div>
							) : (
								<p dangerouslySetInnerHTML={{ __html: resultData }}></p>
							)}
						</div>
					</div>
				)}

					       <div className="main-bottom">
						       {/* Taxi Assistant Modal/Page */}
						       {showTaxi && (
							       <div
								       className="taxi-modal-bg"
								       onClick={(e) => {
									       if (e.target.classList.contains('taxi-modal-bg')) {
										       setShowTaxi(false);
									       }
								       }}
							       >
								       <div className="taxi-modal">
									       <button className="taxi-modal-close" onClick={() => setShowTaxi(false)}>×</button>
									       <TaxiAssistant initialPickup={taxiPickup} initialDropoff={taxiDropoff} />
								       </div>
							       </div>
						       )}
						       {/* Food Assistant Modal/Page */}
						       {showFood && (
							       <div
								       className="taxi-modal-bg"
								       onClick={(e) => {
									       if (e.target.classList.contains('taxi-modal-bg')) {
										       setShowFood(false);
									       }
								       }}
							       >
								       <div className="taxi-modal">
									       <button className="taxi-modal-close" onClick={() => setShowFood(false)}>×</button>
									       <FoodAssistant />
								       </div>
							       </div>
						       )}
					<div className="search-box">
						       <input
							       onChange={(e) => {
								       setInput(e.target.value);
							       }}
							       value={input}
							       type="text"
							       placeholder="Enter the Prompt Here"
							       onKeyDown={handleInputKeyDown}
						       />
						       <div>
							       <img src={assets.gallery_icon} alt="" />
							       <img src={assets.mic_icon} alt="" />
							       <img
								       src={assets.send_icon}
								       alt=""
								       onClick={() => {
									       if (!isInputEmpty) onSent();
								       }}
								       style={{ opacity: isInputEmpty ? 0.5 : 1, pointerEvents: isInputEmpty ? 'none' : 'auto', cursor: isInputEmpty ? 'not-allowed' : 'pointer' }}
							       />
						       </div>
					</div>
					<div className="bottom-info">
						<p>
							Gemini may display inaccurate info, including about people, so
							double-check its responses. Your privacy & Gemini Apps
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
