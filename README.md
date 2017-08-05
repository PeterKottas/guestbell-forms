# GuestBell forms

Beautiful, lightweight react forms and form elements. Includes zero setup validation. 

## Important note 

This library is actively used in our startup called GuestBell. This is therefore production code which will likely be maintained an improved on regular basis. All help is much welcome!

## Installation

Using npm:
**npm install guestbell-forms --save**

## Demo

Clone this repo and 

```
npm install
npm start
```

Check out online demo on 

## Quick start

Just import your components like this
```
import { Form, TextInput, SelectInput, SubmitInput, IBaseValidator } from 'guestbell-forms';
```
And use them in your react elements.

## Usage

Check out this simple example:
```
<Form className="container">
    <div className="row">
		<div className={'col-lg-6'}>
			<TextInput required={true} label="Username" value={this.state.name} onChange={this.handleNameChange} />
		</div>
		<div className={'col-lg-6'}>
			<SelectInput required={true} label={'Gender'} values={[{ value: 'M', label: 'Male' }, { value: 'F', label: 'Female' }]} onChange={this.handleGenderChange} value={this.state.gender} />
		</div>
    </div>
    <div className="row">
        <div className={'col-lg-6'}>
			<TextInput validators={["email"]} required={true} label="Email" value={this.state.email} onChange={this.handleEmailChange} />
        </div>
        <div className={'col-lg-6'}>
			<TextInput customValidators={[AgeValidator.instance]} label="Age (optional)" value={this.state.age} onChange={this.handleAgeChange} />
		</div>
    </div>
    <div className="row justify-content-center align-items-center">
		<SubmitInput className="btn btn-primary btn-lg" onClick={this.submitForm}>Submit</SubmitInput>
	</div>
</Form>
```
1. Notice there's no passing props around, yet the form validates perfectly and the submit button is enabled/disabled through magic or react :)
2. See how we support built-in validators (validators={["email"]}) and even custom validators (customValidators={[AgeValidator.instance]})
3. Custom validators are easy to work with, take a look at this AgeValidator
```
export class AgeValidator implements IBaseValidator {
    public static instance = new AgeValidator();
    public Validate(value: string, isRequired: boolean, addError: (error: string) => void): boolean {
        let number = Number(value);
        if (!isNaN(number)) {
            if (number <= 0) {
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