/*
 * Container.jsx
 *
 * Copyright © 2016 Antergos
 *
 * This file is part of Cnchi.
 *
 * Cnchi is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License,
 * or any later version.
 *
 * Cnchi is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * The following additional terms are in effect as per Section 7 of the license:
 *
 * The preservation of all legal notices and author attributions in
 * the material or in the Appropriate Legal Notices displayed
 * by works containing it is required.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

// 3rd-Party Libs
import React from 'react'
import Button from 'react-md/lib/Buttons';

import CnchiComponent from '../CnchiComponent';
import Navigation from '../Navigation/Navigation';
import Grid from '../Grid/Grid';
import { t } from '../../utils/locale';

import logo from '../../assets/images/overlay.png'


class Header extends CnchiComponent {

	render() {

		return (
			<Grid size="100" className="grid-parent header">

				{/* ---->>> HEADER TOP ---->>> */}
				<Grid size="100" className="header_top">
					<Grid size="25" suffix="25" className="logo_container">
						<Grid size="25">
							<img src={logo} alt="Antergos logo" className="logo" />
						</Grid>
						<Grid size="75" className="cnchi_title">Cnchi { t( 'Installer' ) }</Grid>
					</Grid>
					<Grid size="25" prefix="25" className="window_buttons">
						<Button icon>remove</Button>
						<Button icon>fullscreen</Button>
						<Button icon>close</Button>
					</Grid>
				</Grid> {/* <<<---- HEADER TOP <<<---- */}

				{/* ---->>> HEADER BOTTOM ---->>> */}
				<Grid size="100" className="header_bottom no-drag">
					<Navigation currentPage={this.props.currentPage} isTopLevel={ true } />
					<div className="progress">
						<div className="determinate" style={ { width: '8%' } }></div>
					</div>
				</Grid> {/* <<<---- HEADER BOTTOM <<<---- */}

			</Grid>
		)
	}
}


export default Header;