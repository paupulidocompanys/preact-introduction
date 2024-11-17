import preactLogo from '../../assets/preact.svg';
import { signal } from '@preact/signals';
import './style.css';


export const contador = signal(0); 

const incremetaContador  = () => {
	contador.value++;
}
export function Home() {
	return (
		<div>
			<h1>Hola mundo desde pReact</h1>
			<button onClick={incremetaContador}>
				Contador: {contador}
			</button>
		</div>
	);
}


