import { useNavigate } from 'react-router-dom';

const About = () => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate('../home');
	}
	return (
		<>
			<h3>Ini halaman About!</h3>

			<button onClick={handleClick}>Klik menuju Home</button>
		</>
		);
};

export default About;