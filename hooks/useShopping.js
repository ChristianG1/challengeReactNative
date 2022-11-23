import { useState } from "react"
import axios from "axios";

export const useShopping = (select) => {
  const [list, setList] = useState([]);
  const [listWithRandom, setListWithRandom] = useState([]);
  const [random, setRandom] = useState();
  let newArray = [];

	const generateRandom = () => {
		const value = ['+', '-'];

		const random = Math.floor(Math.random() * value.length);

		return value[random];
	}

	const getShopping = async () => {
		let newArray = [];

		await axios.get('https://6222994f666291106a29f999.mockapi.io/api/v1/products').then(res => newArray = res?.data);

		newArray.forEach(item => {
			item['random'] = generateRandom()
		})

		setList(newArray)
		// return setList(newArray)
	}

	

	return {getShopping, list, generateRandom, setList }
}

