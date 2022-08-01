import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
	const role = useSelector((store) => store.user.role);

	return role === 'admin' ? children : <Navigate to='/courses' />;
}
