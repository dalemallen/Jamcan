import React from "react";

const HEAT_MAP = {
	Mild: [1, 2],
	Medium: [3],
	Hot: [4, 5],
};

function ProductFilters({ filters, setFilters }) {
	const toggleHeat = (label) => {
		const current = [...filters.heat];
		const levelsForLabel = HEAT_MAP[label];

		const isActive = levelsForLabel.every((lvl) => current.includes(lvl));

		let updated = [];

		if (isActive) {
			// remove these levels
			updated = current.filter((lvl) => !levelsForLabel.includes(lvl));
		} else {
			// add these levels
			updated = [
				...current,
				...levelsForLabel.filter((lvl) => !current.includes(lvl)),
			];
		}

		setFilters({ heat: updated });
	};

	return (
		<div
			style={{
				display: "flex",
				gap: 8,
				padding: "16px 0",
				flexWrap: "wrap",
			}}
		>
			{Object.keys(HEAT_MAP).map((label) => {
				const isActive = HEAT_MAP[label].every((lvl) =>
					filters.heat.includes(lvl)
				);
				return (
					<button
						key={label}
						onClick={() => toggleHeat(label)}
						style={{
							padding: "8px 12px",
							borderRadius: 6,
							border: "1px solid #ccc",
							backgroundColor: isActive ? "#fbb033" : "#fff",
							cursor: "pointer",
						}}
					>
						{label}
					</button>
				);
			})}
		</div>
	);
}

export default ProductFilters;
