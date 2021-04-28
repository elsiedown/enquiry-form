# Blink Enquiry Form

A digital payroll enquiry form to make the system more efficient and easier. Built using React, JavScript, Html & CSS.

## Set up


`yarn start` or `yarn dev`  to run the development server
## Process

* I started by setting up the basic react application and adding in the jsx for the basic form.
* I then moved on to hooking up the form submission - logging as I went to checked the different parts of the form were working.
* Once I was happy that the form was working I moved onto working out how the date field would be required only if certain options were selected in the first form field. I thought about changing the 'required' field to true if the Missing Pay and Incorrect Pay options were chosen but then opted to actually hide the date field altogether unless those options were selected. I thought this would add to the user experience (as users may enter a date when not required).
* Once the conditional statement was working, I moved onto styling. I used Bulma for the basic form layout and added a 'form sent' page using a ternary operator to notify the user the form had been successfully submitted, again to enhance the user experience. 

## Wins

* I was able to render the form using the validation rules - and used an if statement to determine whether the date field was required. 
* I enjoyed adding some styling to enhance the user experience and used a ternary operator to show a 'form sent' page once the user has submitted their enquiry.
* After figuring out the initial form layout I then refactored the code, splitting the useForm hook and the Form layout into separate components to increase readability. 


## Challenges


* I initially starting using react-hook-form but had difficulty trying to implement the conditional statement for the date field and therefore ended up using my own useForm component. 
* I spent more than two hours on the task (I think I spent a total of 3 hours on it - I spent too much time trying to figure out the react-hook-form and in future would have made the decision to use my own component earlier on. 






This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

