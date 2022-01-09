import React, { useState } from 'react';


export default function Recipe(){
	const[copy,setcopy]=useState("Procedure")
	const[recipe,setrecipe]= useState([
		
		{ 
			
		  name: 'Sandwhich',
		  description: 'Trim the edges of the bread slices,Spread a generous amount of butter on each bread slice,Now spread the green chutney evenly on each slice as well. Use as much or as little as you need,Now place the boiled potatoes on 3 slices in one even layer,Sprinkle some cumin powder and black salt over this,Next, layer cucumber, onions, and tomato slices,Sprinkle more cumin powder and black salt,Place another slice of bread over this that has been buttered and spread with chutney as well,Press down gently so that the ingredients stick together and don’t fall out easily,Repeat until you have 3 large sandwiches,Use a sharp knife to further quarter each into 4 smaller pieces,Plate them and serve immediately with more green chutney, if needed',
		 image:"https://images.unsplash.com/photo-1619096534329-564c333a95b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FuZHdoaWNofGVufDB8fDB8fA%3D%3D&w=1000&q=80",
		},
		{ 
			
		  name: 'white sauce pasta',
		  description: 'White Pasta Sauce will continue to thicken as it cools down. So serve and enjoy pasta while they are still hot.For cheesy flavor add 2 tablespoons grated cedar cheese or mozzarella cheese in step-10.Use veggies of your choice. Sweet corn, button mushrooms, french beans, onion etc. (total 1 cup chopped veggies) are excellent for creamy white pasta.Before using left over pasta, re-heat them with 1/4 cup milk or water to make sauce thinner.For preparing white pasta in large quantity for party, follow the given steps. Make sauce, boiled pasta, and stir-fried veggies in advance. Then at the time of serving, re-heat the sauce (if sauce is too thick, add little water or milk in it), add boiled pasta and cooked veggies, mix and cook for 1-2 minutes.',
		 image:"https://cdn3.foodviva.com/static-content/food-images/snacks-recipes/white-sauce-pasta/white-sauce-pasta.jpg",
		},
		{ 
			
			name: 'Tomato Soup',
			description: '1 Build a base. Aromatics are the start to any successful soup. ... 2 Spice it up. Herbs and spices add another layer of complexity to even the simplest soup. ...3 Use in season produce. ...4 To puree or not to puree? ...5 Pick your protein. ...6 Make it healthier with grains. ...7 Take it over the top',
		   image:"https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/tomato-soup-recipe-2.jpg",
		  }
	  ])

	  let getDetails=(id)=>{
		  let z=recipe[id]
		  
		  setcopy(z.description)
		  
	  }


	  return (

		  
		<div >
		<div >
			<div  >
				{
					recipe.map((val, idx) => {
						return <div onClick={() => { getDetails(idx) }}><img  src={val.image} key={idx} width={100} />
							<div >
								<h4 >{val.name}</h4>
							</div>
						</div>
					})
				}
			</div>
			<div >
				<h5>{copy}</h5>
			</div>
		</div>
	</div>
)
}


