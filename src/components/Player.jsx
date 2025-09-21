import { useState } from "react"

export default function Player({ initialName, symbol }){
	const [playerName, setPlayerName] = useState(initialName);
	const [ isEdition, setIsEditing ] = useState(false);

	function handelEditclick(){
			setIsEditing(editing => !editing);
	}

	function handleChange(event){
		setPlayerName(event.target.value);
	}
	
	let editablePlayerName = <span className="player-name">{playerName}</span>
	let btnCaption = 'Edit'
	if (isEdition){
		editablePlayerName = <input type="text" required Value={playerName} onChange={handleChange}></input>
		btnCaption = 'Save'
	}

	return <li>
		  <span className="player">
			{editablePlayerName}
			<span className="player-symbol">{symbol}</span>
		  </span>
		  <button onClick={handelEditclick}>{btnCaption}</button>
		</li>
}