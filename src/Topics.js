import React from 'react'
import { Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom'


export const Topics = () => {
	
	let match = useRouteMatch()
	return (
	    <div className='topics'>
	      	<h2>Topics</h2>
	      	<hr />

	     	<ul>
		        <li>
		          <Link to={`${match.url}/first-link`}>This is the First link!!!</Link>
		        </li>
		        <li>
		          <Link to={`${match.url}/second-link`}>This is the Second Link...</Link>
		        </li>
		        <li>
		          <Link to={`${match.url}/third-link`}>This is the Third Link???</Link>
		        </li>
		        <li>
		          <Link to={`${match.url}/fourth-link`}>This is the Fourth Link@@@@</Link>
		        </li>
		        <li>
		          <Link to={`${match.url}/the-last-link`}>This is the Fifth Link</Link>
		        </li>
	        </ul>

	        <Switch>
		        <Route path={`${match.path}/:topicId`}>
		          <Topic />
		        </Route>
		        <Route path={match.path}>
		          <h3>Please select a topic to display.</h3>
		        </Route>
		    </Switch>
	    </div>
	)

}

const Topic = () => {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

