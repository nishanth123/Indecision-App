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

		this.totalOptions = [];
		this.count = 0;

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
		
		var len = 0;

		if (this.state.options !== undefined){
			len = this.state.options.length;
		}
		console.log('Length is ' + len);

		if (len > 2)
		{
			var newOption = this.totalOptions[this.count - 3];

			if (this.count > 2)
			{	
				
				this.setState((prevState) => {
				var n = prevState.options.indexOf(optionToRemove);
					
					if (n == 0)
					{
						
						if (this.count > 3)
						{
							console.log(this.count);
							prevState.options[0] = newOption;
						}
						else if (this.count > 2)
						{
							console.log(this.count);
							prevState.options[0] = newOption;
							console.log('test1');

							//prevState.options[0] = prevState.options[1];
							//prevState.options[1] = prevState.options[2];

							//prevState.options[2] = undefined;
							
							//this.setState({ options: prevState.options.splice(2) });
						}
						else if (this.count > 1)
						{
							prevState.options[0] = prevState.options[1];
							prevState.options[1] = prevState.options[2];
							
							console.log(this.count);
							var array = prevState.options;
							console.log('before logging1');
							console.log(array);
							array = array.slice(0, 1);
							console.log('before logging2');
							console.log(array);

							this.setState({ options: array });
						}
						else if (this.count > 0)
						{
							//var array = prevState.options;
							//array.splice(1);
							console.log('2.');

							prevState.options[2] = undefined;
							
							this.setState({ options: prevState.options.splice(0) });
						}
						else
						{
								//var array = prevState.options;
								//array.splice(0);
								console.log('3.');

								this.setState({ options: [] });
						} 
					} // n == 0
					else if (n == 1)
					{
						prevState.options[2] = prevState.options[2];
						prevState.options[1] = prevState.options[0];

						if (this.count > 3)
						{
							prevState.options[0] = newOption;
						}
						else
						{
							this.setState(() => ({ options: [] }));
						}
					}
					else
					{
						prevState.options[2] = prevState.options[1];
						prevState.options[1] = prevState.options[0];

						if (this.count > 3)
						{
							prevState.options[0] = newOption;
						}
						else
						{
							this.setState(() => ({ options: [] }));
						}
					}

					return {
						options: prevState.options
					}
				})// setState end


			} // this.count > 2
			else
			{
				
				if (this.count > 3)
				{
					console.log('test2 3');

					prevState.options[0] = prevState.options[1];
					prevState.options[1] = prevState.options[2];

					prevState.options[2] = undefined;
					//this.setState({ options: prevState.options.splice(2) });
				}
				else if (this.count > 2)
				{
					console.log('test2 2');
				}
				else if (this.count > 1)
				{
					//var n = prevState.options.indexOf(optionToRemove);

					console.log('test2 1');

					this.setState((prevState) => {
					
						console.log('test2 1 0');
						//this.setState({ options: [] });
						this.setState({ options: prevState.options.splice(1) });

						console.log('test2 1 0 1');
						//prevState.options[0] = prevState.options[1];
						//prevState.options[1] = prevState.options[2];						
					});

					console.log('test2 1 0 2');
					//prevState.options[2] = undefined;
				}
				else
				{
					console.log('test2 0');

					this.setState((prevState) => ({ 
						options: prevState.options.filter((option) => optionToRemove !== option).concat(newOption)
					}));
				}
			}
			
		}// len > 2		
		else if (len > 1) {

			console.log('test2 0 start 1');

			var newOption = this.totalOptions[this.count - 3];
			
			console.log('test2 0 start 2');
			if (this.count > 2)
			{	
				console.log('test2 0 end 1 2');
				
				//this.setState((prevState) => ({ 
				//	options: prevState.options.filter((option) => optionToRemove !== option)
				//}));
			}
			else if (this.count > 1)
			{
				console.log('test2 0 end 1 1');
			}
			else if (this.count > 0)
			{
				console.log('test2 0 end 1 0');

				this.setState((prevState) => {
					var n = prevState.options.indexOf(optionToRemove);
						
					if (n == 0)
					{
						if (this.count > 3)
						{
							//prevState.options[0] = prevState.options[1];
							console.log('$' + this.count);

						}
						else if (this.count > 2)
						{
							console.log('$' + this.count);
						}
						else if (this.count > 1)
						{
							
							console.log('$' + this.count);
							
						}
						else if (this.count > 0)
						{
							console.log('$' + this.count);
							prevState.options[0] = prevState.options[1];
							console.log('$1' + this.count);
							this.setState({ options: prevState.options.splice(1) });
							console.log('$2' + this.count);
						}
						else
						{
							console.log('$' + this.count);
						} 
					} // n == 0
					else if (n == 1)
					{
						prevState.options[2] = prevState.options[2];
						prevState.options[1] = prevState.options[0];

						if (this.count > 3)
						{
							prevState.options[0] = newOption;
						}
						else
						{
							this.setState(() => ({ options: [] }));
						}
					}
					else
					{
						prevState.options[2] = prevState.options[1];
						prevState.options[1] = prevState.options[0];

						if (this.count > 3)
						{
							prevState.options[0] = newOption;
						}
						else
						{
							this.setState(() => ({ options: [] }));
						}
					}
	
					return {
						options: prevState.options
					}
				})//setState

				//prevState.options[0] = prevState.options[1];
				console.log('test2 0 end 1 -0.5');

				//this.setState((prevState) => ({ 
				//	options: prevState.options.filter((option) => optionToRemove !== option)
				//}));
			}
			else 
			{
				console.log('test2 0 end 1 -1');
			}

			console.log('test2 0 end 3');
		}
		else if (len > 0) {
			console.log('len0 0 start 1');
			
			var newOption = this.totalOptions[this.count - 3];
						
			console.log('len0 0 start 2 ' + this.count);
			if (this.count > 2)
			{	
				console.log('len0 0 end 1 2');
							
				//this.setState((prevState) => ({ 
				//	options: prevState.options.filter((option) => optionToRemove !== option)
				//}));
			}
			else if (this.count > 1)
			{
				console.log('len0 0 end 1 1');
			}
			else if (this.count > 0)
			{
				console.log('len0 0 end 1 0');
			
				this.setState((prevState) => {
				var n = prevState.options.indexOf(optionToRemove);
									
				if (n == 0)
				{
					if (this.count > 3)
					{
						//prevState.options[0] = prevState.options[1];
						console.log('$len0' + this.count);
			
					}
					else if (this.count > 2)
					{
						console.log('$len0' + this.count);
					}
					else if (this.count > 1)
					{
										
						console.log('$len0' + this.count);
										
					}
					else if (this.count > 0)
					{
						console.log('$len0' + this.count);
						prevState.options[0] = prevState.options[1];
						console.log('$len01' + this.count);
						this.setState({ options: prevState.options.splice(1) });
						console.log('$len02' + this.count);
					}
					else
					{
						console.log('$len0' + this.count);
					} 
				} // n == 0
				else if (n == 1)
				{
					prevState.options[2] = prevState.options[2];
					prevState.options[1] = prevState.options[0];
			
					if (this.count > 3)
					{
						prevState.options[0] = newOption;
					}
					else
					{
						this.setState(() => ({ options: [] }));
					}
				}
				else
				{
					prevState.options[2] = prevState.options[1];
					prevState.options[1] = prevState.options[0];
			
					if (this.count > 3)
					{
						prevState.options[0] = newOption;
					}
					else
					{
						this.setState(() => ({ options: [] }));
					}
				}
				
				return {
						options: prevState.options
				}})//setState
			
				//prevState.options[0] = prevState.options[1];
				console.log('test2 0 end 1 -0.5');
				
				//this.setState((prevState) => ({ 
				//	options: prevState.options.filter((option) => optionToRemove !== option)
				//}));
			}
			else 
			{
				console.log('test2 0 end 1 -1');

				this.setState((prevState) => {
					var n = prevState.options.indexOf(optionToRemove);
					console.log('len0 this.count:n is ' + this.count);
					console.log(n);

					if (n == 0)
					{
						if (this.count > 3)
						{
							//prevState.options[0] = prevState.options[1];
							console.log('$len0test2' + this.count);
				
						}
						else if (this.count > 2)
						{
							console.log('$len0test2' + this.count);
						}
						else if (this.count > 1)
						{
											
							console.log('$len0test2' + this.count);
											
						}
						else if (this.count > 0)
						{
							console.log('$len0test20 - start');
							this.setState(() => ({ options: [] }));
							//this.setState({ options: prevState.options.splice(0) });
							console.log('$len0test20 - end');

							//prevState.options[0] = prevState.options[1];
							//console.log('$len0test21' + this.count);
							//this.setState({ options: prevState.options.splice(1) });
							//console.log('$len0test22' + this.count);
						}
						else
						{
							console.log('$len0test20 - start 2');
							this.setState(() => ({ options: [] }));
							//this.setState({ options: prevState.options.splice(0) });
							console.log('$len0test20 - end 2');

							console.log('$len0test2' + this.count);
						} 
					} // n == 0
					else if (n == 1)
					{
						prevState.options[2] = prevState.options[2];
						prevState.options[1] = prevState.options[0];
				
						if (this.count > 3)
						{
							prevState.options[0] = newOption;
						}
						else
						{
							this.setState(() => ({ options: [] }));
						}
					}
					else
					{
						prevState.options[2] = prevState.options[1];
						prevState.options[1] = prevState.options[0];
				
						if (this.count > 3)
						{
							prevState.options[0] = newOption;
						}
						else
						{
							this.setState(() => ({ options: [] }));
						}
					}
					
					return {
							options: prevState.options
					}})//setState
			}
			
			console.log('test2 0 end 3');
		}
		else 
		{
			console.log('len0 0 end else last');
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
