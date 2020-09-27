import './Info.css'
import React from 'react'
import { 
	Link, 
	useRouteMatch,
	useParams, 
	Switch,
	Route 
} from 'react-router-dom'


export const Info = () => { 

	let { url, path } = useRouteMatch()
	return (
		<div className="info">

			<h2>Info Page</h2>
			<Switch>
				<Route path={`${path}/:infoId`}>
					<InfoRoute />
				</Route>
				<Route path={path}>
					<h3>Please Select one Route...</h3>
				</Route>
			</Switch>
			<hr />

			<ul>
				<li><Link to={`${url}/test-link1`}>test No. 001</Link></li>
				<li><Link to={`${url}/test-link2`}>test No. 002</Link></li>
				<li><Link to={`${url}/test-link3`}>test No. 003</Link></li>
				<li><Link to={`${url}/test-link4`}>test No. 004</Link></li>
				<li><Link to={`${url}/test-link5`}>test No. 005</Link></li>
				<li><Link to={`${url}/test-link6`}>test No. 006</Link></li>
				<li><Link to={`${url}/test-link7`}>test No. 007</Link></li>
				<li><Link to={`${url}/test-link8`}>test No. 008</Link></li>
				<li><Link to={`${url}/test-link9`}>test No. 009</Link></li>
			</ul>
		</div>
	)
}

const InfoRoute = () => {
	let { infoId  } = useParams()
	return <h3>Requested Info ID: {infoId}</h3>
}