import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {

	constructor(){
		super();

		this.state = {
			options: [],
			selectedOption: undefined
		};
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handleClearSelectedOption = this.handleClearSelectedOption.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
	}

	handleDeleteOptions(){
		console.log('handleDeleteOptions');
		this.setState(() => ({ options: [] }));
	};

	handleClearSelectedOption(){
		this.setState(() => ({ selectedOption: undefined }));
	}

	handleDeleteOption(optionToRemove){
		console.log('handleDeleteOption');

		this.setState((prevState) => ({ 
			options: prevState.options.filter((option) => optionToRemove !== option)
		}));
	 };

	handlePick(){
		const randomNum = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randomNum];
		this.setState(() => ({
			selectedOption: option
		}));
	};
	handleAddOption(option) {
				
		console.log(option)
		if (!option) {
			return 'Enter valid value to add item';
		} else if (this.state.options.indexOf(option) > -1) {
			return 'This option already exists';	
		}

		var len = 0;

		if (this.state.options !== undefined){
			len = this.state.options.length;
		}
		if (len > 2)
		{
			this.setState((prevState) => ({
				options: prevState.options.slice(len - 2, len).concat(option)
			}));
		}
		else {
			this.setState((prevState) => ({
				options: prevState.options.concat(option)
			}))
		}
	};

	componentDidMount() {
		console.log('In componentDidMount');

		try {
			
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);

			if (options) {
				this.setState(() => ({ options }));
			}
		} catch (e) {
			// Do nothing at all
		}
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
		}
	}
	componentWillUnmount() {
		console.log('componentWillUnmount');
	}

	render() {
		const subtitle = 'Put your life in the computer hands';

		

		return (
			<div>
				<Header subtitle={subtitle} />
				<div className="container">
					<Action 
					hasOptions={this.state.options.length > 0}
					handlePick={this.handlePick}
				/>

				<div className="widget">
					<Options
					options={this.state.options}
					handleDeleteOptions={this.handleDeleteOptions}
					handleDeleteOption={this.handleDeleteOption}
					/>

					<AddOption
					handleAddOption={this.handleAddOption}
					/>

				</div>
			</div>

			<OptionModal
			selectedOption={this.state.selectedOption}
			handleClearSelectedOption={this.handleClearSelectedOption}
			/> 
			</div>
		);
	}
}
