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

		this.totalOptions = []; // array with all the options from scratch
		this.count = 0; // this is the count that can be configurable. initial code has been written for count = 3

		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handleClearSelectedOption = this.handleClearSelectedOption.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
	}

	handleDeleteOptions(){
		this.count = 0;
		this.totalOptions = [];
		this.setState(() => ({ options: [] }));
	};

	handleClearSelectedOption(){
		this.setState(() => ({ selectedOption: undefined }));

	}

	handleDeleteOption(optionToRemove){
		
		this.count = this.count - 1;
		
		var len = 0;//length of the view array

		if (this.state.options !== undefined){
			len = this.state.options.length;
		}
		console.log('Length of view is ' + len);

		if (len > 3) // 4, 5... // this is a futuristic case
		{
			console.log('Count of total-options is ' + this.count);

			var newOption = this.totalOptions[this.count - 3];
			
			this.setState((prevState) => {
					
				var n = prevState.options.indexOf(optionToRemove);
				console.log('Index of to-be-deleted option  is ' + n);

				if (n < 1)
				{
					prevState.options[0] = newOption;
				}
				else if (n < 2)
				{
					prevState.options[1] = newOption;
				}
				else // n = 2
				{
					prevState.options[2] = newOption;
				}
			})
		}			
		else if (len > 2) 
		{
			console.log('Count of total-options is ' + this.count);

			if (this.count > 3) // 3 this case is solved in all cases
			{
				
				this.setState((prevState) => {
					
					var n = prevState.options.indexOf(optionToRemove);
					
					console.log('Index of to-be-deleted option  is ' + n);
					
					if (n < 1)// n = 0
					{
						var newOption = this.totalOptions[this.count - 3];
						prevState.options[0] = newOption;
					} 
					else if (n < 2)// n = 1
					{
						var newOption = this.totalOptions[this.count - 3];

						prevState.options[1] = prevState.options[0];
						prevState.options[0] = newOption;						
					}
					else // n = 2
					{
						var newOption = this.totalOptions[this.count - 3];

						prevState.options[2] = prevState.options[1];
						prevState.options[1] = prevState.options[0];
						prevState.options[0] = newOption;
					}
					
					return {
						options: prevState.options
					}
				})
			}
			else if (this.count > 2) // this.count = 3 
			{
				this.setState((prevState) => {

					var n = prevState.options.indexOf(optionToRemove);
					console.log('Index of to-be-deleted option  is ' + n);

					if (n < 1)// n = 0
					{
						var newOption = this.totalOptions[this.count - 3];
						prevState.options[0] = newOption;
					} 
					else if (n < 2)// n = 1
					{
						var newOption = this.totalOptions[this.count - 3];
						prevState.options[1] = prevState.options[0];
						prevState.options[0] = newOption;
					}
					else // n = 2
					{
						var newOption = this.totalOptions[this.count - 3];
						prevState.options[2] = prevState.options[1];
						prevState.options[1] = prevState.options[0];
						prevState.options[0] = newOption;
					}

					return {
						options: prevState.options
					}
				})
			} 
			else if (this.count > 1)// count = 2
			{
				this.setState((prevState) => {
					
					var n = prevState.options.indexOf(optionToRemove);
					console.log('Index of to-be-deleted option  is ' + n);
					
					if (n < 1)// n = 0
					{
						var newOption = this.totalOptions[this.count - 2];
						prevState.options[0] = newOption;
						this.setState({ options: prevState.options.splice(1) }); 
					} 
					else if (n < 2)
					{
						var newOption = this.totalOptions[this.count - 2];
						prevState.options[1] = prevState.options[0];
						prevState.options[0] = newOption;
						this.setState({ options: prevState.options.splice(1) });
					}
					else // n = 2
					{
						var newOption = this.totalOptions[this.count - 2];
						this.setState({ options: prevState.options.splice(0, 2) }); // cuts first 2 elements. starts at 0. length is 2
					}
					
					return {
							options: prevState.options
						}
					})
					
			}
						
		}
		else if (len > 1) // len = 2
		{
			console.log('Count of total-options is ' + this.count);
						
			this.setState((prevState) => {
				
				var n = prevState.options.indexOf(optionToRemove);
			
				console.log('Index of to-be-deleted option  is ' + n);
				
				if (n < 1)// first row
				{
					prevState.options[0] = prevState.options[1];
					this.setState({ options: prevState.options.splice(1, 1) }); 
				} // n == 0
				else if (n < 2)// second row
				{
					this.setState({ options: prevState.options.splice(0, 1) });
				}

				return {
					options: prevState.options
				}
			})
		}
		else if (len > 0) // len = 1
		{
			console.log('Count of total-options is ' + this.count);
			
			this.setState((prevState) => {
				var n = prevState.options.indexOf(optionToRemove);
								
				console.log('Index of to-be-deleted option  is ' + n);
				
				this.setState(() => ({ options: [] }));
			
				return {
					options: prevState.options
				}})		
		}
	 };

	handlePick(){
		const randomNum = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randomNum];
		this.setState(() => ({
			selectedOption: option
		}));

		//this.optionPoint = randomNum;
	};
	
	handleAddOption(option) {
		this.totalOptions[this.count] = option;

		this.count = this.count + 1;

		//console.log(option)

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
			/*
			this.setState(() => ({
				tempOption: prevState.options.getItem(len - 3)
			}));
			*/

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
		const subtitle = 'Put your life within a computer hands';

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
