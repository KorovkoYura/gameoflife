import React, { Component } from 'react';

import Box from './Box';

class Grid extends Component {
	render() {
		const width = this.props.cols * 14;

		let boxClass = "";

		const rowsArr = this.props.gridFull.map((rowArr, rowIdx) =>
			rowArr.map((item, colIdx) => {
				const boxId = `${rowIdx}_${colIdx}`;

				boxClass = this.props.gridFull[rowIdx][colIdx] ? "box on" : "box off";

				return (
					<Box
						boxClass={boxClass}
						key={boxId}
						boxId={boxId}
						row={rowIdx}
						col={colIdx}
						selectBox={this.props.selectBox}
					/>
				);
			})
		);
		
		return (
			<div className="grid" style={{width: width}}>
				{rowsArr}
			</div>
		);
	}
}

export default Grid;