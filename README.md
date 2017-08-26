# GuestBell forms

Beautiful, lightweight react forms and form elements. Includes zero setup validation. Entirely written in typescript therefore typings are always valid and up to date.

## Demo

Check out [online demo](https://peterkottas.github.io/guestbell-forms)

or

Clone this repo and 

```
npm install
npm start
```

## Important note 

This library is actively used in our startup called GuestBell. This is therefore production code which will be maintained an improved on regular basis. All help is much appreciated!
The reason why we created is most simmilar libraries out there utilize either jQuery or some other huge libraries. This is a litweight solution which will guarantee your website speed and small size. 

## Installation

Using npm:
```
npm install guestbell-forms --save
```

## Quick start

Just import your components like this
```
import { Form, Text, Select, Submit, DynamicSubmit, IBaseValidator, Checkbox, Radio, RadioContainer } from 'guestbell-forms';
```
And use them in your react elements.

## Usage

Check out this simple example:
```
<Form className="container">
	<div className="row">
		<div className="col-lg-6">
			<Text
				required={true} 
				label="Username" 
				value={this.state.name} 
				onChange={this.handleNameChange} />
		</div>
		<div className="col-lg-6">
			<Select
				required={true} 
				label={'Gender'} 
				values={[{ value: 'M', label: 'Male' }, { value: 'F', label: 'Female' }]} 
				onChange={this.handleGenderChange} 
				value={this.state.gender} />
		</div>
	</div>
	<div className="row">
		<div className="col-lg-6">
			<TextInput 
				validators={["email"]} 
				required={true} 
				label="Email" 
				value={this.state.email} 
				onChange={this.handleEmailChange} />
		</div>
		<div className="col-lg-6">
			<Text
				customValidators={[AgeValidator.instance]} 
				label="Age (optional)" 
				value={this.state.age} 
				onChange={this.handleAgeChange} />
		</div>
	</div>
	<div className="row justify-content-center align-items-center">
		<Submit
			className="btn btn-primary btn-lg" 
			onClick={this.submitForm}>
				Submit
		</Submit>
	</div>
</Form>
```
1. Notice there's no passing props around, yet the form validates perfectly and the submit button is enabled/disabled through magic or react :)
2. See how we support built-in validators (validators={["email"]}) and even custom validators (customValidators={[AgeValidator.instance]})
3. Custom validators are easy to work with, take a look at this AgeValidator
```
class AgeValidator implements IBaseValidator {
	public static instance = new AgeValidator();
	public Validate(value: string, isRequired: boolean, addError: (error: string) => void): boolean {
		let number = Number(value);
		if (!isNaN(number)) {
			if (number < 0) {
				addError('Not born yet?');
				return false;
			}
			if (number > 122) {
				addError('Older than Jeanne Calment? C\'mon');
				return false;
			}
			return true;
		}
		else {
			addError('Invalid age');
		}
		return false;
	}
}
```
Just a class with one method. We provide the static instance for simplicity.
4. All inputs work like typical react inputs. It's recommended to bind them with the value and the change handler. 

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT 
