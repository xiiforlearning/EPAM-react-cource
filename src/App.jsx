import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';

import styles from './App.module.scss';

function App() {
	return (
		<div className={styles.wrapper}>
			<Header></Header>
			<Courses></Courses>
		</div>
	);
}

export default App;
