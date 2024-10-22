'use client'
import Link from "next/link"
import Dropdown from 'react-bootstrap/Dropdown'

export default function FilterSearch() {
	return (
		<>

			<section className="section-box box-filter-search background-body">
				<div className="container">
					<div className="block-filter-search">
						<div className="filter-left">
							<form className="form-search-filter" action="#">
								<input className="form-control" type="text" name="key" placeholder="I want to attend..." />
							</form>
						</div>
						<div className="filter-right">
							<Link className="category-link btn-click active" href="#">Sports</Link>
							<Link className="category-link btn-click" href="#">Concerts</Link>
							<Link className="category-link btn-click" href="#">Theater</Link>
							<Link className="category-link btn-click" href="#">Festival</Link>
							<Link className="category-link btn-click" href="#">Cities</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
