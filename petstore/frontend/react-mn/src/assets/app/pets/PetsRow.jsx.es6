import React from 'react'
import PetsCellJsx from "./PetsCell";
import {array} from "prop-types";

const PetsRow = ({pets}) => <div className="row">{pets.map((pet, i) => <PetsCellJsx key={i} pet={pet} />)}</div>

PetsRow.propTypes = {pets: array}

export default PetsRow