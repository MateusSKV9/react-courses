function Select({ htmlFor, name, id, options, handleOnChange, value, label }) {
	return (
		<div className="form-group">
			<label htmlFor={htmlFor}>{label}</label>
			<select onChange={handleOnChange} name={name} id={id}>
				<option selected disabled>
					Selecione uma opção
					{options}
				</option>
			</select>
		</div>
	);
}

export default Select;
