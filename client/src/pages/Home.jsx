import React from "react";
import "./pages.css";
import { IoMdAddCircle } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import laptop from "../images/laptop1.png";
import {
	Button,
	HomeCardRight,
	CatagoryCard,
	HomeCardLeft,
} from "../components/styled/common";

function Home() {
	return (
		<>
			<div className="home-flex">
				<div className="home-left"></div>
				<div className="home-right">
					<div className="catagory-card">
						<div className="catagory-bg0">
							<img src={laptop} alt="" style={{ opacity: 0.4 }} />
							<div className="catagory-title">Laptops</div>
						</div>
					</div>
					<div className="catagory-card">
						<div className="catagory-bg1">
							<img src={laptop} alt="" style={{ opacity: 0.4 }} />
							<div className="catagory-title">Phones</div>
						</div>
					</div>
					<div className="catagory-card">
						<div className="catagory-bg2">
							<img src={laptop} alt="" style={{ opacity: 0.4 }} />
							<div className="catagory-title">Earphones</div>
						</div>
					</div>
					<div className="catagory-card">
						<div className="catagory-bg2">
							<img src={laptop} alt="" style={{ opacity: 0.4 }} />
							<div className="catagory-title">Watches</div>
						</div>
					</div>
				</div>
			</div>
			<div className="home-title">
				<h1>Trending Products</h1>
				<h2>List of trending products available in our atore</h2>
			</div>
			<div className="trending-product-list">
				<div className="trending-card">
					<div className="card-content">
						<div className="for-image">
							<div className="favorite">
								<span>
									<MdFavorite />
								</span>
							</div>
							<div className="img">
								<img src={laptop} alt="" />
							</div>
						</div>
						<div className="for-title">
							<h4>Lenevo T440</h4>
						</div>
						<div className="for-price">
							<h2>$1900</h2>
							<span>
								<IoMdAddCircle />
							</span>
						</div>
					</div>
				</div>
				<div className="trending-card">
					<div className="card-content">
						<div className="for-image">
							<div className="favorite">
								<span>
									<MdFavorite />
								</span>
							</div>
							<div className="img">
								<img src={laptop} alt="" />
							</div>
						</div>
						<div className="for-title">
							<h4>Lenevo T440</h4>
						</div>
						<div className="for-price">
							<h2>$1900</h2>
							<span>
								<IoMdAddCircle />
							</span>
						</div>
					</div>
				</div>
				<div className="trending-card">
					<div className="card-content">
						<div className="for-image">
							<div className="favorite">
								<span>
									<MdFavorite />
								</span>
							</div>
							<div className="img">
								<img src={laptop} alt="" />
							</div>
						</div>
						<div className="for-title">
							<h4>Lenevo T440</h4>
						</div>
						<div className="for-price">
							<h2>$1900</h2>
							<span>
								<IoMdAddCircle />
							</span>
						</div>
					</div>
				</div>
				<div className="trending-card">
					<div className="card-content">
						<div className="for-image">
							<div className="favorite">
								<span>
									<MdFavorite />
								</span>
							</div>
							<div className="img">
								<img src={laptop} alt="" />
							</div>
						</div>
						<div className="for-title">
							<h4>Lenevo T440</h4>
						</div>
						<div className="for-price">
							<h2>$1900</h2>
							<span>
								<IoMdAddCircle />
							</span>
						</div>
					</div>
				</div>
				<div className="trending-card">
					<div className="card-content">
						<div className="for-image">
							<div className="favorite">
								<span>
									<MdFavorite />
								</span>
							</div>
							<div className="img">
								<img src={laptop} alt="" />
							</div>
						</div>
						<div className="for-title">
							<h4>Lenevo T440</h4>
						</div>
						<div className="for-price">
							<h2>$1900</h2>
							<span>
								<IoMdAddCircle />
							</span>
						</div>
					</div>
				</div>
				<div className="trending-card">
					<div className="card-content">
						<div className="for-image">
							<div className="favorite">
								<span>
									<MdFavorite />
								</span>
							</div>
							<div className="img">
								<img src={laptop} alt="" />
							</div>
						</div>
						<div className="for-title">
							<h4>Lenevo T440</h4>
						</div>
						<div className="for-price">
							<h2>$1900</h2>
							<span>
								<IoMdAddCircle />
							</span>
						</div>
					</div>
				</div>
				<div className="trending-card">
					<div className="card-content">
						<div className="for-image">
							<div className="favorite">
								<span>
									<MdFavorite />
								</span>
							</div>
							<div className="img">
								<img src={laptop} alt="" />
							</div>
						</div>
						<div className="for-title">
							<h4>Lenevo T440</h4>
						</div>
						<div className="for-price">
							<h2>$1900</h2>
							<span>
								<IoMdAddCircle />
							</span>
						</div>
					</div>
				</div>
				<div className="trending-card">
					<div className="card-content">
						<div className="for-image">
							<div className="favorite">
								<span>
									<MdFavorite />
								</span>
							</div>
							<div className="img">
								<img src={laptop} alt="" />
							</div>
						</div>
						<div className="for-title">
							<h4>Lenevo T440</h4>
						</div>
						<div className="for-price">
							<h2>$1900</h2>
							<span>
								<IoMdAddCircle />
							</span>
						</div>
					</div>
				</div>
				<div className="trending-card">
					<div className="card-content">
						<div className="for-image">
							<div className="favorite">
								<span>
									<MdFavorite />
								</span>
							</div>
							<div className="img">
								<img src={laptop} alt="" />
							</div>
						</div>
						<div className="for-title">
							<h4>Lenevo T440</h4>
						</div>
						<div className="for-price">
							<h2>$1900</h2>
							<span>
								<IoMdAddCircle />
							</span>
						</div>
					</div>
				</div>
				<div className="trending-card">
					<div className="card-content">
						<div className="for-image">
							<div className="favorite">
								<span>
									<MdFavorite />
								</span>
							</div>
							<div className="img">
								<img src={laptop} alt="" />
							</div>
						</div>
						<div className="for-title">
							<h4>Lenevo T440</h4>
						</div>
						<div className="for-price">
							<h2>$1900</h2>
							<span>
								<IoMdAddCircle />
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
