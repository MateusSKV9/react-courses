function Select({ htmlFor, name, id, options, handleOnChange, value, label }) {
	return (
		<div className="form-group">
			<label htmlFor={htmlFor}>{label}</label>
			<select value={value || ""} onChange={handleOnChange} name={name} id={id}>
				<option value="" disabled>
					Selecione uma opção
				</option>
				{options.map((option) => (
					<option key={option.id} value={option.id}>
						{option.name}
					</option>
				))}
			</select>
		</div>
	);
}

export default Select;
