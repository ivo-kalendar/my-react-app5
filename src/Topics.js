import React from 'react'
import { Link } from 'react-router-dom'

export const Topics = () => (
    <div>
      	<h2>Topics</h2>
     	<ul>
	        <li>
	          <Link className='linkStyle' to='/topics/this-is-the-first-link'>
	            This is The First link!!!
	          </Link>
	        </li>
	        <li>
	          <Link className='linkStyle' to='/topics/this-is-the-second-link'>
	            This is the second Link...
	          </Link>
	        </li>
	        <li>
	          <Link className='linkStyle' to='/topics/this-is-the-third-link'>
	            This is the third Link???
	          </Link>
	        </li>
	        <li>
	          <Link className='linkStyle' to='/topics/this-is-the-fourth-link'>
	            This is the fourth Link@@@@
	          </Link>
	        </li>
	        <li>
	          <Link className='linkStyle' to='/topics/this-is-the-last-link'>
	            ...and this is the fifth and last link
	          </Link>
	        </li>
        </ul>
    </div>
)
