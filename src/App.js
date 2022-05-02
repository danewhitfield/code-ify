import './App.css';

function App() {
	const node = (
		<div className='App'>
			<div className='snippet-card'>
				<>
					<section className='window-btns'>
						<div className='window-btn red'></div>
						<div className='window-btn yellow'></div>
						<div className='window-btn green'></div>
					</section>
				</>
				<form className='code-area'>
					<textarea data-role='none' type='textarea' />
				</form>
			</div>
		</div>
	);

	return node;
}

export default App;
