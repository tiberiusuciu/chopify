// Boilerplate reducer to be taken as example

import {
	EXAMPLE_ACTION,
} from '../actions/action.js';

import _ from 'lodash';

const NAMES = [
	"Elliott Slaten",  
	"Rafaela Mateo",  
	"Elden Boulden",  
	"Delia Bruni",  
	"Thao Quam",  
	"Rocky Sharon",  
	"Margrett Flenniken",  
	"Lester Kiger",  
	"Elmira Alcantar",  
	"Kory Ealey",  
	"Merrilee Discher",  
	"Babara Pugsley",  
	"Candance Gourlay",  
	"Faviola Elton",  
	"Mira Wesson",  
	"Cassie Wiers",  
	"Eleonora Brackens",  
	"Rosaura Giardina",  
	"Ella Crudup",  
	"Mara Lundgreen",  
	"Bronwyn Smail",  
	"Ashely Defelice",  
	"Charlette Keala",  
	"Roxane Gowins",  
	"Hollis Smith",  
	"Serena Lesane",  
	"Austin Karg",  
	"Stefania Mcgaha",  
	"Martina Laurence",  
	"Josef Pruden",  
	"Hermila Bellinger",  
	"Lael Pinkston",  
	"Myrl Nokes",  
	"Tegan Everman",  
	"Shaunda Macauley",  
	"Larry Trombley",  
	"Florence Viger",  
	"Merlyn Harvell",  
	"Iola Shimp",  
	"Doug Sleeth",  
	"Dora Salley",  
	"Detra Sheley",  
	"Melvin Reddick",  
	"Kanisha Lucke",  
	"Keli Hanchett",  
	"Jennine Mcdonalds",  
	"Monroe Menges",  
	"Cierra Patchell",  
	"Alene Greve",  
	"Lala Mcgraw",  
];

const example = (state = {selected_name: "No one"}, action) => {
	switch (action.type) {
		case EXAMPLE_ACTION:
			var selected_name = NAMES[_.random(0, NAMES.length - 1)];
            return {
                ...state,
                selected_name: selected_name,
            };
		default:
			return state;
	}
};

export default ({
	example,
});
