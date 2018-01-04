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

		if (len > 3) // 4, 5...
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
		else if (len > 2) // 3
		{
			console.log('Count of total-options is ' + this.count);

			console.log('test 5');

			if (this.count > 3)
			{
				// TODO
				this.setState((prevState) => {
					
					var n = prevState.options.indexOf(optionToRemove);
					console.log('Index of to-be-deleted option  is ' + n);
					
					if (n < 1)// n = 0
					{
						prevState.options[0] = newOption;
						//this.setState({ options: prevState.options.splice(1) });
						console.log('test 8');						 
					} // n = 0
					else if (n < 2)// n = 1
					{
						prevState.options[1] = prevState.options[0];
						prevState.options[0] = newOption;						
					}
					else // n = 2
					{
						prevState.options[2] = prevState.options[1];
						prevState.options[1] = prevState.options[0];
						prevState.options[0] = newOption;
											
						// to-do test thoroughly
						//this.setState({ options: prevState.options.splice(1) });
					}
					
					return {
						options: prevState.options
					}
				})

				console.log('test 6');
			}
			else if (this.count > 2) // this.count = 3
			{
				console.log('test 3');
				var newOption = this.totalOptions[this.count - 3];
				console.log('test 4');

				this.setState((prevState) => {

					var n = prevState.options.indexOf(optionToRemove);
					console.log('Index of to-be-deleted option  is ' + n);

					if (n < 1)// n = 0
					{
						prevState.options[0] = newOption;
						console.log('test 1');
						this.setState({ options: prevState.options.splice(1) });
						console.log('test 2');						 
					} // n = 0
					else if (n < 2)// n = 1
					{
						prevState.options[1] = prevState.options[0];
						prevState.options[0] = newOption;						
					}
					else // n = 2
					{
						prevState.options[2] = prevState.options[1];
						prevState.options[1] = prevState.options[0];
						prevState.options[0] = newOption;
						
						// to-do test thoroughly
						//this.setState({ options: prevState.options.splice(1) });
					}

					return {
						options: prevState.options
					}
				})// setState end
			} // this.count > 2
						
		}// len > 2		
		else if (len > 1) // len = 2
		{
			console.log('Count of total-options is ' + this.count);
						
			this.setState((prevState) => {
				var n = prevState.options.indexOf(optionToRemove);
					
				console.log('Index of to-be-deleted option  is ' + n);
				
				if (n < 1)// first row
				{
					prevState.options[0] = prevState.options[1];
					this.setState({ options: prevState.options.splice(1) }); 
				} // n == 0
				else if (n < 2)// second row
				{
					// to-do test thoroughly
					// this.setState({ options: prevState.options.splice(1) });
					this.setState(() => ({ options: [] }));
				}

				return {
					options: prevState.options
				}
			})
			console.log('test 0 end 1');
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
		
				console.log('test end end');
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
